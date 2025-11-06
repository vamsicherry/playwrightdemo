import { test, expect } from '@playwright/test';

test('Create post request using static body', async ({ request}) => {
    //request body
    const requestBody = {
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
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 1000,
    depositpaid: true,
    additionalneeds: 'super bowls'
  });


}
)
