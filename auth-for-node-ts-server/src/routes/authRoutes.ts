import { test, getUsers, register } from "../controllers/authControllers";
import { Router } from "express";

const router = Router();

router.get("/test", test);
router.get('/get-users', getUsers)
router.get('/register', register)

export default router;
