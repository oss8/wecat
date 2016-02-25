# Intro
This is a service that pop a wechat access token, always newest.

# Usage

## Install and DEBUG
```
npm i
npm run debug
```

## rest api
```
GET http://domain/token?appid={appid}&secret={secret}
```

## Response:
```
  {"access_token":"ACCESS_TOKEN","expires_in":7200}
```

## Error:
```
  {"errcode":40013,"errmsg":"invalid appid"}
```
[see all error code on wehcat official doc](http://mp.weixin.qq.com/wiki/10/6380dc743053a91c544ffd2b7c959166.html)
