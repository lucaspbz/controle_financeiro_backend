import { Router } from "express";

import docRoutes from "./doc.router";
import sessionRoutes from "./session.routes";
import userRoutes from "./user.routes";

const routes = Router();

routes.use("/doc", docRoutes);
routes.use("/user", userRoutes);
routes.use("/", sessionRoutes);

export default routes;
