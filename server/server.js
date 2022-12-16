const express = require('express');
require('dotenv').config();
const dotenv = require('dotenv');
const path = require('path')
dotenv.config({path: './.env'})
const cors = require('cors')
const app = express();
const mongooseModel = require('./database')
const PORT = process.env.PORT || 4000
app.listen(PORT);
app.use(cors());
app.use(express.json());
console.log(`Server is running at Port ${PORT}`);


//Post request for step 1
app.post('/poststep1',async(req,res)=>{
    const {firstname,lastname,age,mobile} = req.body;
    if(!firstname || !lastname || !age || !mobile){
        res.status(401).json({error:"Please fill all the inputs."})
    }else{
    try{
    const savedata = new mongooseModel({firstname,lastname,age,mobile})
    const saved = await savedata.save();
    console.log(saved);
    res.status(201).json({saved})
    }catch(e){
        res.status(401).json(e);
    }
}
})


//Post request for step 2
app.post('/poststep2',async(req,res)=>{
    const {businessname,gst,address} = req.body;
    if(!businessname || !gst || !address){
        res.status(401).json({error:"Please fill all the inputs."})
    }else{
    try{
    const savedata = new mongooseModel({businessname,gst,address})
    const saved = await savedata.save();
    console.log(saved);
    res.status(201).json(saved)
    }catch(e){
        res.status(401).json(e);
    }
}
})


//Post request for step 3
app.post('/poststep3',async(req,res)=>{
    const{loanamount,interestrate,loantenure} = req.body;
    if(!loanamount || !interestrate || !loantenure){
        res.status(401).json({error:"Please fill all the inputs."})
    }else{
    try{
    const savedata =  mongooseModel({loanamount,interestrate,loantenure})
    const saved = await savedata.save();
    console.log(saved);
    res.status(201).json({saved})
    }catch(e){
        res.status(401).json(e);
    }
}
})


app.delete('/ddd',async(req,res)=>{
    const dele = await mongooseModel.deleteMany({});
    res.status(201).json(dele);
 })


 ////production stage
if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"./client/build")));
   app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./client','build','index.html'));
   })
}


//lets see    