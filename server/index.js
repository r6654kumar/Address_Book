import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/dbConfig.js';
import userAddressRoute from './routes/userAddress.js';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userAddressRoute);
const PORT = process.env.PORT;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
