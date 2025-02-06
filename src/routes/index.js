const express = require('express');
const pessoas = require('./pessoasRoute');

module.export = app => {
  app.use(express.json(),pessoas,);
};