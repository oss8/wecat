import _debug from 'debug';
import refreshToken from 'wechat-access-token';

const debug = _debug('app:controller:token: ');

let last_token = {};

export async function token(ctx, next) {
  let {appid, secret} = ctx.query;

  debug('appid: ', appid, ' <--> secret: ', secret);

  if (!appid || !secret) {
    ctx.status = 400;
    return ctx.body = 'You must take parameter {appid} and {secret}';
  }

  let token = await refresh(appid, secret);

  ctx.body = token;
}

function refresh(appid, secret) {
  return new Promise(function(resolve, reject) {
    refreshToken(appid, secret, function (err, token) {
      if (err) {
        console.log('ssss: ', err);
        return reject(err);
      }
      return resolve(token);
    })
  });
}
