import express from 'express';
import User from '../models/userModel.js';
import Address from '../models/addressModel.js';

const router = express.Router();
//posting user details with his address
router.post('/submit', async (req, res) => {
  const { name, mobile, street, city, state, postal_code,country } = req.body;

  try {
    // many user with same user name can exist...but mobile number must be different...
    let user = await User.findOne({ where: {name, mobile } });
    if (!user) {
        // Create a new user if mobile number is unique
        user = await User.create({ name, mobile });
    }
    // one user name - one mobile number ---many addresses---possible
    await Address.create({
    street, city, state, postal_code,country, user_id: user.id
    });
    res.status(201).send('Success');
  } catch (err) {
    res.status(500).send('Failed');
  }
});

//finding user details using his mobile number
//mobile number is uniques.
//for every one mobile number there will be onn user with many addresses....
router.get('/user/:mobile', async (req, res) => {
  const { mobile } = req.params;

  try {
          const user = await User.findOne({
          where: { mobile },
          include: Address
      });

      if (!user) {
          return res.status(404).send('No user with given mobile number exists...');
      }res.status(200).json({
          name: user.name,
          addresses: user.Addresses
      });
  }catch (err) {
      res.status(500).send(err);
  }
});
export default router;
