# Test App Server-side
This App is an application to manage account. This app has : 
* RESTful endpoint for todo's CRUD operation
* JSON formatted response

&nbsp;

## List available endpoints
- `POST /login`
- `POST /register`
- `GET /users`
- `DELETE /users/:id`

## RESTful endpoints
### POST /register

> Get the curent weather

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "email": "runner@mail.com",
  "phone_number": "0812233444",
  "name": "Alan Runner",
  "password": "12345678",
}
```
#### Success

_Response (201)_
```json
{
  "_id": "60527cf22ce39000151453ac"
  "name": "Alan Runner",
  "email": "runner@mail.com",
}
```
#### Error

_Response (500 - Internal Server Error)_
```json
{
  "message": "internal server error"
}
```
---
### POST /login

> Get the curent weather

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "email": "runner@mail.com",
  "password": "12345678",
}
```
#### Success

_Response (200)_
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyN2NmMjJjZTM5MDAwMTUxNDUzYWMiLCJuYW1lIjoiQWxhbiBSdW5uZXIiLCJlbWFpbCI6InJ1bm5lckBtYWlsLmNvbSIsInBob25lX251bWJlciI6IjA4MTIyMjMzMzQ0NCIsImlhdCI6MTYxNjAxOTA4Nn0.OOCMLdEKlZn4roXPYBFvTdERNmkesx9_iYjQ8slCH80",
  "payload": {
    "_id": "60527cf22ce39000151453ac",
    "name": "Alan Runner",
    "email": "runner@mail.com",
    "phone_number": "081222333444"
  }
}
```
#### Error

_Response (500 - Internal Server Error)_
```json
{
  "message": "internal server error"
}
```
_Response (401 - Unauthorized)_
```json
{
  "Error": "invalid email or password"
}
```
---
### GET /users/

> Get all users

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```
#### Success

_Response (200)_
```json
[
  {
    "_id": "60527cf22ce39000151453ac",
    "name": "Alan Runner",
    "phone_number": "081222333444",
    "email": "runner@mail.com",
  }
]
```
#### Error

_Response (401 - Error Not Found)_
```json
{
  "Error": "please login first"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "internal server error"
}
```
---
### DELETE /users/:id

> remove data user by id

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Params_
```json
{ "id": "6051d153394207c45ae3519f"}
```
#### Success

_Response (200)_
```json
{
  "messages": "the account was successfully deleted"
}
```
#### Error

_Response (404 - Error Not Found)_
```json
{
  "Error": "data not found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "internal server error"
}
```
---
