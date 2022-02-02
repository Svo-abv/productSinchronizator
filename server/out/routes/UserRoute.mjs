import { Router } from "express";
import UserController from "../controllers/UserController.mjs";
import { AuthMiddleware } from "../middleware/AuthMiddleware.mjs";
const UserRoute = Router();
UserRoute.post("/registration", UserController.registration);
UserRoute.post("/login", UserController.login);
UserRoute.get("/auth", AuthMiddleware, UserController.checkAuth);
export default UserRoute;
