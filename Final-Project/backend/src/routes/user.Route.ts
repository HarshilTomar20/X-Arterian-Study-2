import User from "../models/userModel";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
const router= express.Router();

router.get("/", (req: Request, res: Response) => {

    res.send("User route - retrieve user data here.");
});

router.post("/register", async (req: Request, res: Response) => {
    const { email , username, password } = req.body;

    if( !email || !username || !password ) {
        return res.status(400).json({
            message: "Missing Required Fields !"
        })
    }

    const existingUser = await User.findOne({ email });
    if(existingUser) {
        return res.status(200).json({
            message: "User with Email Already Exists !"
        })
    }

    // Generate Salt
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(`New hashed Password is: `,{hashedPassword}); 

    const newUser = new User({ email, username, password: hashedPassword});
    await newUser.save();

    return res.status(200).json({
        message: `Sign up Successfull for: ${newUser}`
    })
});

router.post("/signin", async (req: Request, res: Response) => {

    try {
        const user = await User.findOne({ email: req.body.email});

        if(!user) {
            return res.status(400).json({
                message: "User with this Email does not Exist. Kindly Register"
            })
        }

        const isPasswordValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )

        if(!isPasswordValid) {
            return res.status(400).json({
                message: "Incorrect Password. Retry with correct Password !"
            })
        }

        //@ts-ignore
        const { password, ...others } = user._doc;
        return res.status(200).json({ user: others });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

export default router;