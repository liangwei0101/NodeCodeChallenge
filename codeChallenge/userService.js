const model = require('./user');
const shuffle = require('../codeChallenge/shuffle')

var queryUserList;
var queryUserMap= {};
var sortList = {};
var userChildstr = '';
var userResultTree = [];

exports.getTotalReferrals = async function (userName) {
  let result = {};

  let data = { 'user': [], 'userReferral': [] };

  await model.User.findAll().then(userData => {
    queryUserMap = setUserMap(userData)
    queryUserList = userData;
    data.user = userData;
  });

  await model.UserReferral.findAll().then(userReferralData => {
    data.userReferral = userReferralData;

    // 对数据集进行分类
    sortDataList(userReferralData);
    // 输入要查找的用户id，将能返回用户树
    result = createTree(userName)
  });

  return result;
}

// 查询元素，有将返回元素
function findElementByName(userName, queryUserList) {
  let obj = {};

  queryUserList.forEach(element => {
    if (element.name === userName) {
      obj = element;
    }
  });

  return obj;
}

// 查询元素，有将返回元素
function findElementByUserId(userId, queryUserList) {
  let obj = {};

  queryUserList.forEach(element => {
    if (element.id === userId) {
      obj = element;
    }
  });

  return obj;
}

// 设置用户Map
function setUserMap(queryUserList){
  let arry = [];

  queryUserList.forEach(element => {
    let user = {'id': '','name': ''}

    user.id = element.id;
    user.name = element.name;
    arry.push(user);
  });

  return arry;
}

// 对数据源进行分类，结果如：{'1':['2','3','4'],'2':['5','6']}...
function sortDataList(userReferralList) {
  userReferralList.forEach(element => {
    let nodeChildrenIdArray;

    if (!sortList[element.userId]) {
      // 如果是第一次增加，则新增一个数组
      nodeChildrenIdArray = [element.referralId]

      // 是否合法的流程
      if (isIllegalFlow(element.referralId, element.userId, sortList)) {
        sortList[element.userId] = nodeChildrenIdArray
      }

    } else {
      // 是否合法的流程
      if (isIllegalFlow(element.referralId, element.userId, sortList)) {
        // 有数组则push
        nodeChildrenIdArray = sortList[element.userId]
        nodeChildrenIdArray.push(element.referralId)
      }
    }
  });
}

// 创建子节点树 
// 因为涉及到递归，数据量大可能会内存泄漏，如果很大时可以写成c/c++模块
function creatChildrenTree(userId, nodeInfo) {
  let userChildArry = sortList[userId];
  let flag = shuffle.parameterIsNull(userChildArry);
  if (!flag) {
    userChildArry.forEach(item => {
      let nodeModel = { 'id': '', 'name': '', 'ChildNode': [] };

      if (sortList[item]) {
        nodeModel.id = item;
        // nodeModel.name = queryUserMap[item].name
        // TODO 单元测试写死了值，数据量大时，可以转化成map，减少时间
        nodeModel.name = findElementByUserId(item, queryUserList).name;
        nodeInfo.push(nodeModel);
        // 输出的字符串展示
        userChildstr += nodeModel.name + ','
        // 递归，将查找到的子节点的id和ChildNode传入
        creatChildrenTree(nodeModel.id, nodeModel.ChildNode);
      } else {
        nodeModel.id = item;
        // TODO 单元测试写死了值，数据量大时，可以转化成map，减少时间
        //nodeModel.name = queryUserMap[item].name
        nodeModel.name = findElementByUserId(item, queryUserList).name;
        nodeInfo.push(nodeModel);
        userChildstr += nodeModel.name + ','
      }
    });
  }
}

// 创建树
function createTree(userName) {
  // 创建头结点
  let nodeModel = { 'id': '', 'name': '', 'ChildNode': [] };
  let obj = findElementByName(userName, queryUserList);
  nodeModel.name = obj.name;
  nodeModel.id = obj.id;
  userResultTree.push(nodeModel);

  let resultShow = { 'userChildstr': '', 'userTree': [] }
  creatChildrenTree(nodeModel.id, nodeModel.ChildNode)
  resultShow.userChildstr = userChildstr.slice(0, userChildstr.length - 1);
  resultShow.userTree = nodeModel;

  // 提示用户不存在
  if (shuffle.parameterIsNull(resultShow.userChildstr) && shuffle.parameterIsNull(resultShow.userTree.id)) {
    resultShow.userChildstr = '用户不存在'
  }

  freeData();
  return resultShow;
}

// 是否为不合法的流，true为合法
function isIllegalFlow(referralId, userId, sortList) {
  let isIllegal = true;

  if (Object.keys(sortList).length != 0) {
    let hasKey = false;
    let hasValue = false;

    // 此情况为不合法 {'1':['2']}、{'2':['1']}
    // 判断key是否存在，再判断value是否存在
    // 两个都存在将视为不合法
    // TODO 实际情况下应该将sortList按插入表时间排序
    hasKey = sortList.hasOwnProperty(referralId);
    let childArry = sortList[referralId];
    if (!shuffle.parameterIsNull(childArry)) {
      let index = childArry.indexOf(userId);
      if (index >= 0) {
        hasValue = true;
      }
    }

    if (hasKey && hasValue) {
      isIllegal = false;
    }
  }

  return isIllegal;
}

// 释放变量
function freeData() {
  userResultTree = []
  queryUserList = [];
  sortList = [];
  userChildstr = '';
  queryUserMap = {};
}