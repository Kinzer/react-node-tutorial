//============================
// Import our dependencies, and
// our controllers
//============================
const express = require('express');

const _ourController = require('./controllers/_our-controller');


module.exports = function(app) {

  //============================
  // Define the api routes in the
  // router
  //============================

  const apiRoutes = express.Router();

  //define first router
  apiRoutes.get('/helloworld', _ourController.helloworld);


  app.use('/api', apiRoutes);
}
