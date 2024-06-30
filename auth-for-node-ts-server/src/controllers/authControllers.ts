import { Request, Response } from "express";

export const testRoute = (req: Request, res: Response) => {
  res.status(200).json({
    msg: 'hello world'
  })
}