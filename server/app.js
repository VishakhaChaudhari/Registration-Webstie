const dotenv = require("dotenv");
const express = require('express');
const cors = require('cors');
const app =express();

app.use(cors());
dotenv.config({path:'./config.env'})
const PORT = process.env.PORT;

require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

const User = require('./model/userSchema');




app.listen(PORT,()=>{
    console.log(`server is runnig on port 3000`);
})