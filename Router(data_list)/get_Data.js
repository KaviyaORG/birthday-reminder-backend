const express =require('express');
const router =express.Router();

router.get('/',(req,res)=>{

    const db =[
        {id:"1",name:"Anonymouse",date:"1999/11/30"},
        {id:"2",name:"Kavishka",date:"1999/08/10"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
        {id:"3",name:"harindra",date:"1999/05/12"},
    ]

    res.send(db)
});

module.exports =router