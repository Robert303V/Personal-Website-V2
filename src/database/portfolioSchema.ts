import mongoose, { Schema } from "mongoose";

import CommentType from "../types/commentType";
import PortfolioType from "../types/portfolioType";

const subSchema = new Schema<CommentType>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
});

const portfolioSchema = new Schema<PortfolioType>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  linkText: { type: String, required: true },
  desc: { type: String, required: true },
  newtab: { type: Boolean, required: true },
  flip: { type: Boolean, required: true },
  end: { type: Boolean, required: true },
  portfolioNum: { type: Number, required: true },
  slug: { type: String, required: true },
  comments: { type: [subSchema] },
  content: { type: [String] },
  date: { type: String, required: true },
});

const PortfolioModel =
  mongoose.models["portfolios"] ||
  mongoose.model("portfolios", portfolioSchema);

export default PortfolioModel;
