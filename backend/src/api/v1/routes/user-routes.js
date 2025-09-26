 import express from 'express';
import { home, login, register } from '../../../controllers/user-controller.js';
 export const userRoutes = express.Router();
userRoutes.get('/',home);
userRoutes.post('/login',login);
userRoutes.post('/register',register);