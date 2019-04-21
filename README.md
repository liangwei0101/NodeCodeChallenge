# NodeCodeChallenge

+ 代码采用Koa框架上运行，数据库使用阿里云Mysql，单元测试框架为mocha。
+ 题目一使用了数据库，题目二也顺便用url的方式。
+ **sequelize** 之前没有接触，故没有过多优化。 

## 下载依赖包  
```
yarn install
```
## 运行 
```
npm run start
```

### 题目一验证
```
输入： http://localhost:3000/ ，将能看到"c3,a1,b1,a2,b2,a3,b3,a4,c1,a5,c2".
```
### 题目二验证
```
输入： http://localhost:3000/user ，将能看到输出的“字符串"和"用户树"
```
### 单元测试验证
```
输入： mocha，将能看到单元测试的结果
```
