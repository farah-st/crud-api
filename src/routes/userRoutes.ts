import { Router } from 'express';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUser);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

export default router;
