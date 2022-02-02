import { Router } from "express";
import BrandController from "../controllers/BrandController.mjs";
import { AuthMiddleware } from "../middleware/AuthMiddleware.mjs";
import { CheckRole } from "../middleware/CheckRoleMiddleware.mjs";

const BrandRoute = Router();

BrandRoute.post("/", CheckRole('ADMIN'), BrandController.create);
BrandRoute.post("/user", AuthMiddleware, BrandController.getByUser);
BrandRoute.get("/:id", AuthMiddleware, BrandController.get);
BrandRoute.get("/1c/:uuid_1c", AuthMiddleware, BrandController.getUuid);
BrandRoute.get("/", AuthMiddleware, BrandController.getAll)

export default BrandRoute;