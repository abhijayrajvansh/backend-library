import { Request, Response } from "express";
import prisma from '../db/prisma';

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
    const allUsers = await prisma.users.findMany()
    console.log(allUsers)
  } catch (error) {
    console.log(error.message)
  }
}