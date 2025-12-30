import { Song } from "../model/song.model.js"; // import the Song model to interact with the songs collection in the database


//get all songs
export const getAllSongs = async (req, res, next) => {
    try {

        //-1 means descending order
        const songs = await Song.find().sort({ createdAt: -1 });// fetch all songs from the database sorted by creation date in descending order
        res.status(200).json(songs);
    } catch (err) {
        next(err);
    }
}

//get six random songs for "featured" section
export const getFeaturedSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 6 } },
            {
                $project: {
                    _id:1,
                    title: 1, 
                    artist: 1, 
                    imageUrl: 1, 
                    audioUrl: 1
                }
            }]);// fetch 6 random songs from the database using aggregation pipeline and project only specific fields
        res.status(200).json(songs);


    } catch (err) {
        next(err);
    }
}

//get four random songs for "made for you" section
export const getMadeForYouSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 4 } },
            {
                $project: {
                    _id:1,
                    title: 1, 
                    artist: 1, 
                    imageUrl: 1, 
                    audioUrl: 1
                }
            }]);// fetch 4 random songs from the database using aggregation pipeline and project only specific fields
        res.status(200).json(songs);


    } catch (err) {
        next(err);
    }
}


//get trending songs 

export const getTrendingSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 6 } },
            {
                $project: {
                    _id:1,
                    title: 1, 
                    artist: 1, 
                    imageUrl: 1, 
                    audioUrl: 1
                }
            }]);// fetch 6 random songs from the database using aggregation pipeline and project only specific fields
        res.status(200).json(songs);


    } catch (err) {
        next(err);
    }
}