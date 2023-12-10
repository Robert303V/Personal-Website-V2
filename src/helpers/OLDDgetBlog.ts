/*import connectDB from "./db";
import blogSchema from "../database/blogSchema";

async function GetBlog(slug: string) {
  await connectDB();

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return blog;
  } catch (err) {
    console.error("Error Getting Data From DB: ", err);
    return null;
  }
}

export default GetBlog;*/
