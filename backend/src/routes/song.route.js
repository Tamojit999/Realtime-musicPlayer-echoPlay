import { Router } from "express"; // import Router from express module to create modular route handlers
import { getAllSongs,getFeaturedSongs,getMadeForYouSongs,getTrendingSongs } from "../controller/song.controller.js";

import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router(); // create a new router instance


//// song routes

router.get("/",protectRoute,requireAdmin,getAllSongs);

router.get("/featured",getFeaturedSongs);// route to get featured songs

router.get("/made-for-you",getMadeForYouSongs);// route to get made for you songs
router.get("/trending",getTrendingSongs);// route to get trending songs


export default router; // export the router to be used in other parts of the application