const express= require('express');
const app=express();

const reqFilter=(req,res,next)=>{

    if(!req.query.age){
        res.send("please provide age");

    }

    else if(req.query.age<18){
        res.send("you are under age");
    }
    else{
        next();
    }
}

//app.use(reqFilter); //application level routoiing

app.get('/', (req,res)=>{
    res.send("Home page");
});

app.get('/profile',reqFilter,(req,res)=>{

    res.send("Profile Fage");

})

app.listen(2000);