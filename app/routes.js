const express = require('express');
const PersonController = require('./controllers/PersonController');
const SelfAppraisalController = require('./controllers/selfAppraisalController');

const router = express.Router();

// Persons Routes
router.get('/persons/:id(\\d+)', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id(\\d+)', PersonController.delete);
router.put('/persons/:id(\\d+)', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);

router.get('/selfAppraisal/all', SelfAppraisalController.listAll);

module.exports = router;
