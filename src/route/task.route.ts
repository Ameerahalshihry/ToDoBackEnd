import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controller/task.controller'
let router = express.Router()
import { Tasktype } from "../schema.zod/task.zod";
import validate from '../middleware/validate';

//user create
router.post('/:userId',validate(Tasktype) ,createTask )

//read task 
router.get('/:userId', getTasks)

//update task
router.put('/:id', validate(Tasktype) ,updateTask)

//delete task
router.delete('/:id',deleteTask)

export default router