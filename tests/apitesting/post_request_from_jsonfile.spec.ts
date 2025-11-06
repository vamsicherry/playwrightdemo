 import {test,expect} from '@playwright/test';
import fs from 'fs';

test('post request from json file',async ({request})=>{

        const jsonpath='testdata/postrequest_body.json'
        const requestbody=JSON.parse(fs.readFileSync(jsonpath,'utf8'));


        const response:any=await  request.post('https://restful-booker.herokuapp.com/booking',{data:requestbody});

        //extract response body

        const responsebody= await response.json();

        //validate status code

        expect(response.ok).toBeTruthy();
        expect(response.status()).toBe(200);


        //validate response body attributes

        expect(responsebody).toHaveProperty('bookingid');
        expect(responsebody).toHaveProperty('booking')
        expect(responsebody).toHaveProperty('booking.additionalneeds') 


        //valide booking details
        const booking=responsebody.booking;


        expect(booking).toMatchObject({
        firstname: requestbody.firstname,
        lastname: requestbody.lastname,
        totalprice: requestbody.totalprice,
        depositpaid: requestbody.depositpaid,
        additionalneeds: requestbody.additionalneeds
        })

        //tovalidate nested object
        expect(booking.bookingdates).toMatchObject({
                 checkin: requestbody.bookingdates.checkin,
                 checkout:requestbody.bookingdates.checkout
                
                
                });
    

}) 


