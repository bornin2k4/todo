const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todos = require('./routes/todos');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/todos', todos);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://archmohammedthalha:mMT2004@to-do.5q49ykv.mongodb.net/?retryWrites=true&w=majority&appName=to-do', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
