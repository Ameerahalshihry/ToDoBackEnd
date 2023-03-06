import express from 'express'
import { createUser, login, getUsers } from '../controller/user.controller'
import { Usertype } from '../schema.zod/user.zod'
import validate from '../middleware/validate'
let router = express.Router()

//user create
router.post('/',validate(Usertype), createUser )
router.get('/',getUsers )
router.get('/:userId',login )

export default router