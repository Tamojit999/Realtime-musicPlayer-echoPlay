import { Router } from "express";
import { authCallback } from "../controller/auth.controller.js"; // import auth controller function
const route=Router();
route.post("/callback",authCallback);

export default route;