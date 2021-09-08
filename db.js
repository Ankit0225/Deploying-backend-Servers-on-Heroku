const sequelize = require('sequelize')

const db = new sequelize({
    // dialect: 'sqlite',
    // storage: __dirname + '/tasks.db'
    dialect: 'postgres',
    database: 'd81s14a2jm0l8b',
    username: 'roivnbkucogfyw',
    password:  'c885f085e9d21dc3cfcc718d29666addf528631ca2710bcc4f0bc2af88e59e9f',
    host: 'ec2-44-195-201-3.compute-1.amazonaws.com',
})

const Tasks = db.define('task', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    priority: {
        type: sequelize.DataTypes.ENUM('high', 'normal', 'low'),
        defaultValue: 'normal'
    }

}) 

module.exports = {
    db, Tasks
}