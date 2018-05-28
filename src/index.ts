import * as koa from 'koa';

var app = new koa();

var port = 3001;

console.log('My port: ' + port);

app.use(async function(ctx) {
  console.log(ctx.method);
  ctx.body = 'Hello World';
});

app.listen(port);