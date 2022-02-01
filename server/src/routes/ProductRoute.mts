import { Router } from "express";
import ProductController from "../controllers/ProductController.mjs";
import { AuthMiddleware } from "../middleware/AuthMiddleware.mjs";
import { CheckRole } from "../middleware/CheckRoleMiddleware.mjs";

const ProductRoute = Router();

ProductRoute.post("/", CheckRole('ADMIN'), ProductController.create);
ProductRoute.get("/delete/:id", AuthMiddleware, ProductController.setDeleted);
ProductRoute.get("/", ProductController.getAll);
ProductRoute.get("/:id", ProductController.get);
ProductRoute.get("/brend/:id", ProductController.getByBrend);
ProductRoute.get("/cataloge/:id", ProductController.getByCataloge);
ProductRoute.get("/1c/:uuid_1c", ProductController.getUuid);


export default ProductRoute;