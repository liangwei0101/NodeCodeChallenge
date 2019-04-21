const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', 'root', {
  dialect: 'mysql',
  host: "101.132.124.171",
  port: 3306,
})

// user model
exports.User = sequelize.define('user', {
  id: {
    type: Sequelize.STRING, // 指定值的类型
    field: 'id', // 指定存储在表中的键名称,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING
  }, 
},{
  freezeTableName: true, // Model 对应的表名将与model名相同
  timestamps:false
})

// userReferral model
exports.UserReferral = sequelize.define('userReferral', {
  id: {
    type: Sequelize.STRING, // 指定值的类型
    field: 'id', // 指定存储在表中的键名称,
    primaryKey: true,
  },
  referralId: {
    type: Sequelize.STRING
  }, 
  userId: {
    type: Sequelize.STRING
  }, 
},{
  freezeTableName: true, // Model 对应的表名将与model名相同
  timestamps:false
})
