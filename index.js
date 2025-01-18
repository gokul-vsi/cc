const express = require('express');
const app = express();
const cors= require('cors');
const mongoose = require('mongoose');
const routesfile = require('./routes/routes')
mongoose.connect("mongodb+srv://gokulnithya23:gokulnath292317@cluster0.8sjjl.mongodb.net/wbdata",{}).then(()=>{
    console.log("db connected");
    
})

app.use(express.json());
app.use(cors());
app.use('/gokul',routesfile)
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('duuu')
})

app.listen(10000)