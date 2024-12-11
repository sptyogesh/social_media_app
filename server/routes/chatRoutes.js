const express = require('express');
const router = express.Router();

router.post('/send', (req, res) => {
  const message = req.body.message;
  res.status(200).json({ message: 'Message sent successfully', data: message });
});

module.exports = router;
