var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const Message = require('../model/Message'); 

// Set up mongoose connection
mongoose.connect("mongodb+srv://admin:finnpoebb57255@cluster0.duaztng.mongodb.net/one?retryWrites=true&w=majority");

// const message = new Message({
//   text: "Hello!",
//   user: "Finn", 
//   added: new Date()
// });

// add message to database
// async function addMsg() {
//   await message.save();
// }

// addMsg();

// find all messages in the Messages collection
async function getAllMsgs() {
  const allMsgs = await Message.find();
  return allMsgs;
}

/* New Message page */
router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message Page' });
})

router.post('/new', (req, res, next) => {
  console.log(req.body.messageUser);
  console.log(req.body.messageText);
  const message = new Message({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  });
  message.save();
  res.redirect('/');
})

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const messages = await Message.find();
    res.render('index', {title: 'Mini Messageboard', messages: messages})
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
