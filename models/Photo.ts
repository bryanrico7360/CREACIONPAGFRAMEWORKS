import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPhoto extends Document {
  title: string;
  description: string;
  imageUrl: string;
}

const PhotoSchema: Schema<IPhoto> = new Schema({
  title: { type: String },
  description: { type: String },
  imageUrl: { type: String },
});

const Photo: Model<IPhoto> =
  mongoose.models.Photo || mongoose.model<IPhoto>("Photo", PhotoSchema);

export default Photo;
