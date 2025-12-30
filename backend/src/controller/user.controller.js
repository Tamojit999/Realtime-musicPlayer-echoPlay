import {User} from "../model/user.model.js";

export const getAllUsers=async(req,res,next)=>
{
    try{
        const currentUserId=req.auth.userId; // get the curruser clerkid this possible because protectRoute and the clerk middleware(index.js)  are used in the user.route.js before this controller function is called  
        const users=await User.find({clerkId:{$ne:currentUserId}}); // fetch all users except the current user from the database
        res.status(200).json(users);
    }catch(err)
    {
        next(err);
    }
}