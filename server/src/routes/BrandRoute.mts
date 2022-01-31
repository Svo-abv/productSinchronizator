import { Router } from "express";
import BrandController from "../controllers/BrandController.mjs";
import { CheckRole } from "../middleware/CheckRoleMiddleware.mjs";

const BrandRoute = Router();

BrandRoute.post("/", CheckRole('ADMIN'), BrandController.create);
BrandRoute.get("/:id", BrandController.get);
BrandRoute.get("/1c/:uuid_1c", BrandController.getUuid);
BrandRoute.get("/", BrandController.getAll)

export default BrandRoute;