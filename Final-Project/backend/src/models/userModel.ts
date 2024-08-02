import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  email: string;
  username?: string; 
  password: string;
  list: mongoose.Types.ObjectId[]; // Array of ObjectId references
}

const userSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  list: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;