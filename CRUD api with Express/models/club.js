const mongoose=require('mongoose');
const schema=mongoose.Schema;
let clubschema= new schema(
    
    
    {
        
        
        name:{type:String},
        email:{type:String}


    }                    
                          )


module.exports=mongoose.model('student',clubschema)