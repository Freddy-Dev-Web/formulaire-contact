var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mandherman@gmail.com'
        pass: '123456789'
    }
})

var mailOptions = {
    from: 'mandherman@gmail.com',
    to: 'freddydevweb1@gmail.com',
    subject: "Test d'envoie formulaire de contact",
    html: "<h1>welcome</h1><p>c'est un Test.</p>"
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent: ' + info.response)
    }
});