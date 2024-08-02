import List from "../models/listModel";
import User from "../models/userModel";
import express, { Request, Response } from "express";

const router= express.Router();

router.get("/", (req: Request, res: Response) => {
    
    return res.send("List route - retrieve list data here.");
});

router.post("/addTask", async (req, res)=> {
    try {
        const {title, body, id} = req.body;
        const existingUser = await User.findById(id);

        if(existingUser) {
            const list: any = new List({
                title,
                body,
                user: existingUser
            })

            await list.save();
            res.status(200).json({
                message: "Task created successfully",
                list
            })

            existingUser.list.push(list);
            existingUser.save();
        }
    } catch (error) {
        
    }
})

router.put("/updateTask/:id", async (req, res) => {
    try {
        const { title, body } = req.body;
        const list = await List.findByIdAndUpdate(req.params.id, {
            title,
            body
        });

        list?.save();
        return res.status(200).json({
            message: "Task Updated Successfully !"
        })

    } catch (error) {
        console.log(error);
    }
})

router.delete("/deleteTask/:id", async (req, res)=> {
    try {
        const { id } = req.body;
        const existingUser = await User.findByIdAndUpdate(id, {
            $pull: { 
                list: req.params.id 
            }
        });
        
        if(existingUser) {
            await List.findByIdAndDelete( req.params.id);
            return res.status(200).json({
                message: "Task Deleted !"
            })
        };

    } catch (error) {
        console.log(error);
    }
})

router.get("/getTasks/:id", async (req, res)=> {
    try {
        const list = await List.find({
            user: req.params.id
        }).sort({
            createdAt: -1
        })
    
        if(list.length !== 0) {
            res.status(200).json({
                list
            })
        } else {
            res.status(400).json({ message: "No Tasks Found" });
        }
    
    } catch (error) {
        console.log(error);
    }
})

export default router;