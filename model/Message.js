// create a message schema for each message to be CRUD via mongoDB Atlas
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const messageSchema = new Schema({
    text: String, 
    user: String, 
    added: Date
});

const Message = model('Message', messageSchema);

module.exports = Message;