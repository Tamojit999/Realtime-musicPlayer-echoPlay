import { Song } from "../model/song.model.js";
import { Album } from "../model/album.model.js";
import { User } from "../model/user.model.js";


export const getStats=async(req,res,next)=>
{
   try{
   
    const [totalSongs,totalAlbums,totalUser,uniqueArtists]= await Promise.all([
        Song.countDocuments(),
        Album.countDocuments(),
        User.countDocuments(),
        Song.aggregate([
            {
                $unionWith:{
                    coll:"albums",
                    pipeline:[]
                        
                }

            },
            {
                $group:{
                    _id:"artist",
                }

            },
            {
                $count:"count"
            }
        ]),
    ]); // count total number of songs, albums, and users in the database and wait for all promises to resolve then destructure the results into respective variables
    res.status(200).json({
        totalSongs,
        totalAlbums,
        totalUser,
        totalArtists:uniqueArtists[0]?.count||0,
    }); // send the counts as JSON response


   }
    catch(err){
        next(err);  
    }

};