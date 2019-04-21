exports.DB = {
    dialect: 'mysql',
    host: '101.132.124.171', // 服务器地址
    port: 3306, // 数据库端口号
    username: 'root', // 数据库用户名
    password: 'root', // 数据库密码
    database: 'node', // 数据库名称
    // 连接池
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    // 数据表全局配置
    define: {
      freezeTableName: true,
      // 是否为表添加 createdAt 和 updatedAt 字段
      // createdAt 记录表的创建时间
      // updatedAt 记录字段更新时间
      timestamps: false,
      // 是否为表添加 deletedAt 字段
      // 在日常开发中删除数据记录是一大禁忌，因此我们删除数据并不会真正删除，而是为他添加
      // deletedAt字段
      paranoid: false,
      // 是否开启op
      operatorsAliases: false
    },
    // 时区
    timezone: '+08:00'
    // prefix: 'api_' // 默认"api_"
  }