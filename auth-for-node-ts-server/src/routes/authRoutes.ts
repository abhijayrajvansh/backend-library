import { test, getUsers, register } from "../controllers/authControllers";
import { Router } from "express";

const router = Router();

router.get("/test", test);
router.get("/users", getUsers);
router.post("/register", register);

export default router;
