import CommentType from "./commentType";

type PortfolioType = {
  title: string;
  image: string;
  link: string;
  linkText: string;
  desc: string;
  newtab: boolean;
  flip: boolean;
  end: boolean;
  portfolioNum: number;
  slug: string;
  comments: CommentType[];
  content: string[];
  date: string;
};

export default PortfolioType;
