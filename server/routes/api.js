const express = require('express');
const router = express.Router();

const Mailgun = require('mailgun').Mailgun;

const mg = new Mailgun(process.env.MAILGUN_KEY);


/* GET api listing. */
router.post('/mailgun', (req, res) => {
    console.log(`The name is.... ${req.body.name}`);
    console.log(`The email is.... ${req.body.email}`);
    console.log(`The message is.... ${req.body.message}`);

    mg.sendText(
        `${req.body.name} <${req.body.email}>`, 
        'micumieu@gmail.com',
        '',
        `${req.body.message}`,
        '', {},
        function(err) {
            if (err) console.log('Oh noes: ' + err);
            else     console.log('Success');
    });

    res.send('api works');
});

module.exports = router;