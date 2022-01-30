import { Router } from "express";
import BrandController from "../controllers/BrandController.mjs";
import { CheckRole } from "../middleware/CheckRoleMiddleware.mjs";

const BrandRoute = Router();

BrandRoute.post("/", CheckRole('ADMIN'), BrandController.create);
BrandRoute.get("/:id", BrandController.get);
BrandRoute.get("/", BrandController.getAll)

export default BrandRoute;