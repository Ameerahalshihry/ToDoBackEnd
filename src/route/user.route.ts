import express from 'express'
import { createUser, login, getUsers } from '../controller/user.controller'
let router = express.Router()

//user create
router.post('/',createUser )
router.get('/',getUsers )
router.get('/:userId',login )

export default router