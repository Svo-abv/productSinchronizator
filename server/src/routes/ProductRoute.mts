import { Router } from "express";
import ProductController from "../controllers/ProductController.mjs";
import { AuthMiddleware } from "../middleware/AuthMiddleware.mjs";
import { CheckRole } from "../middleware/CheckRoleMiddleware.mjs";

const ProductRoute = Router();

ProductRoute.post("/", CheckRole('ADMIN'), ProductController.create);
ProductRoute.post("/delete/", AuthMiddleware, ProductController.setDeleted);
ProductRoute.get("/cataloge/:id", AuthMiddleware, ProductController.getByCataloge);
ProductRoute.get("/", AuthMiddleware, ProductController.getAll);
ProductRoute.get("/:id", AuthMiddleware, ProductController.get);
ProductRoute.post("/user/", AuthMiddleware, ProductController.getByUser);
ProductRoute.post("/1c/update/", AuthMiddleware, ProductController.updateData);
ProductRoute.get("/1c/delete/:uuid_1c", AuthMiddleware, ProductController.setDeletedUuid);
ProductRoute.get("/1c/clear/", AuthMiddleware, ProductController.getClearAll);
ProductRoute.get("/1c/:uuid_1c", AuthMiddleware, ProductController.getUuid);
ProductRoute.get("/1c/deleted/:status", AuthMiddleware, ProductController.getAllDeleted);

export default ProductRoute;