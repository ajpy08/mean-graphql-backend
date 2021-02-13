const mongoose = require('mongoose');

exports.connectDB = (mongoURL) => {
  mongoose.connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('Base de datos Mongoose: \x1b[32m%s\x1b[0m', 'ONLINE');
  });
  mongoose.connection.on('reconnected', () => {
    console.log('Connection Reestablished');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Connection Disconnected');
  });

  mongoose.connection.on('close', () => {
    console.log('Connection Closed');
  });

  mongoose.connection.on('error', (error) => {
    console.log(`ERROR: ${error}`);
  });
};
