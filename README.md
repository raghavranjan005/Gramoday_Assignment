# Gramoday_Assignment

## Download and Install

```
    npm install nodejs
    npm install express.js
    npm install dotenv
    npm install --save-dev nodemon
```

## Run the app


    npm start


# Testing

For testing you can download and install Postman from

```
https://www.postman.com/downloads/
```

## Instructions for testing
Open Postman and paste the API url: http://localhost:5000/reports for Post Requests and<br/> http://localhost:5000/reports?reportID=608e9ce5b9aac89348e22e0e for GET Request (Here reportID will be different for different reoprts)

## Example Test cases

## Post Request

### Request 1
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

### Response 1
```JSON
{
	"status": "success",
	"reportID": "949832f8-48c7-4cb2-8dcd-98f046a9a2e3"
}
```
### Request 2
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

### Response 1
```JSON

{
	"status": "success",
	"reportID": "949832f8-48c7-4cb2-8dcd-98f046a9a2e3"
}
```

## GET Request

GET /reports?reportID=608e9ce5b9aac89348e22e0e

### Response
```JSON
{
  "_id": "949832f8-48c7-4cb2-8dcd-98f046a9a2e3",
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
 
 You can find demo video at [Demo Video](https://drive.google.com/drive/folders/1z28xBmJ3yVXteSe8-ReGEKDQabhKmUNE?usp=sharing)
 
 # Author
 [Raghav Ranjan](https://raghavranjan005.github.io/)<br/>
 Indian Institute of Technology Jodhpur
 

