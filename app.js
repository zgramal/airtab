process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyRduIsZY4latCAb'}).base('appqxMXAOE8J87fjX');
var nodemailer = require('nodemailer');
var listemail = [];

base('Amal').find('email',function(err,record){ //récupérer les emails de la base
    if (err) {console.error(err); return;}
    listemail.push(record.email);});


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({ //destinateur
  service: 'gmail',
  auth: {
    user: '',//email
    pass: ''//mot de passe
  }
});

var mailOptions = { //destinataire
    from: 'amal.zugari@gmail.com', 
    to: listemail,
    subject: 'Sending Email using Node.js',
    html: {path:'C:/Users/amal/Documents/Projet/index.html'}
  }

transporter.sendMail(mailOptions, function(error, info){ //envoi
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});