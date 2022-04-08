const express=require('express');

const cors=require('cors');
const jwt=require('jsonwebtoken');
var bodyparser=require('body-parser');
var app=new express();
app.use(cors());
app.use(bodyparser.json());
umail='admin@gmail.com'
password='1234'
app.post('/login',(req,res)=>{
    let userData=req.body

        if (!umail){
            res.status(401).send('Invalid email')
        } else
        if (password!==userData.password){
            res.status(401).send('Invalid Password')
        } else{
            let payload={subject:umail+password}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token})

        }

})