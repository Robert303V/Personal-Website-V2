import mongoose, { Schema } from "mongoose";

import PortfolioType from "../types/portfolioType";

const portfolioSchema = new Schema<PortfolioType>({
    title: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    linkText: { type: String, required: true },
    desc: { type: String, required: true },
    newtab: { type: Boolean, required: true },
    flip: { type: Boolean, required: true },
    end: { type: Boolean, required: true },
    double: { type: Boolean, required: true },
    t2: { type: String, required: true },
    d2: { type: String, required: true },
    portfolioNum: { type: Number, required: true},
    slug: { type: String, required: true },
});

const PortfolioModel = mongoose.models["portfolios"] || mongoose.model("portfolios", portfolioSchema);

export default PortfolioModel;