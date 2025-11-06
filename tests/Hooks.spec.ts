import {test,expect} from "@playwright/test";


test.beforeEach("before each",async ()=>{

      console.log("this is before each")
})

test.afterEach("after each",async ()=>{

      console.log('this is after each')
})

test.beforeAll("before all",async()=>{
      console.log("before all...")
})

test.afterAll("before all",async()=>{
      console.log("after all...")
})
test("test1",async()=>{

       console.log("test1..........")
})

test("test2",async()=>{

       console.log("test2..........")
})


test("test3",async()=>{

       console.log("test3..........")
})