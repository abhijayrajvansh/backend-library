import { test, getUsers } from "../controllers/authControllers";
import { Router } from "express";

const router = Router();

router.get("/test", test);
router.get('/get-users', getUsers)

export default router;
