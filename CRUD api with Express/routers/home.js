/* way to get index.ejs file */
const express=require('express');
const Router=express.Router();
const club=require('../models/club')

/* way to rendering .ejs file */

Router.get('/',
                (err,res)=>
                     {
                         res.render('index')
                     }
           )

/* create or insert data */

Router.post('/add',
(req,res)=>
          {
             const name=req.body.name;
             const email=req.body.email;

             const x=new club
             (
            {
             name,
             email 
            }
             )
             x.save(err=>
                     {
                        if(err){console.log('err is')}
                        else{res.redirect('/')}
                     }  
                   )

         }
              
          )
/* find data */

Router.get('/show',
(req,res)=>
{
    club.find((err,docs)=>
    {
       if(err)throw err;  
       res.render('show',
       {
       students:docs})
     }
     
            )

}
)
/* update data */

Router.get('/edit/:id',
(req,res)=>
 {
    club.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,docs)=>
    {
       if(err)throw err;  
       res.render('edit',
       {
       studentdata:docs
       }         )
     }
     
            )

 }
)
Router.post('/edit/:id',(req,res)=>
{
    club.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>
    {
        if(err)
        {
            console.log('error');
        }
        else
        {
            res.redirect('/show')
        }
    })
})


/* Delete data  */

Router.get('/delete/:id',(req,res)=>{
    club.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
         if(err)
         {
             console.log("Err is")
         }
     else{
             console.log("Delted")
             res.redirect('/show')
         }
    })
})



module.exports=Router;