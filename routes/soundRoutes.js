const express = require('express');
const router = express.Router();
const path = require('path');

// Serve sound files
router.use("/sounds", express.static(path.join(__dirname, '..', 'public', 'assets', 'sounds')));
// router.use('public/assets/sounds/percussion', express.static(path.join(__dirname, '..', 'sounds')));

module.exports = router;