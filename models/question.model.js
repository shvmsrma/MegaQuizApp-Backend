const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  ques: { type: String, required: true },
  ques_type: { type: String, required: true },
  ans: { type: String, required: true },
  options: { type: Array,required:false},
}, {
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;