import History from "../models/historyModel";
import User from "../models/userModel";
import List from "../models/listModel";
import express, { Request, Response } from "express";

const router= express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("History route - retrieve history data here.");
});

router.get("/historyTask/:id", async (req, res) => {

    const list = await History.find({ user: req.params.id }).sort({
      createdAt: -1,
    });

    if (list.length !== 0) {
        return res.status(200).json({ 
            list 
        });
    } else {
        return res.status(200).json({ 
            message: "No Tasks" 
        });
    }
  });
  
router.post("/historyTask/:id", async (req, res) => {

    try {
        const listItemId = req.params.id;
        const { id } = req.body;

        const listItem = await List.findById( listItemId ).populate("user");

        if (!listItem) {
            return res.status(404).json({ 
                message: "List item not found" 
            });
        }

        const historyItem = new History({
            title: listItem.title,
            body: listItem.body,
            user: id, 
            createdAt: new Date(),
        });

        await historyItem.save();

        const existingUser = await User.findByIdAndUpdate(listItemId, {
            $pull: { 
                list: req.params.id 
            },
        });

        await List.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            message: "Task moved to history and deleted from list successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            message: "Internal server error" 
        });
    }
});
  
router.delete("/deleteHistoryTask/:id", async (req, res) => {
    try {

        await History.findByIdAndDelete(req.params.id)
        return res.status(200).json({ 
            message: "Task Deleted from History" 
        });
        
    } catch (error) {
        console.log(error);
    }
});
  
export default router;