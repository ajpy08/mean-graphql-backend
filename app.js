const bodyParse = require ('body-parser');
const express = require ('express');
const mongoose = require ('mongoose');
const cors = require('cors');

const {graphqlHTTP} = require('express-graphql');

const config = require('./config/config.json');

const app = express();

app.use(bodyParse.json());

app.use(cors());

// graphql
// app.use(
//   '/graphql',
//   graphqlHTTP,
//   schema: // ,
//   rootValue: //
//   graphiql: true,
// )

// Llamo a enviroments segun el ambiente que esté
const enviroment = require('./config/config').config();

// Conecto a la BD
const DB = require('./db');

DB.connectDB(enviroment.MONGO_URL);

// Server
app.listen(enviroment.PORT, () => {
  console.log(`Server running on port ${enviroment.PORT}`);
});