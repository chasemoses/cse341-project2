const express = require('express');
const router = express.Router();

router.use('/', require('./product'));
router.use('/', require('./inventory'))








module.exports = router;