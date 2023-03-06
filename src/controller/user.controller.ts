import prisma from "../config/db"
import {Request, Response} from 'express'
import * as argon2 from "argon2";

export const getUsers = async (req: Request, res:Response)=>{
    try{
        let users= await prisma.user.findMany()
        if(users){
            res.json(users)
        }
    }catch(e){
        res.json({"Error":e})
    }
}
export const createUser = async (req: Request, res:Response)=>{
    let hash = await argon2.hash(req.body.password)
    try{
        let user= await prisma.user.create({
            data:{
                name:req.body.name,
                password:hash,
                email:req.body.email
            }
        })
        if(user){
            res.json({"msg": "user created", "user": user})
        }
    }catch(e){
        res.json({"Error":e})
    }
}

export const login = async (req: Request, res:Response)=>{
    try{
        let user= await prisma.user.findFirst({
            where:{
                id: req.params.userId
            }
        })
        if(user){
            let checkPass= await argon2.verify(user.password, req.body.password)
            if(checkPass){
                res.json({"msg":`welcome back ${user.name}`})
            }else{
                res.json({"msg":"password did not match"})
            }
        }
    }catch(e){
        res.json({"Error":e})
    }
}