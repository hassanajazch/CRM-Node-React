import express from 'express';
import UserController from '../controllers/User';

const router = express.Router({});

router.post('/login', UserController.loginUser);
router.post('/createUser', UserController.createUser);
router.delete('/deleteUser', UserController.deleteUser);
router.get('/getAllUsers', UserController.getAllUsers);
router.put('/updateUser', UserController.updateUser);

module.exports = router;
