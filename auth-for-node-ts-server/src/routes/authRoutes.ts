import {
  test,
  getUsers,
  register,
  login,
  deleteUser,
} from "../controllers/authControllers";
import { Router } from "express";
import validate from "../middlewares/validate";
import { authSchema } from "../validators/authValidators";

const router = Router();

router.get("/test", test);
router.get("/users", getUsers);
router.post("/register", validate(authSchema), register);
router.post("/login", validate(authSchema), login);
router.delete("/delete", deleteUser)

export default router;
