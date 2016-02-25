import Koa from 'koa';
import convert from 'koa-convert';
import logger from 'koa-logger';
import router from './router';

const app = new Koa();

// Error Handle
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    console.log('app error: ', e.stack);
    ctx.status = e.status || 500;
    ctx.body = {
      status: e.code,
      message: e.message
    }
  }
});

app.use(convert(logger()));
app.use(router().routes());

export default app;
