import { Router } from "express";
import Paths from "../common/Paths.js";
import mainRouter from "./main.routes.js";

const router = Router();

router.use(Paths.Main.Base, mainRouter)

export default router;
