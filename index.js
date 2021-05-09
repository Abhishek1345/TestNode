var express = require('express');
var cors = require('cors');
//noexport const NODE_TLS_REJECT_UNAUTHORIZED='0';
const { Pool } = require('pg');
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});
var nodemailer = require('nodemailer');
var transporter= nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'jawanpuriaabhishek@gmail.com',
		pass:'tuktuk27'
	}
});
var app = express();
app.use(cors({
   // credentials:true,
    origin:'http://127.0.0.1:5500'
}));
var PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var naam,msg;
app.post('/', function(req,res,next){

	
	res.send(JSON.stringify({name:"abhishek",
              age:17,
			city:"jamshedpur" }));
		naam=req.body.name;
		msg=req.body.message;	
		next();	
});
var mailOptions;
const setOptions=(req,res,next)=>{mailOptions={
	from:'jawanpuriaabhishek@gmail.com',
	to:'jawanpuriaabhishek@gmail.com',
	subject:'test email from '+naam,
	text:msg
}
next();
}
const mail=(req,res)=>transporter.sendMail(mailOptions,(error,info)=>{
	if(error)
      console.log(error);
	  else
	  console.log('email sent:'+info.response);
});
app.use(setOptions);
app.use(mail);
app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
