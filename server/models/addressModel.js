import {DataTypes} from 'sequelize';
import sequelize from '../config/dbConfig.js';
import User from './userModel.js';
const Address= sequelize.define('Address',
    {
    street:DataTypes.STRING,
    city:DataTypes.STRING,
    state:DataTypes.STRING,
    postal_code:DataTypes.STRING,
    country:DataTypes.STRING
    },
    {
    timestamps:true
    }
);
Address.belongsTo(User,{foreignKey:'user_id',onDelete:'CASCADE'});
User.hasMany(Address,{foreignKey:'user_id'});

export default Address;