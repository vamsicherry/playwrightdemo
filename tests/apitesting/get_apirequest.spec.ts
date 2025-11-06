import {test,expect} from '@playwright/test'
import { execPath } from 'process';



test('get booking details by path parameters',async ({request})=>{
      
    
const bookingid=1;

    const respons=await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`)
    const responsebody= await respons.json();

    console.log(responsebody)

    //assertion

    expect(respons.ok).toBeTruthy();
    expect(respons.status()).toBe(200);

})


test('get booking details by name query parameters',async ({request})=>{
      
    
const firstName='Mary';
const lastName ='Jackson';

    const respons=await request.get("https://restful-booker.herokuapp.com/booking",{params:{
           firstName,
           lastName

    }})
    const responsebody= await respons.json();

    console.log(responsebody)

    //assertion

    expect(respons.ok).toBeTruthy();
    expect(respons.status()).toBe(200);

    //attribute assertion

    expect(responsebody.length).toBeGreaterThan(0);

    for(const val of responsebody)
    {
       

        expect(val.bookingid).toBeGreaterThan(0);
        expect(val).toHaveProperty('bookingid');
        expect(typeof val.bookingid).toBe('number');
    }

})