import mongoose, { Document, Schema } from "mongoose";

interface IHistorySchema extends Document {
  title: string;
  body: string;
  user: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const historySchema: Schema<IHistorySchema> = new Schema(
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
    createdAt: {
      type: Date,
      expires: 604800,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const History = mongoose.model<IHistorySchema>("List", historySchema);
export default History;