const express =require('express');
const app =express();
const port= process.env.PORT || 3500;
app.get('/',(req,res)=>{
    res.send("hiiiiii")
})
const bd=[
    {id:1,bdy:"1999",bdm:"11",bdd:"30",name:"kaviya"},
    {id:2,bdy:"1999",bdm:"05",bdd:"08",name:"rahal"},
    {id:3,bdy:"1999",bdm:"05",bdd:"07",name:"harindra"},
    {id:4,bdy:"1999",bdm:"08",bdd:"09",name:"gane"}
];
const reminderBdList=[];
const currentDate = new Date();


bd.find(c=>{
    const getDate1 = (parseInt(c.bdd)- currentDate.getDate()) < 2 ;
    const getDate2 = (parseInt(c.bdd) -currentDate.getDate() ) >= 0;

    const getMonth = (currentDate.getMonth() + 1) === parseInt(c.bdm);
    if (getMonth && getDate1 && getDate2) {
        reminderBdList.push( { 'id':c.id, 'name':`${c.name}`});
        console.log(c.id);
    }
});

const date ="2021-05-21";
const de =/-../g
console.log(date.replace(de,"h"))
console.log(parseInt(date.match(de)))
console.log(parseInt("05-21"));

console.log(reminderBdList);
// console.log(bd);
console.log(parseInt(date[5] +date[6]));
console.log(parseInt(date[8] +date[9]));

app.listen(port,()=>{
    console.log(`server is running up, it port value is ${port}`);
});

