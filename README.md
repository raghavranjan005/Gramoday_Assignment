# Gramoday_Assignment
## Git Clone
```
git clone https://github.com/raghavranjan005/Gramoday_Assignment.git
```

## Install

```
npm install
```

## Run the app


    npm start


# Testing

## Manual Testing
For testing you can download and install Postman from

```
https://www.postman.com/downloads/
```

Open Postman and paste the API url: http://localhost:5000/reports for Post Requests and<br/> http://localhost:5000/reports?reportID=608e9ce5b9aac89348e22e0e for GET Request (Here reportID will be different for different reoprts)

PS: I have cleared database so you need to first POST then you can use GET

## API testing using jest

Feed the API requests in test.js and run
```
npm test
```
PS: Close the server if it is running in background before running this command. And comment the get request in test.js if you don't have any reportID.
## Example Test cases

### Post Request

#### Request 1
```JSON
POST /reports
{
  "reportDetails": {
    "userID": "user-1",
    "marketID": "market-1",
    "marketName": "Vashi Navi Mumbai",
    "cmdtyID": "cmdty-1",
    "marketType": "Mandi",
    "cmdtyName": "Potato",
    "priceUnit": "Pack",
    "convFctr": 50,
    "price": 700
  }
}
```

#### Response 1
```JSON
{
	"status": "success",
	"reportID": "608e9ce5b9aac89348e22e0e"
}
```

<br/>

#### Request 2
```JSON
POST /reports
{ 
    "reportDetails": {
      "userID": "user-2",
      "marketID": "market-1",
      "marketName": "Vashi Navi Mumbai",
      "cmdtyID": "cmdty-1",
      "cmdtyName": "Potato",
      "priceUnit": "Quintal",
      "convFctr": 100,
      "price": 1600
    }
}
```

#### Response 2
```JSON

{
	"status": "success",
	"reportID": "608e9ce5b9aac89348e22e0e"
}
```

## GET Request

GET /reports?reportID=608e9ce5b9aac89348e22e0e

### Response
```JSON
{
  "_id": "608e9ce5b9aac89348e22e0e",
  "cmdtyName": "Potato",
  "cmdtyID": "VE-42",
  "marketID": "market-1",
  "marketName": "Vashi Navi Mumbai",
  "users": ["user-1", "user-2"],
  "timestamp": 1616198400000,
  "priceUnit": "Kg",
  "price": 15
}
```

# Demo Video 
 
  ### API testing using jest
 
 You can find demo video at [Demo Video](https://drive.google.com/file/d/1jdvSEuq1fDhwMeeb3I6yCGJRBqrNCrkU/view?usp=sharing)
 
 ### Manual Testing
 You can find demo video at [Demo Video](https://drive.google.com/file/d/1bEGoScRIR_7ydbOJS_-AjmVHXSl09us9/view?usp=sharing)
 

 
 # Author
 [Raghav Ranjan](https://raghavranjan005.github.io/)<br/>
 Indian Institute of Technology Jodhpur
 

