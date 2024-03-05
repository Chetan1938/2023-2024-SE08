const nodemailer = require("nodemailer"); //203.7k (gzipped: 54.7k)

require("dotenv").config(); //5.6k (gzipped: 2.6k)

const path = require("path");
// create reusable transporter object using the default SMTP transport

6

7

const transporter = nodemailer.createTransport ({

service: 'gmail',

host: "smtp.gmail.com",

port: 587,
secure: false, // true for 465, false for other ports

auth: {

user: process.env.USER, // Sender gmail address
pass: process.env.APP_PASSWORD, //App password from Gmail account
},
});
const mailOptions = {

from: {
name: 'Web Wizard',
address: process.env.USER

},
 // sender address
to: ["sanchetkhemani24@gmail.com"], // list of receivers
subject: "Send email using nodemailer and gmail ✔", // Subject line
text: "Hello world?", // plain text body
html: "<b>Hello world?</b>", // html body
attachments: [
    {


filename: 'test.pdf',
path: path.join(__dirname, 'test.pdf'),
contentType: 'application/pdf'
    },
    
    {
filename: 'sample.jpg',
path: path.join(__dirname, 'sample.jpg'),
contentType: 'image/jpg'
    },
]
}

constsendMail = async (transporter, mailOptions) => {
    try
    {
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent!');
    }

    catch (error) {
    
    console.error(error);
    }
    
    }
    

    
    sendMail(transporter, mailOptions);