const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const user = require('../../models/User');
// @route       POST api/users
// @desc        Register user
// @access      Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include email').isEmail(),
    check(
      'password',
      'Password must be at lease 6 or more characters'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    // Check if user exists

    // Get users gravatar

    //Encrypt password

    //Return jsonwebtoken

    res.send('User route');
  }
);

module.exports = router;
