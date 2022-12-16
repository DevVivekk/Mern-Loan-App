const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect(process.env.MONOGO_URI,{  useNewUrlParser: true,
useUnifiedTopology: true})
.then((done)=>{
    console.log('connected..')
})
.catch((e)=>{
    console.log(e);
})


const mongooseSchema = new mongoose.Schema({
    firstname:{
        type:String,
   
    },
    lastname:{
        type:String,
       
    },
    age:{
        type:Number,
   
    },
    mobile:{
        type:Number,
       
    },

 
            businessname:{
                type:String,
           
            },
            gst:{
                type:String,
        
            },
            address:{
                type:String,
              
            }
            ,
            loanamount:{
                type:Number,
              
            },
            interestrate:{
                type:String,
         
            },
            loantenure:{
                type:Number,
              
            }

                  
  
})


const mongooseModel = new mongoose.model('loandata',mongooseSchema)

module.exports = mongooseModel;