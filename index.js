const express =require('express');
const bodyParser = require("body-parser");

const nodemailer = require("nodemailer");

const app=express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post("/contactForm", (req,res)=>{

nodemailer.createTestAccount((err,account)=>{
const htmlEmail = `<h3> Contact Details</h3>
<ul>
<li> Name: ${req.body.name}</li>
<li> Email : ${req.body.email}</li>
</ul>
<h1> Message </h1>
<p> ${req.body.message}</p>`



let transporter = nodemailer.createTransport({
   
    port: 587,
    host: 'smtp.gmail.com',

    secure: false, // true for 465, false for other ports
    auth: {
        user: '',
        pass: ''
    },
  });

let mailOptions ={
    from: 'test@testaccount.com',
    to: '',
    replyTo: 'test@testaccount.com',
    subject: 'New Message',
    text: req.body.message,
    html: htmlEmail
   
}

transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
        return   console.log(err.response);
     
    }
    console.log("Message sent : %s", info.message)
    console.log("Message URL: %s", nodemailer.getTestMessageUrl(info))
})

})


})
const PORT = process.env.PORT || 3003;

app.listen(PORT, () =>{
    console.log("Server listening on PORT ${PORT}");
})
