const dotEnv = require('dotenv');

dotEnv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
