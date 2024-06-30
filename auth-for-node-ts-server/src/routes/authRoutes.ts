import { testRoute } from "../controllers/authControllers";
import { Router } from "express";

const router = Router();

router.get("/test", testRoute);

export default router;
