import {test,expect} from '@playwright/test'
import fs, { read } from 'fs';


function readJson(path:string)
{
     return JSON.parse(fs.readFileSync(path,'utf-8'));
}
test("partical update booking",async ({request})=>{

        //post request 
    const requestbody=readJson('testdata/postrequest_body.json');
    const response=await request.post('https://restful-booker.herokuapp.com/booking',{data:requestbody});

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responsebody=await response.json();
    console.log(">>>>>responsebody>>>>>>",responsebody)

    const bookingid=responsebody.bookingid;
    console.log("bookingid",bookingid)

    console.log("before patch update")
    //get request
     const getrequestbody=await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`)

     const getresponse=await getrequestbody.json();

     console.log(">>>>>>getresponsebody",getresponse)


     //partiall update  -create token

     const  tokenrequestbody= readJson('testdata/token.json');

     const tokenresponse=await request.post('https://restful-booker.herokuapp.com/auth',{data:tokenrequestbody})

     const tokenres=await tokenresponse.json();
     const token=tokenres.token;
     console.log("token is",token);

     //put data
     const requestbodyput=readJson('testdata/putrequest_body.json');
          
          const responseput=await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`,
                                             {
                                               headers:{"Cookie":`token=${token}`},
                                               data:requestbodyput
     
                                                 });
     
     
          expect(responseput.ok()).toBeTruthy();
          expect(responseput.status()).toBe(200);
     
          
         const responseputbody=await responseput.json();
         console.log(responseputbody)
             
        // console.log("booking details updated successfully........")


     //patch update
     const  updaterequestbody= readJson('testdata/patchrequest_body.json')
     
     const updateresponse=await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingid}`,

        {
              headers:{"Cookie":`token=${token}`},
              data:updaterequestbody
        }
    );

          expect(updateresponse.ok()).toBeTruthy();
          expect(updateresponse.status()).toBe(200);

     const  updateresponsebody=await  updateresponse.json();

     console.log(">>>>>patch update>>>>",updateresponsebody)


     //delete

    // const deleterequestbody=readJson('testdata/token.json');

    const deleteresponse=  await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingid}`,
        {
            headers:{"Cookie":`token=${token}`},

        }
    )

     expect(deleteresponse.ok()).toBeTruthy();
     expect(deleteresponse.status()).toBe(201);

    const  deleteresponsebody=await deleteresponse.statusText();
    expect(deleteresponsebody).toBe('Created')

    console.log(">>>>>deletedbooking:",deleteresponsebody)

    console.log("Booking deleted successfully.");




    



})