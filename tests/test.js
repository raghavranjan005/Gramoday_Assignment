import app from '../App.js'
import request from 'supertest'

describe('Post Endpoints', () => {
    it('should post', async () => {
      const res = await request(app)
        .post('/reports')
        .send({
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
        });
      expect(res.statusCode).toEqual(201);
      console.log(res.body);
    });

    it('should post', async () => {
      const res = await request(app)
        .post('/reports')
        .send({ 
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
      });
      expect(res.statusCode).toEqual(201);
      console.log(res.body);
    });

    it('should get', async () => {
      const res = await request(app)
        .get('/reports?reportID=60910ccf2f01636db0fae51d')
      expect(res.statusCode).toEqual(200);
      console.log(res.body);
    });

    
});