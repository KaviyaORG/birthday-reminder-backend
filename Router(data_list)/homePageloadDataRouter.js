const express =require('express');
const router =express.Router();
const Controllers = require('../Controllers(data_list)/controllers')

router.get('/',Controllers.verify,Controllers.getAllDataHome);
// router.get('/',Controllers.getAllDataHome);

module.exports =router


// const bd=[
//     {id:1,bdy:"1999",bdm:"11",bdd:"30",name:"kaviya"},
//     {id:2,bdy:"1999",bdm:"05",bdd:"08",name:"rahal"},
//     {id:3,bdy:"1999",bdm:"05",bdd:"07",name:"harindra"},
//     {id:4,bdy:"1999",bdm:"08",bdd:"09",name:"gane"}
// ];
// const reminderBdList=[];
// const currentDate = new Date();
//
//
// bd.find(c=>{
//     const getDate1 = (parseInt(c.bdd)- currentDate.getDate()) < 2 ;
//     const getDate2 = (parseInt(c.bdd) -currentDate.getDate() ) >= 0;
//
//     const getMonth = (currentDate.getMonth() + 1) === parseInt(c.bdm);
//     if (getMonth && getDate1 && getDate2) {
//         reminderBdList.push( { 'id':c.id, 'name':`${c.name}`});
//         console.log(c.id);
//     }
// });