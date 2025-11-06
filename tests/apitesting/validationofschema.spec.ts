import { test, expect } from '@playwright/test';
//https://jsonplaceholder.typicode.com/posts/1

import AJV from 'ajv';


test('Validating schemas', async ({ request }) => {

    const requestbody = await request.get('https://mocktarget.apigee.net/json');

    const response = await requestbody.json();

    console.log(response)


    const schema = {
        "type": "object",
        "properties": {
            "firstName": { "type": "string" },
            "lastName": { "type": "string" },
            "city": { "type": "string" },
            "state": { "type": "string" }
        },
        "required": ["firstName", "lastName", "city", "state"]
    }

    const ajv = new AJV();
    const validation = ajv.compile(schema);
    const valid = validation(response);

    expect(valid).toBeTruthy();

    if (!valid) {
        console.log("schema validation error ", validation.errors)
    }


})


test.only('Validating schemas 2', async ({ request }) => {

    const requestbody = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    const response = await requestbody.json();

    console.log(response)


    const schema = {
        "type": "object",
        "properties": {
            "userId": {
                "type": "number"
            },
            "id": {
                "type": "number"
            },
            "title": {
                "type": "string"
            },
            "body": {
                "type": "string"
            }
        },
        "required": [
            "userId",
            "id",
            "title",
            "body"
        ]
    }

    const ajv = new AJV();
    const validation = ajv.compile(schema);
    const valid = validation(response);

    expect(valid).toBeTruthy();

    if (!valid) {
        console.log("schema validation error ", validation.errors)
    }


})