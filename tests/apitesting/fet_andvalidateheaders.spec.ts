import { he } from '@faker-js/faker';
import  {test,expect} from '@playwright/test';


test('validate headers from headers and headersarray',async ({request})=>{

     const requestbody=await request.get('https://restful-booker.herokuapp.com/booking/1');

     //headers
     const headervalue=requestbody.headers();
     console.log(headervalue)

     expect(headervalue['content-type']).toEqual('application/json; charset=utf-8');

     expect(headervalue.server).toEqual('Heroku');

     //expect(headervalue["X-Powered-By"]).toEqual("Express");
    // expect(headervalue.length).toBe(10);


     //header array

    const headerarray=await requestbody.headersArray();
    console.log(headerarray)

    expect(headerarray.length).toBe(10);






})