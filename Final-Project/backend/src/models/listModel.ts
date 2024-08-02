import mongoose, { Document, Schema } from "mongoose";


interface IListSchema extends Document {
  title: string;
  body: string;
  user: mongoose.Types.ObjectId[]; // Array of ObjectId references
}

const listSchema: Schema<IListSchema> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true } 
);


const List = mongoose.model<IListSchema>("List", listSchema);
export default List;