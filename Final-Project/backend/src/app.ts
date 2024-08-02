import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./connection/connection";

dotenv.config();
const app = express();

connection();

// JSON Parsing
app.use(express.json());
app.use(cors());

// Define a route
app.get("/", (req: Request, res: Response) => {
  res.send("Currently on Todo App BE!");
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});