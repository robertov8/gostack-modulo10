import dotEnv from 'dotenv';

dotEnv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
