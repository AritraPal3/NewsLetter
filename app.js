const express=require('express')
const bodyPars=require('body-parser')
const https=require('https');
require('dotenv').config() //reads the data form the .env file

const app=express();
app.use(bodyPars.urlencoded({extended:true}));
app.use(express.static("public"));

const url=`https://us21.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`;

console.log(process.env.API_KEY)
console.log(process.env.LIST_ID)

app.listen(process.env.PORT||3000,()=>{
    console.log("Server started at port 3000");
})

app.post("/",(req,res)=>
{
    const firstN=req.body.first
    const lastN=req.body.last
    const email=req.body.eml
    const data={
        members:[
            {
                email_address:email,
                 status:"subscribed",
                 merge_fields:{
                    FNAME:firstN,
                    LNAME:lastN
                 }
            }
        ]
    }
    jsdata=JSON.stringify(data);

    //now make the request

    const options={
        method:"POST",
        auth:process.env.API_KEY
    }

    const rq=https.request(url,options,(response)=>
    {
        response.on("data",function(data)
        {
            //data that is recieved from server
            console.log(data.toString())   
        })
    })
    rq.write(jsdata);
    rq.end();
    res.sendStatus(200)
})


