import { test, expect } from '@playwright/test';
import {faker} from   '@faker-js/faker';
import  {DateTime} from 'luxon';
 test('Create post request using static body', async ({ request}) => {

       const firstname=faker.person.firstName();
       const lastname=faker.person.lastName();
       const totalprice=faker.number.int({min:100,max:5000});
       const depositpaid=faker.datatype.boolean();

       const checkin=DateTime.now().toFormat('yyyy-MM-dd');
       const checkout=DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');
       const additionalneeds = "super bowls"
    //request body
    const requestBody = {
        firstname: firstname,
        lastname: lastname,
        totalprice: totalprice,
        depositpaid: depositpaid,
        bookingdates: {
            checkin: checkin,
            checkout: checkout,
        },
        additionalneeds:additionalneeds,
    }
    const response=await request.post("https://restful-booker.herokuapp.com/booking",{data:requestBody})
    const responsebody=await response.json();
    console.log(responsebody);
    //status code
    expect(response.ok).toBeTruthy();
    expect(response.status()).toBe(200);

    //validate response body attributes

    expect(responsebody).toHaveProperty("bookingid");
    expect(responsebody).toHaveProperty("booking");
    expect(responsebody).toHaveProperty("booking.additionalneeds");

    const bookin=    responsebody.booking;

    expect(bookin).toMatchObject({
    firstname: requestBody.firstname,
    lastname: requestBody.lastname,
    totalprice: requestBody.totalprice,
    depositpaid: requestBody.depositpaid,
    additionalneeds: requestBody.additionalneeds
  });
   expect(bookin.bookingdates).toMatchObject({
                 checkin: requestBody.bookingdates.checkin,
                 checkout:requestBody.bookingdates.checkout
                
                
                });
   

}
)
