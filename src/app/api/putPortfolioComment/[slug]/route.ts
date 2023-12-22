import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../helpers/db";
import portfolioSchema from "../../../../database/portfolioSchema";

type PUTParams = {
  params: {
    slug: string;
  };
};

export async function PUT(req: NextRequest, { params }: PUTParams) {
  await connectDB();
  const { slug } = params;

  try {
    const project = await portfolioSchema.findOne({ slug }).orFail();

    const { comment } = await req.json();

    project.comments.push(comment);

    const result = await project.save();

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
