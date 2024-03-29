import { Router } from "express";
import CatalogeController from "../controllers/CatalogeController.mjs";
import { AuthMiddleware } from "../middleware/AuthMiddleware.mjs";
import { CheckRole } from "../middleware/CheckRoleMiddleware.mjs";

const CatalogeRoute = Router();

CatalogeRoute.post("/", CheckRole('ADMIN'), CatalogeController.create);
CatalogeRoute.get("/", AuthMiddleware, CatalogeController.getAll);
CatalogeRoute.get("/:id", AuthMiddleware, CatalogeController.get);
CatalogeRoute.post("/user", AuthMiddleware, CatalogeController.getByUser);
CatalogeRoute.get("/1c/:uuid_1c", AuthMiddleware, CatalogeController.getUuid);
CatalogeRoute.get("/delete/:id", AuthMiddleware, CatalogeController.setDeleted);


export default CatalogeRoute;