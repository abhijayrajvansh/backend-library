import { Request, Response } from "express";
import prisma from "../db/prisma";
import { hash } from "bcrypt";

export const test = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      msg: "test-route",
      status: 200,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.users.findMany();
    return res.status(200).json({
      users: allUsers,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = await req.body;
    const saltedPassword = await hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        email, password: saltedPassword
      }
    })

    console.log(newUser)

    return res.status(201).json({
      msg: "user created",
    });
  } catch (error) {
    return res.status(400).json({
      msg: "user already exists.",
    });
  }
};
