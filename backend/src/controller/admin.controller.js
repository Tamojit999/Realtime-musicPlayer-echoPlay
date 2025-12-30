

//// creating song 

import { Album } from "../model/album.model.js"; // import Album model
import { Song } from "../model/song.model.js"; // import Song model


////uploading to cloudinary

import cloudinary from "../lib/cloudinary.js";

const uploadToCloudinary=async(file)=>
{
    try{
     const result=await cloudinary.uploader.upload(file.tempFilePath,resourse_type='auto'); // upload file to Cloudinary with automatic resource type detection
     return result.secure_url; // return the secure URL of the uploaded file
    }
    catch(err)
    {
        console.log("Cloudinary upload error:",err);
        throw new Error("cloudinary uploading error"); // propagate any errors to the caller
    }
}



export const createSong = async (req, res,next) => { // define an asynchronous function to create a new song
    try {
        if (!req.files || !req.files.audioFile || !req.files.imageFile) {// check if audio and image files are provided 
            
            
            return res.status(400).json({ message: "Audio file and Image file are required" });

        }
        const {title,artist,albumId,duration}=req.body; // extract song details from request body
        const audioFile=req.files.audioFile; // get the uploaded audio file
        const imageFile=req.files.imageFile; // get the uploaded image file

        const audioUrl= await uploadToCloudinary(audioFile); // upload audio file to Cloudinary and get the URL
        const imageUrl= await uploadToCloudinary(imageFile); // upload image file to Cloudinary and get the URL

        const song = new Song({ // create a new Song instance with provided details
            title,
            artist,
            albumId: albumId || null,
            duration,
            audioUrl,
            imageUrl,
        });
        await song.save(); // save the new song to the database
        

        if(albumId) // if an albumId is provided, update the corresponding album to include the new song
        {
            await Album.findByIdAndUpdate(albumId,{ // find the album by its ID and update it
                $push:{songs:song._id} // add the new song's ID to the album's songs array
            });
        }
    }
    catch (err) {
        next(err); // pass any errors to the next middleware for handling
    }

};
