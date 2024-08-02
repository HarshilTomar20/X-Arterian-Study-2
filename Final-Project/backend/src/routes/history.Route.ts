import History from "../models/historyModel";
import express, { Request, Response } from "express";

const router= express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("History route - retrieve history data here.");
});

export default router;