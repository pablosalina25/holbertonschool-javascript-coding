// This script connects / to AppController
// and connects /students and /students/:major to StudentsController

const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();
// eslint-disable-next-line jest/require-hook
router.get('/', AppController.getHomepage);
// eslint-disable-next-line jest/require-hook
router.get('/students', StudentsController.getAllStudents);
// eslint-disable-next-line jest/require-hook
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
