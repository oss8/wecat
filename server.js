require('babel-core/register');
const app = require('./app/app');

const PORT = process.env.PORT || 2567;
const ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, function () {
  console.log('Server started and listening on port', PORT);
})
