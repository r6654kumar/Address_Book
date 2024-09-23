import express from 'express';
import User from '../models/userModel.js';
import Address from '../models/addressModel.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, mobile, street, city, state, postal_code,country } = req.body;

  try {
    //There can be two people with same NAME but their mobile number must be Different
    let user = await User.findOne({ where: {name, mobile } });
    if (!user) {
        // Create a new user if mobile number is unique
        user = await User.create({ name, mobile });
    }
    await Address.create({
    street, city, state, postal_code,country, user_id: user.id
    });
    res.status(201).send('Success');
  } catch (err) {
    res.status(500).send('Failed');
  }
});

export default router;
