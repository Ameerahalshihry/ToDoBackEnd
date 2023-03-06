import taskRouter from './task.route'
import userRouter from './user.route'
import express from 'express'
let router = express.Router()


router.use('/users',userRouter )
router.use('/tasks',taskRouter )

export default router