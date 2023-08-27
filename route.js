const express = require('express');

const app = express();
app.use(express.json());

const controllerData=require('./controller')


app.get('/getbyname',controllerData.getdata);
app.get('/login',controllerData.login);
app.post('/create',controllerData.create);

module.exports=app;