import {test as BaseTest} from '@playwright/test'


type  MyFixture={
     fixture1:any;
}

type  MyWorkerfixture={
      fixture2:any;
}

export const test=BaseTest.extend<MyFixture,MyWorkerfixture>({


    fixture1:async ({}, use)=>{
          const fixture1="iam a fixture"
          console.log('before part of fixture')
          await use(fixture1);
          console.log('after part of fixture')

    },

    fixture2:[async ({}, use)=>{
          const fixture2="iam a worker fixture"
          console.log('before part of worker fixture')
          await use(fixture2);
          console.log('after part of worker fixture')

    },{scope:'worker'}]


    
  

       

})