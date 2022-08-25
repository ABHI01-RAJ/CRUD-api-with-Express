/*       Main pages which can create or run Server    */
const express =require('express');
const mongoose_module_variable=require('mongoose');
const bodyParser=require('body-parser');
const homeRoutes=require('./routers/home');


const app=express();
const port=process.env.port || 3000;


// Databse connection
mongoose_module_variable.connect("mongodb://localhost:27017/studentdetails",{useNewUrlParser:true})
const db=mongoose_module_variable.connection;
db.on('eror',()=>
            {
                console.log("error is");
            }    
     )

db.once('open',()=>
            {
                console.log("connected");
            }
       )




// body parser 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/* way to view the .ejs file through other .js file */
app.set('view engine','ejs');

/* way to get effect of css file on .ejs file */
app.use(express.static('public'))

/*  way for access the other .js file  */
app.use('/',homeRoutes)



app.listen(port)