const mongoose = require('mongoose');


const mongodbfield = new mongoose.Schema({
    myname:{
        type:String,
        required:true,
    },
    myage:{
        type:String,
        required:true,
    }
})

const fileexport = mongoose.model("dbdatas",mongodbfield);

module.exports = fileexport