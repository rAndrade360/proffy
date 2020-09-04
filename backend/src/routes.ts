import {Router} from 'express';
const routes = Router();
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionController';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

const classesController = new ClassesController();
const connectionController = new ConnectionController();
const sessionController = new SessionController();
const userController = new UserController();

routes.post('/users', userController.create);

routes.post('/session', sessionController.login);

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);

export default routes;