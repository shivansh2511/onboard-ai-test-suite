const express = require('express');
const router = express.Router();

function getAllUsers(req, res) {
  res.send('All users');
}

// This route should become /api/v1/users
router.get('/users', getAllUsers);

module.exports = router;