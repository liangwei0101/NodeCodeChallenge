const assert = require("assert");
const expect = require('chai').expect;
const shuffle = require('../codeChallenge/shuffle')

describe('doMain', () => {
    describe('doMain', () => {
        it('doMain参数不传时，应该返回为[]', () => {
            assert.equal(shuffle.doMain().toString(), [].toString());
        })
    })
})

describe('doMain', () => {
    describe('doMain', () => {
        it('doMain参数传一个数组时，应该和原来一样', () => {
            let arr1 = ['a1', 'a2', 'a3', 'a4', 'a5']
            assert.equal(shuffle.doMain(arr1).toString(), arr1.toString());
        })
    })
})

describe('doMain', () => {
    describe('doMain', () => {
        it('数组长度都不相同时，排序正确', () => {
            let arr1 = ['a1', 'a2', 'a3', 'a4', 'a5']
            let arr2 = ['b1', 'b2', 'b3']
            let arr3 = ['c1', 'c2']
            let value = ['a1', 'b1', 'a2', 'b2', 'a3', 'b3', 'a4', 'c1', 'a5', 'c2']
            assert.equal(shuffle.doMain(arr1, arr2, arr3).toString(), value.toString());
        })
    })
})

describe('doMain', () => {
    describe('doMain', () => {
        it('数组长度部分相同时，排序正确', () => {
            let arr1 = ['a1', 'a2', 'a3', 'a4', 'a5']
            let arr2 = ['b1', 'b2', 'b3']
            let arr3 = ['c1', 'c2', 'c3']
            let value = ['c3', 'a1', 'b1', 'a2', 'b2', 'a3', 'b3', 'a4', 'c1', 'a5', 'c2']
            assert.equal(shuffle.doMain(arr1, arr2, arr3).toString(), value.toString());
        })
    })
})

describe('doMain', () => {
    describe('doMain', () => {
        it('数组长度都相同时，排序正确', () => {
            let arr1 = ['a1', 'a2', 'a3']
            let arr2 = ['b1', 'b2', 'b3']
            let arr3 = ['c1', 'c2', 'c3']
            let value = ['c1', 'a1', 'c2', 'b1', 'c3','a2', 'b2', 'a3', 'b3']
            assert.equal(shuffle.doMain(arr1, arr2, arr3).toString(), value.toString());
        })
    })
})

describe('doMain', () => {
    describe('main', () => {
        it('数组最短只有一个时，排序正确', () => {
            let arr1 = ['a1', 'a2', 'a3', 'a4', 'a5']
            let arr2 = ['b1']
            let value1 = ['b1', 'a1', 'a2', 'a3', 'a4', 'a5']
            let value2 = ['a1', 'b1', 'a2', 'a3', 'a4', 'a5']
            let value3 = ['a1', 'a2', 'b1', 'a3', 'a4', 'a5']
            let value4 = ['a1', 'a2', 'a3', 'b1', 'a4', 'a5']
            let value5 = ['a1', 'a2', 'a3', 'a4', 'b1', 'a5']
            let value6 = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1']
            let allCondition =[]
            allCondition.push(value1)
            allCondition.push(value2)
            allCondition.push(value3)
            allCondition.push(value4)
            allCondition.push(value5)
            allCondition.push(value6)
            expect(allCondition.toString()).to.contain(shuffle.doMain(arr1, arr2).toString());
        })
    })
})

describe('parameterIsNull', () => {
    describe('parameterIsNull', () => {
        it('没有传时，返回应该为true', () => {
            assert.equal(shuffle.parameterIsNull(), true);
        })
    })
})

describe('parameterIsNull', () => {
    describe('parameterIsNull', () => {
        it('传null时，返回应该为true', () => {
            assert.equal(shuffle.parameterIsNull(null), true);
        })
    })
})

describe('parameterIsNull', () => {
    describe('parameterIsNull', () => {
        it('传null时，返回应该为true', () => {
            assert.equal(shuffle.parameterIsNull(''), true);
        })
    })
})

describe('parameterIsNull', () => {
    describe('parameterIsNull', () => {
        it('传1时，返回应该为false', () => {
            assert.equal(shuffle.parameterIsNull('1'), false);
        })
    })
})
