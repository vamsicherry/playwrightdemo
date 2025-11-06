import { test, expect } from '@playwright/test'
import { DateTime } from 'luxon';
import { de, faker } from '@faker-js/faker';
import { findSourceMap } from 'module';


test('create post request using random data', async ({ request }) => {

    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const totalprice = faker.number.int({ min: 100, max: 4000 })
    const depositpaid = faker.datatype.boolean();
    const checkin = DateTime.now().toFormat('yyyy-MM-dd');
    const checkout = DateTime.now().plus({ day: 5 }).toFormat('yyyy-MM-dd');
    const additionalneeds = "super bowls"
    const requestbody = {
        firstname: firstname,
        lastname: lastname,
        totalprice: totalprice,
        depositpaid: depositpaid,
        bookingdates: {
            checkin: checkin,
            checkout: checkout,
        },
        additionalneeds: additionalneeds
    }

       const response=await request.post("https://restful-booker.herokuapp.com/booking",{data:requestbody})

       const responsebody=await response.json();
       console.log(responsebody)
        //vvalidae response code
      
        expect(response.ok).toBeTruthy();
        expect(response.status()).toBe(200);


        const booking= responsebody.booking;

        expect(booking).toMatchObject({
        firstname: requestbody.firstname,
        lastname:  requestbody.lastname,
        totalprice:  requestbody.totalprice,
        depositpaid:  requestbody.depositpaid,
        additionalneeds: requestbody.additionalneeds
    })

       expect(booking.bookingdates).toMatchObject({
             checkin:  requestbody.bookingdates.checkin,
            checkout:  requestbody.bookingdates.checkout
       })

})