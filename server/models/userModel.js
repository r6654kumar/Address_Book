import {DataTypes} from 'sequelize';
import sequelize from '../config/dbConfig.js';
const User=sequelize.define(
    'User',{
        name:{
            type: DataTypes.STRING,
            allowNULL:false
        },
        mobile:{   
                type: DataTypes.STRING, 
                allowNull: false, 
                unique: true 
              },
        },
        {
            timestamps:true
        }
);
export default User;