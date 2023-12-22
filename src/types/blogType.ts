import CommentType from "./commentType";

type BlogType = {
  title: string;
  date: Date;
  slug: string;
  image: string;
  comments: CommentType[];
  content: string[];
  blogNum: number;
};

export default BlogType;
