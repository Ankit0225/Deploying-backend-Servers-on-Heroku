const sequelize = require('sequelize')

const db = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/tasks.db'
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