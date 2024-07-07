import { Request, Response } from "express";
import prisma from "../db/prisma";
import { hash, compare } from "bcrypt";

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
    const allUsers = await prisma.users.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        updatedAt: true,
      },
    });
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
    const saltRounds = 10;
    const saltedPassword = await hash(password, saltRounds);

    const newUser = await prisma.users.create({
      data: {
        email,
        password: saltedPassword,
      },
    });

    console.log(newUser);

    return res.status(201).json({
      msg: "user created",
    });
  } catch (error) {
    return res.status(400).json({
      error: "user with email already exists.",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = await req.body;

    // find if user exists or not
    const isEmail = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!isEmail) return res.json({ isEmail: "user not found" });

    // check if the entered password id correct or not
    const isValidPassword = await compare(password, isEmail.password);

    console.log('is entered password correct:',isValidPassword);

    return res.status(201).json({
      msg: "success",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "internal server error",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = await req.body;

    // find if user exists or not
    const isUser = await prisma.users.findUnique({
      where: {
        id,
      },
    });

    if (!isUser) return res.status(404).json({msg: 'user not found'})


    await prisma.users.delete({
      where: {
        id
      }
    })

    return res.status(201).json({
      msg: "user deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "internal server error",
    });
  }
};
