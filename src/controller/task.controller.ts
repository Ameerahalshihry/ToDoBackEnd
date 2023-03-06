import prisma from "../config/db"
import {Request, Response} from 'express'

export const createTask = async (req: Request, res:Response)=>{
    try{
        let task= await prisma.task.create({
            data:{
                title:req.body.title,
                userId:req.params.userId,
            }
        })
        if(task){
            res.json({"msg": "task created", "task": task})
        }
    }catch(e){
        res.json({"Error":e})
    }
}


export const getTasks = async (req: Request, res:Response)=>{
    try{
        let tasks= await prisma.task.findMany({
            where:{
                userId: req.params.userId
            },
            select:{
                title:true,
                user:{
                    select:{
                        name:true
                    }
                }
            }
        })
        if(tasks){
            return res.status(200).json(tasks)
        }
    }catch(e){
        res.json({"Error":e})
    }
}


export const updateTask = async (req: Request, res:Response)=>{
    try{
        //we use UpdateMany to ensure the user who write the task can update , and put in where userId
        //this is a solution to ensure that the user who write the task can update and delete the task
        //1-updateMany and 2- in where write userId 
        //updateMany return number of record updated
        let tasks= await prisma.task.updateMany({
            where:{
                id: req.params.id,
                userId: req.body.userId
            },
            data:{
                title:req.body.title,
                isCompleted: req.body.isCompleted
            }
        })
        if(tasks.count == 0){
            throw("no record updated")
        }
        return res.status(200).json({"msg":"task updated"})
    }catch(e){
        res.json({"Error":e})
    }
}



export const deleteTask =async (req: Request, res:Response)=>{
    try{
        //we use UpdateMany to ensure the user who write the task can update , and put in where userId
        //this is a solution to ensure that the user who write the task can update and delete the task
        //1-updateMany and 2- in where write userId 
        //updateMany return number of record updated
        let tasks= await prisma.task.deleteMany({
            where:{
                id: req.params.id,
                userId: req.body.userId
            },
        })
        if(tasks.count == 0){
            throw("no record deleted")
        }
        return res.status(200).json({"msg":"task deleted"})
    }catch(e){
        res.json({"Error":e})
    }
}