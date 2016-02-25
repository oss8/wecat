import requiredir from 'require-dir';
import Router from 'koa-router';
import _debug from 'debug';

const debug = _debug('app:server:router:');

const controllers = requiredir('./controllers');

export default () => {
  const router = new Router({});

  router.get('/token', controllers.token.token);

  return router;
}
