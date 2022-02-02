import { Router } from "express";
import ProductController from "../controllers/ProductController.mjs";
import { AuthMiddleware } from "../middleware/AuthMiddleware.mjs";
import { CheckRole } from "../middleware/CheckRoleMiddleware.mjs";

const ProductRoute = Router();

ProductRoute.post("/", CheckRole('ADMIN'), ProductController.create);
ProductRoute.post("/delete/", AuthMiddleware, ProductController.setDeleted);
ProductRoute.get("/", AuthMiddleware, ProductController.getAll);
ProductRoute.get("/:id", AuthMiddleware, ProductController.get);
ProductRoute.post("/user/", AuthMiddleware, ProductController.getByUser);
ProductRoute.get("/cataloge/:id", AuthMiddleware, ProductController.getByCataloge);
ProductRoute.get("/1c/:uuid_1c", AuthMiddleware, ProductController.getUuid);


export default ProductRoute;