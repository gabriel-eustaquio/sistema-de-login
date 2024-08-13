import express from 'express';
import CreateUserController from '../controllers/CreateUserController';
import LoginUserController from '../controllers/LoginUserController';
import ForgotPasswordUserController from '../controllers/ForgotPasswordUserController';
import ResetPasswordUserController from '../controllers/ResetPasswordUserController';
import CheckResetPasswordToken from '../middleware/CheckResetPasswordToken';
const router = express.Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const forgotPasswordUserController = new ForgotPasswordUserController();
const resetPasswordUserController = new ResetPasswordUserController();
const checkResetPasswordToken = new CheckResetPasswordToken();

router.post('/createUser', createUserController.handle);
router.post('/loginUser', loginUserController.handle);
router.post('/forgotPasswordUser', forgotPasswordUserController.handle);
router.post('/resetPasswordUser', checkResetPasswordToken.handle, resetPasswordUserController.handle);

export default router;