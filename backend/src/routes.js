import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetUpController from './app/controllers/MeetUpController';
import InscriptionController from './app/controllers/InscriptionController';
import ScheduleMeetUpController from './app/controllers/ScheduleMeetUpController';

import authMiddlewares from './middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/schedule', ScheduleMeetUpController.index);

routes.use(authMiddlewares);

routes.put('/users', UserController.update);

routes.get('/files', FileController.index);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/meetups', MeetUpController.index);
routes.post('/meetups', upload.single('banner'), MeetUpController.store);
routes.put('/meetups/:id', upload.single('banner'), MeetUpController.update);
routes.delete('/meetups/:id', MeetUpController.destroy);

routes.get('/inscriptions', InscriptionController.index);
routes.post('/inscriptions/:meetUpId', InscriptionController.store);

export default routes;
