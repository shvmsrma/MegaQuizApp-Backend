const router = require('express').Router();
let Question = require('../models/question.model');

router.route('/').get((req, res) => {
  Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const ques = req.body.ques;
  const ques_type = req.body.ques_type;
  const ans = req.body.ans;
  const options = req.body.options;

  const newQuestion = new Question({
    ques,
    ques_type,
    ans,
    options,
  });

  newQuestion.save()
  .then(() => res.json('Question added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;