const mongoose = require('mongoose');

function connectToDb(URL) {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('The Server has successfully connected to the database');
  }).catch((error) => {
    console.error(error);
  });
}

module.exports = connectToDb;
