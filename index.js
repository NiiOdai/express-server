const express = require('express')
const app = express()

customers=[
 {
    id:1,
    name: "Veaa",
    gender:"Fle",
},
{
    id:2,
    name: "Vera Ama Pomaa",
    gender:"Female",
},
{
    id:3,
    name:"Niiodai",
    gender:"Male",
},
]
app.get('/',function(req,res){ 
    res.json({"message": 'Hello World'})
})
app.get('/customers',function(req,res){ 
    res.json({customers})
})
app.listen(5000,()=>{
    console.log("Up and Running")
})
