// 合并数组
// exports.combineList = function (arr) {
//   let lenthList = [];
//   if (arr.length > 0) {
//     arr.forEach(element => {
//       lenthList.push(element.length);
//     })
//   }
//   return lenthList;
// }

// 获取数组的总长度
// exports.getNewArrayLength = function (arr) {
//   let sumLength = 0;
//   if (arr.length > 0) {
//     arr.forEach((element) => {
//       sumLength += element;
//     })
//   }
//   return sumLength;
// }

// 获取最长数组在新数组里的下标
exports.getMaxLengthIndex = function (arr) {
  let maxLength = 0;
  let returnIndex = 0;

  if (arr.length > 0) {
    maxLength = arr[0].length;
    arr.forEach((element, index) => {
      if (element.length > maxLength) {
        returnIndex = index;
      }
    })
  }

  return returnIndex;
}

// 判断参数是否为空
exports.parameterIsNull = function (parameter) {
  let flag = true;
  
  if (parameter == null || parameter === undefined || parameter === '') {
    flag = true;
  } else {
    flag = false;
  }

  return flag
}

// 设置新数组
exports.setNewArray = function (allArrayList, index) {
  let newList = [];

  if (allArrayList.length > 0) {
    // 将长度最大的数组首先放入新数组中
    for (let i = 0; i < allArrayList[index].length; i++) {
      let emptyFlag = this.parameterIsNull(allArrayList[index][i]);
      if (!emptyFlag) {
        newList.push(allArrayList[index][i]);
      }
    }

    // location插入位置，默认是插入在数组的第二个位置
    let location = 1;
    for (let i = 0; i < allArrayList.length; i++) {
      if (i !== index) {
        for (let j = 0; j < allArrayList[i].length; j++) {
          newList.splice(location, 0, allArrayList[i][j]);
          // 判断插入的数据是否到最后一位，如果为空，将从头部开始插入，否则将从1、3、5、7...
          let flag = this.parameterIsNull(newList[location + 1])
          if (flag) {
            location = 0;
          } else {
            location += 2;
          }
        }
      } else {
        continue;
      }
    }
  }

  return newList;
}

// 执行函数
exports.doMain = function (...arr) {
  let allList = [];

  arr.forEach(element => {
    allList.push(element);
  });

  // 获取最长数组下标
  let index = this.getMaxLengthIndex(allList);
  // 排序插入数组
  let newListShow = this.setNewArray(allList, index);

  return newListShow;
}