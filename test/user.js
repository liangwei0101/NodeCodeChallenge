const assert = require("assert");
const expect = require('chai').expect;
const userService = require('../codeChallenge/userService')

describe('当用户输入为A时', () => {
    describe('当用户输入输入为为1时', () => {
        it('应该为：B1,C1,C2,B2,C3,B3,C4,C5,C6', async () => {
            let data = await userService.getTotalReferrals('A');
            assert.equal(data.userChildstr, 'B1,C1,C2,B2,C3,B3,C4,C5,C6');
        })
    })
})

describe('当用户输入为B1时', () => {
    describe('当用户输入输入为B1时', () => {
        it('应该为：C1,C2', async () => {
            let data = await userService.getTotalReferrals('B1');
            assert.equal(data.userChildstr, 'C1,C2');
        })
    })
})

describe('当用户输入为C1时', () => {
    describe('当用户输入输入为C1时', () => {
        it('应该为：C1,C2', async () => {
            let data = await userService.getTotalReferrals('C1');
            assert.equal(data.userChildstr, '');
        })
    })
})

describe('当用户输入不存在时', () => {
    describe('当用户输入不存在时', () => {
        it('应该为：用户不存在', async () => {
            let data = await userService.getTotalReferrals('-11');
            assert.equal(data.userChildstr, '用户不存在');
        })
    })
})

