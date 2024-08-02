import User from "../models/userModel";
import express, { Request, Response } from "express";
const router= express.Router();

router.get("/", (req: Request, res: Response) => {
    
    res.send("User route - retrieve user data here.");
});

export default router;