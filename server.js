require('colors')
const express = require('express');
const helmet = require('helmet');
const ProjectRouter = require('./project-router/project-router')

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/projects', ProjectRouter)



module.exports = server;