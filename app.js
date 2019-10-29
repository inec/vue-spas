var Koa = require('koa');
const path = require('path')
var Router = require('koa-router');
const koaBody = require('koa-body');
 
var app = new Koa();
var router = new Router();
var Pug = require('koa-pug');
var pug = new Pug({
 viewPath: path.resolve(__dirname, './views'),
   basedir: './views',
   app: app //Equivalent to app.use(pug)
});

router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello World';
});
router.get('/hello', async (ctx, next) => {
    // ctx.router available
    //ctx.body = 'Hello render World';
    await ctx.render('first_view');//'Hello World';
  }); 
  router.get('/dynamic', async (ctx, next) => {
    // ctx.router available
    //ctx.body = 'Hello render World';
    await ctx.render('dynamic',   
    {    name:'a',    url:"https://www.tutorialspoint.com",nae:"bb"}

    );//'Hello World';
  }); 


  router.get('/person', async (ctx, next) => {
    // ctx.router available
    //ctx.body = 'Hello render World';
    await ctx.render('person',   
    {    name:'a',    url:"https://www.tutorialspoint.com",nae:"bb"}

    );//'Hello World';
  }); 

  router.post('/person', koaBody(),
  (ctx) => {
    console.log(ctx.request.body);
    // => POST body
    ctx.body = JSON.stringify(ctx.request.body);
  }
);


app
  .use(router.routes())
  .use(router.allowedMethods());
  app.listen(3000);