import {test,expect} from '@playwright/test';
import fs from 'fs';

function readJson(path:string)
{
      return JSON.parse(fs.readFileSync(path,'utf-8'));
}


test('update the data',async ({request})=>{

    const requestbody=readJson('testdata/postrequest_body.json');
    //post request
    const response=await  request.post('https://restful-booker.herokuapp.com/booking',{data:requestbody})

     expect(response.ok()).toBeTruthy();
     expect(response.status()).toBe(200);

     const responsebody=await response.json();
     console.log(responsebody);

     const bookingids=responsebody.bookingid;
     console.log(">>>>>>>bookingid",bookingids)

     //token
      const tokenrequest=readJson('testdata/token.json')
      const  responstoken=await request.post('https://restful-booker.herokuapp.com/auth',{data:tokenrequest})
      const jsontoken=await responstoken.json();
      const token =jsontoken.token;
      expect(responstoken.ok()).toBeTruthy();

     //put request
     const requestbodyput=readJson('testdata/putrequest_body.json');
     
     const responseput=await request.put(`https://restful-booker.herokuapp.com/booking/${bookingids}`,
                                        {
                                          headers:{"Cookie":`token=${token}`},
                                          data:requestbodyput

                                            });


     expect(responseput.ok()).toBeTruthy();
     expect(responseput.status()).toBe(200);

     
    const responseputbody=await responseput.json();
    console.log(responseputbody)
        
    console.log("booking details updated successfully........")

     

    



        

   

})