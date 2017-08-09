const express = require('express');
const router = express.Router();

const Mailgun = require('mailgun').Mailgun;

const mg = process.env.MAILGUN_KEY2;


/* GET api listing. */
router.get('/', (req, res) => {
    mg.sendText(
        '<example2@example.com>', 
        'micumieu@gmail.com',
        'This is the subject',
        'This is the text',
        '', {},
        function(err) {
            if (err) console.log('Oh noes: ' + err);
            else     console.log('Success');
    });

    res.send('api works');
});

module.exports = router;