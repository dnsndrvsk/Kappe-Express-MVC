import express from 'express';
import defaultController from './defaultController';


const router = express.Router();

export default () => {
  router.use('/', defaultController());
  
  return router;
}
