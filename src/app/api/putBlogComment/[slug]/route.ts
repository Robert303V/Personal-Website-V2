import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../helpers/db";
import blogSchema from "../../../../database/blogSchema";

type PUTParams = {
  params: {
    slug: string;
  };
};

export async function PUT(req: NextRequest, { params }: PUTParams) {
  await connectDB();
  const { slug } = params;

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();

    const { comment } = await req.json();

    blog.comments.push(comment);

    const result = await blog.save();

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
