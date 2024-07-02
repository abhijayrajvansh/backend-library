import { test, register } from "../controllers/authControllers";
import { Router } from "express";

const router = Router();

router.get("/test", test);
router.get('/register', register)

export default router;
