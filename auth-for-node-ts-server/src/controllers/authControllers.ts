import { Request, Response } from "express";


export const test = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      msg: 'test-route', status: 200
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await 'console.log: prisma db query to get all users new'
    console.log(allUsers)
  } catch (error) {
    console.log(error.message)
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    const allUsers = await 'console.log: prisma db query to register'
    console.log(allUsers)
  } catch (error) {
    console.log(error.message)
  }
}