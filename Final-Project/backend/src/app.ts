import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./connection/connection";
import userRouter from "./routes/user.Route";
import historyRouter from "./routes/history.Route";
import listRouter from "./routes/list.Route";

dotenv.config();
const app = express();

connection();

// JSON Parsing
app.use(express.json());
app.use(cors());

// Define a route for the root
app.get("/", (req: Request, res: Response) => {
  res.send("Currently on Todo App BE!");
});

app.use("/api/user", userRouter);

app.use("/api/history", historyRouter);

app.use("/api/list", listRouter);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});