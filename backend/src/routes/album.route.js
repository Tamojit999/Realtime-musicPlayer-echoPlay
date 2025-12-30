import { Router } from "express"; // import Router from express module to create modular route handlers
import { getAllAlbums,getAlbumsById } from "../controller/album.controller.js";
const router = Router(); // create a new router instance



//// album routes


router.get("/",getAllAlbums);// route to get all albums
router.get("/:albumId",getAlbumsById);// route to get album by ID



export default router; // export the router to be used in other parts of the application