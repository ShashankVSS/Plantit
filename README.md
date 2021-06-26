README

#Signup
POST localhost:3000/api/auth/signup 

In the request body send a json object as define below:
{
    "username":"XXXXX",
    "password":"XXXXX",
    "email":"XXXXXX"
}

#Signin -> Returns a JSON web token upon succesful sign in.
POST localhost:3000/api/auth/signin

In the request body send a json object as define below:
{   
    "password":"XXXXX",
    "email":"XXXXXX"
}

#Routes that require a valid json web token
GET localhost:3000/api/test/user

Add this header to the request 
x-access-token: JSONWEBTOKEN obtained from a succssful sign in attempt.




