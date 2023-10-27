import {DataTypes} from 'sequelize';
import sequelize from './connect.js';


const tableName = 'user';
const User = sequelize.define(tableName, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName
});


export default User;
