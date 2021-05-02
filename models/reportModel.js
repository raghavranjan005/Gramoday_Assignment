import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
    cmdtyName:{type: String, required:true},
    cmdtyID:{type: String, required:true},
    marketID:{type: String, required:true},
    marketName:{type: String, required:true},
    users:[String],
    timestamp : { type : String, default: Date.now},
    priceUnit:{type:String, defailt:"Kg"},
    price:{type: Number, required:true},

}, {
    timestamps: true
});

const reportModel = mongoose.model("Report", reportSchema);

export default reportModel;