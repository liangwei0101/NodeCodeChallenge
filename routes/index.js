const router = require('koa-router')()
const shuffle = require('../codeChallenge/shuffle');
const model = require('../codeChallenge/user');
const userController = require('../codeChallenge/userService');

router.get('/', async (ctx, next) => {
  let arr1 = ['a1', 'a2', 'a3', 'a4', 'a5']
  let arr2 = ['b1', 'b2', 'b3']
  let arr3 = ['c1', 'c2', 'c3']

  let showList = shuffle.doMain(arr1, arr2, arr3);
  await ctx.render('index', {
    title: showList
  })
})

router.get('/user', async (ctx, next) => {
  let data = await userController.getTotalReferrals('A');
  ctx.body = { title: data}
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
