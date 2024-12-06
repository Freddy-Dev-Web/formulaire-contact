var express = require("express");
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");

var app = express();
var server = http.Server(app);
var port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "page/index.html")));

// Routing
app.get("/", function(req, response){
    response.sendFile(path.join(__dirname, "page/index.html"))
})

app("/send_email", function(req, response){
var name = req.body.name;
var prenom = req.body.prenom;
var email = req.body.email;
var subject = req.body.subject;
var message = req.body.subject;

    var transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'mandherman@gmail.com',
            pass: 'Mandfreddy15'
        }
    });

    var mailOptions = {
        name: name,
        prenom: prenom,
        email: email,
        subject: subject,
        message: message
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error)
        }else{
            console.log('Email send: ' + info.response)
        }
        response.redirect("/")
    })

})

//initialize Web Server
server.listen(port, function(){
    console.log("Starting Server on port: " + port)
})
