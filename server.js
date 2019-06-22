const express = require ('express');
const mongoose = require ('mongoose');
const users = require ('./routes/api/users');
const profile = require ('./routes/api/profile');
const posts = require ('./routes/api/profile');
const app = express ();

//Db config
const db = require ('./config/keys').mongoURI
mongoose
  .connect(db)
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);



const port = 8800;
app.listen(port, () => console.log(`Server is running on ${port}`));