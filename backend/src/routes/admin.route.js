import { Router } from "express"; // import Router from express module to create modular route handlers



import { createSong, deleteSong ,createAlbum,deleteAlbum,checkAdmin } from "../controller/admin.controller.js";



import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";


const router = Router(); // create a new router instance



router.use(protectRoute,requireAdmin);// apply authentication and admin check middleware to all routes in this router



//// admin routes

router.post("/songs",createSong); // route to create a new song, protected and requires admin privileges


router.delete("/songs/:id",deleteSong); // route to delete a song by ID, protected and requires admin privileges


router.post("/albums",createAlbum);// route to create a new album, protected and requires admin privileges

router.delete("/albums/:id",deleteAlbum);// route to delete an album by ID, protected and requires admin privileges

router.get("/check",checkAdmin);// route to check if the user is admin, protected and requires admin privileges



export default router; // export the router to be used in other parts of the application