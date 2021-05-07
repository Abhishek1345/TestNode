var express = require('express');
var cors = require('cors');


var app = express();
app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5500'
}));
var PORT = 8080;

// Without middleware
app.get('/', function(req, res){
	res.send({ title: 'GeeksforGeeks' });
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
