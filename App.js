import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Report from './models/reportModel.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());


const Mongo_Url = process.env.MONGO_URL;
mongoose.connect(Mongo_Url, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch((error)=> console.log("DB not connected"));


app.get('/', (req , res) => {
    res.send("Server is Ready");
});

app.listen(5000, ()=>{
    console.log("server at http://localhost:5000");
});


app.post('/reports', async (req, res) => {

    const reportDetails = req.body.reportDetails;
    const pricePerKg = (reportDetails.price)/(reportDetails.convFctr);
    const user = (reportDetails.userID);
    const report = await Report.findOne({
        marketID: reportDetails.marketID,
        cmdtyID: reportDetails.cmdtyID,
    });

    if(!report)
    {
        const report = new Report({
            cmdtyName:reportDetails.cmdtyName,
            cmdtyID:reportDetails.cmdtyID,
            marketID:reportDetails.marketID,
            marketName:reportDetails.marketName,
            users:[user],
            priceUnit:"Kg",
            price:pricePerKg,
          });  
        
          try {
            await report.save();
            const response = {
                status:"success",
                reportID: report._id,
            }
            res.send(response);
        } catch (error) {
            console.log("Something Went Wrong in 1");
            res.send(error.message);
        }

    }else{
        const numOfUsers = report.users.length;
        report.price = ( (report.price)*numOfUsers + pricePerKg )/(numOfUsers+1);
        const index = report.users.indexOf(reportDetails.userID);
        if(index == -1)
        {
            report.users.push(reportDetails.userID);     
        } 
        try {
            await report.save();
            const response = {
                status:"success",
                reportID: report._id,
            }
            res.send(response);
        } catch (error) {
            console.log("Something Went Wrong in 2");
            res.send(error.message);
        }
    }
    
    
  });
  


  app.get('/reports', async (req, res) => {

    var reportID = req.query.reportID.replace(/(\r\n|\n|\r)/gm, "");
    const report = await Report.findById(reportID);
    if(report){
        const response = {
            _id: reportID,
            cmdtyName: report.cmdtyName,
            cmdtyID: report.cmdtyID,
            marketID: report.marketID,
            marketName: report.marketName,
            users: report.users,
            timestamp: report.timestamp,
            priceUnit: report.priceUnit,
            price: report.price
        }
        res.send(response);
    }else{
        res.send("Report not found")
    }
    
  });