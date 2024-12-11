const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const newPost = req.body;
  res.status(201).json({ message: 'Post created successfully', post: newPost });
});
module.exports = router;
