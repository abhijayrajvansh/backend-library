import { Request, Response } from "express";

export const dashboard = (req: Request, res: Response) => {
  return res.json({
    route_protected: true,
    msg: 'dashboard'
  })
};
