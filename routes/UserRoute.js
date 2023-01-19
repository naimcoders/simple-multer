import express from 'express'
import upload from '../controllers/MulterController.js'
import { createUserController, readUsersController } from '../controllers/UserController.js'
const router = express.Router()

router.post('/add', upload.single('image'), createUserController)
router.get('/', readUsersController)

export default router