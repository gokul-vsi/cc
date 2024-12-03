const express = require('express');
const routes = express.Router();
const modelfile = require('../model/model')
routes.post('/',async(req,res)=>{
    const storing = new modelfile(req.body)
    await storing.save();
    res.status(201).json(storing)
})
routes.get('/get',async(req,res)=>{
    const getting = await modelfile.find()
    res.json(getting)
})

routes.delete('/get/:id',async(req,res)=>{
   await modelfile.findByIdAndDelete(req.params.id)
    res.json({message:'deleted'})
})

routes.put('/get/:id',async(req,res)=>{
    const updating = await modelfile.findByIdAndUpdate(req.params.id,req.body,{new:true})
     res.json(updating)
 })


module.exports = routes
