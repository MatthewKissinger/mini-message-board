var express = require('express');
var router = express.Router();

// submit to odin project after learning how to deploy

const messages = [
  {
    text: "Hi there!",
    user: "Amando", 
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* New Message page */
router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message Page' });
})

router.post('/new', (req, res, next) => {
  console.log(req.body.messageUser);
  console.log(req.body.messageText);
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  })
  res.redirect('/');
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
