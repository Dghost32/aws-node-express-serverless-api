import { Router } from "express";
import Paths from "../common/Paths.js";
import mainController from "../controllers/main.controller.js";

const mainRouter = Router();

mainRouter.get(Paths.Main.Hello, mainController.greet);

export default mainRouter;
