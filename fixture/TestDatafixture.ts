import {test as BaseTest} from '@playwright/test';


type MyFixture={
      logindata:any;
      adddata:any;
}


export const test=BaseTest.extend<MyFixture>({


         logindata:{
             username:'Admin',
             password:'admin123'
         },

         adddata:{
            firstnam:'vamsi',
            lastnam:'krishna',
            email:'789'
         }

})

export {expect} from '@playwright/test'