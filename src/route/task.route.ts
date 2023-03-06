import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controller/task.controller'
let router = express.Router()

//user create
router.post('/:userId',createTask )

//read task 
router.get('/:userId', getTasks)

//update task
router.put('/:id', updateTask)

//delete task
router.delete('/:id',deleteTask)

export default router