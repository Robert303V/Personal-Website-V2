import CommentType from "./commentType";

type BlogType = {
  title: string;
  date: Date;
  description: string;
  slug: string;
  image: string;
  comments: CommentType[];
  blogNum: number;
};

export default BlogType;
