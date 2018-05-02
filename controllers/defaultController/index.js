import express from 'express';
import indexController from './indexController';
import aboutController from './aboutController';
import updatesController from './updatesController';
import workController from './workController';
import commentController from './commentController';


const router = express.Router();

export default () => {
  router.get('/', indexController);
  router.get('/about', aboutController);
  router.get('/updates', updatesController);
  router.get('/work/:id', workController);
  router.post('/sendcomment', commentController);
  
  return router;
}
