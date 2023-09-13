import { Router  } from "express";

import User from "./user.routes"

import Trabajos from "./trabajos.routes"
const router = Router();

// rutas del usuario
router.use("/user", User)
router.use("/trabajos", Trabajos)
export default router