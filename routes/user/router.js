import express from 'express';
import { catchAsync } from '../../utils/catchAsync.js';

import authLogin from '../auth/login/post.js';
import authRegister from '../auth/register/post.js';

import getAllUsers from './getAllUsers/get.js';
import getUser from './getUser/get.js';
import createUser from './createUser/post.js';
import updateUser from './updateUser/put.js';
import deleteUser from './deleteUser/delete.js';

const router = express.Router();

// Auth
router
  .post('/register', catchAsync(authRegister))
  .post('/login', catchAsync(authLogin));

// User

router
  .get('/', getAllUsers)
  .post('/', createUser)
  .get('/:id', getUser)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser);

export default router;
