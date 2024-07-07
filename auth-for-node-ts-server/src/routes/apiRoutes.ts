import {
  dashboard
} from "../controllers/apiControllers";
import { Router } from "express";

const router = Router();

router.get("/dashboard", dashboard);

export default router;
