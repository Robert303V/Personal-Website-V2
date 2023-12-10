import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../helpers/db';
import blogSchema from '../../../../database/blogSchema';

type IParams = {
  params: {
    slug: string;
  };
};

export async function PUT(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();

    // Extract comment from the request body
    const { comment } = await req.json();

    // Add the comment to the blog
    blog.comments.push(comment);

    // Save the updated blog document
    const result = await blog.save();

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json('Blog not found.', { status: 404 });
  }
}