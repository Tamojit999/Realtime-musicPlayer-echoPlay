import { Router } from "express"; // import Router from express module to create modular route handlers
import { createSong, deleteSong } from "../controllers/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
const router = Router(); // create a new router instance

router.post("/songs",protectRoute,requireAdmin,createSong); // define a GET route for /admin/songs with authentication and admin check


router.delete("/songs/:id",protectRoute,requireAdmin,deleteSong);

export default router; // export the router to be used in other parts of the application