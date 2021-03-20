import { Router } from "express";

import sessionRoutes from "./session.routes";
import userRoutes from "./user.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/", sessionRoutes);

export default routes;
