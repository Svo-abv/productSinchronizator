import { Router } from "express";
import CatalogeController from "../controllers/CatalogeController.mjs";
import { AuthMiddleware } from "../middleware/AuthMiddleware.mjs";
import { CheckRole } from "../middleware/CheckRoleMiddleware.mjs";

const CatalogeRoute = Router();

CatalogeRoute.post("/", CheckRole('ADMIN'), CatalogeController.create);
CatalogeRoute.get("/", CatalogeController.getAll);
CatalogeRoute.get("/:id", CatalogeController.get);
CatalogeRoute.get("/delete/:id", AuthMiddleware, CatalogeController.setDeleted);


export default CatalogeRoute;