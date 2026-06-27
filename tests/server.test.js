const request = require('supertest');
const app = require('../server');

describe('GET /datalab5', () => {
    it('should return Lab 5 data.', async () => {
        const response = await request(app).get('/datalab5');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Lab 5 data.123');
    });
});
 
