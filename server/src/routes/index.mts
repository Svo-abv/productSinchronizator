import { Router } from "express";
import BrandRoute from "./BrandRoute.mjs";
import CatalogeRoute from "./CatalogeRoute.mjs";
import ProductRoute from "./ProductRoute.mjs";
import UserRoute from "./UserRoute.mjs";

const router = Router();

router.use("/user", UserRoute);
router.use("/brand", BrandRoute);
router.use("/cataloge", CatalogeRoute);
router.use("/product", ProductRoute);



export default router;