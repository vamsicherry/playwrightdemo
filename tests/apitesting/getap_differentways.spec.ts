import {test,expect,request} from '@playwright/test'
//common for all test
let reqcontext2:any;
test.beforeAll('before all',async ()=>{
        reqcontext2=await request.newContext({
             baseURL:'https://restful-booker.herokuapp.com',
             extraHTTPHeaders:{
                 Accept:"application/json"
             }
           })
})
test('Api testing get request demo 1',async ({request})=>{

    const resp1=await request.get('https://restful-booker.herokuapp.com/booking',{
           headers:{
              Accept:"application/json"
           }
    })
    console.log(await resp1.json())
})



test('Api testing get request demo 2',async ()=>{

    //same url need to be reused in same test
    const reqcontext=await request.newContext({
            baseURL:'https://restful-booker.herokuapp.com',
            extraHTTPHeaders:{
                headers:"appliaction/json"
            }
         })
   
     const resp1=await reqcontext.get('/booking/1');
     console.log(await resp1.json());
})


test('Api testing get request demo 3',async ()=>{

    const resp1=await reqcontext2.get('/booking/1',{
        params:{
             firsname:'Eric',
             lastname:'Ericsson'
        }
    })
    console.log(await resp1.json())
})



test('Api  verification with ui',async ({page})=>{

    const resp1=await reqcontext2.get('https://api.demoblaze.com/entries')
    const response1=await resp1.json();
    console.log('api response title:',response1.Items[1].title);

    await  page.goto('https://www.demoblaze.com/');

    const text= page.getByRole('link',{name:'Nokia lumia 1520'});
    await expect(text).toHaveText(response1.Items[1].title);
    
})