import { clerkClient } from '@clerk/express';

import dotenv from 'dotenv';
dotenv.config();


//// check if the user is authenticated or not 

export const protectRoute = async (req, res, next) => {
    if (!req.auth.userId) {
        return res.status(401).send("Unauthorized"); // if no user ID in request, send unauthorized response and 'return' to  stop further processing

    }
    next(); // proceed to the next middleware or route handler
}

//// check if the user is admin

export const requireAdmin = async (req, res, next) => {
    try {
        const currentuser = await clerkClient.users.getUser(req.auth.userId); // fetch user details from Clerk using user ID from request
        const isAdmin = process.env.ADMIN_EMAIL === currentuser.primaryEmailAddress?.emailAddress; // check if user's email matches admin email from environment variables 
        if (!isAdmin) {
            return res.status(403).send("Forbidden: Admins only"); // if not admin, send forbidden response and 'return' to stop further processing
        }
        next(); // proceed to the next middleware or route handler


    }
    catch (err) {
        next(err); // pass any errors to the next middleware for handling
    }
}