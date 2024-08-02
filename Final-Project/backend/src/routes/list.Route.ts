import List from "../models/listModel";
import express, { Request, Response } from "express";

const router= express.Router();

router.get("/", (req: Request, res: Response) => {
    
    res.send("List route - retrieve list data here.");
});

export default router;