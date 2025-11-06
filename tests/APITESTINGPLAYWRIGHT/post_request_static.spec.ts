import {test,expect} from '@playwright/test';

test('post_request_using_static_data',async ({request})=>{


    const requestbody={
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 1000,
        depositpaid: true,
        bookingdates: {
            checkin: "2025-07-01",
            checkout: "2025-07-05",
        },
        additionalneeds: "super bowls",
    }


    const response=await   request.post('https://restful-booker.herokuapp.com/booking',{data:requestbody});

    const responsebody=await response.json();
    console.log(responsebody);

    //verify the status code

    expect(response.ok).toBeTruthy();
    expect(response.status()).toBe(200);

    //verify response body
    expect(responsebody).toHaveProperty('bookingid');
    expect(responsebody).toHaveProperty('booking');
    expect(responsebody).toHaveProperty('booking.additionalneeds');


    //validae booking deatils
    const booking=responsebody.booking;
    expect(booking).toMatchObject({
        "firstname": "vamsi",
        "lastname": "gol",
        "totalprice": 1000,
        "depositpaid": true,
        "additionalneeds": "super bowls"
    })

    //response body nested object'

    expect(booking.bookingdates).toMatchObject( {
            "checkin": "2025-07-01",
            "checkout": "2025-07-05"
        })
    

})