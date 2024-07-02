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

export const register = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      msg: 'register-route', status: 200
    })
  } catch (error) {
    console.log(error.message)
  }
}