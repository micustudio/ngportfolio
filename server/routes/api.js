const express = require('express');
const router = express.Router();

const Mailgun = require('mailgun').Mailgun;

const mg = new Mailgun('key-47ac9e7381ff4dcd4f6d011c9ee39397');


/* GET api listing. */
router.get('/', (req, res) => {
    mg.sendText(
        'Cool user <example@example.com>', 
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