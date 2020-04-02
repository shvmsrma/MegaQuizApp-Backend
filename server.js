const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser =require('body-parser')




const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());



mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true  }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
})


const QuestionRouter = require('./routes/questionrouter')

app.use('/question',QuestionRouter)



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});