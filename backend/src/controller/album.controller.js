//// to handle album-related operations

import { Album } from "../model/album.model.js"; // import Album model

export const getAllAlbums = async (req, res,next) => { // controller function to get all albums
    try{
    const albums=await Album.find();// fetch all albums from the database
    res.status(200).json(albums);// send the albums as JSON response
    }catch(err)
    {
        next(err);
    }
}
export const getAlbumsById = async (req, res) => {// controller function to get album by ID
    try{
        const {albumId}=req.params;// extract albumId from request parameters
        const album=await Album.findById(albumId).populate("songs"); // populate the songs field with actual song documents

        if(!album)// if album not found, send 404 response
        {
            return res.status(404).json({message:"Album not found"});
        }

        res.status(200).json(album);// send the album as JSON response

    }catch(err)
    {
        next(err);
    }
}