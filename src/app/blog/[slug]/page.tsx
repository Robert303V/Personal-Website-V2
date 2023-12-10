import Link from "next/link";
import Image from "next/image";

import farq from "../../../../public/blog/farquaad.png";
import huh from "../../../../public/blog/huh.png";
import barry from "../../../../public/blog/barry.png";

import EndFiller from "../../../comps/endFiller";
import BlogComment from "../../../comps/blogComment";
import AddCommentSection from "../../../comps/addCommentSection";

import getBlog from "../../../helpers/getBlog";
import CommentType from "../../../types/commentType";

import styles from "../page.module.css";

async function BlogPost({ params }: { params: { slug: string } }) {
  let blogPost = await getBlog(params.slug);

  const updateBlogPost = async () => {
    //blogPost = await getBlogAPI(params.slug);
  };

  if (!blogPost) {
    return (
      <div className={styles.blog}>
        <div className={styles.blogInnerContainer}>
          <h4>
            <Link href="/blog">Click To Go Back To Blog</Link>
          </h4>
          <p className="blogPostMessage">This Blog Post Does Not Exist</p>
        </div>
        <EndFiller />
      </div>
    );
  }

  let image = farq;
  if (blogPost.image == "huh") {
    image = huh;
  }
  if (blogPost.image == "barry") {
    image = barry;
  }
  let dateString = new Date(blogPost.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.blog}>
      <div className={styles.blogInnerContainer}>
        <h4>
          <Link href="/blog">Click To Go Back To Blog</Link>
        </h4>
        <div className={styles.blogPosts} id="blog-posts">
          <div className={styles.blogPostNoClick}>
            <div className={styles.blogPostTitleDate}>
              <h2 className="blogPostTitle">{blogPost.title}</h2>
              <p className="blogPostDate">{dateString}</p>
            </div>
            <p className="blogPostMessage">{blogPost.description}</p>
            <Image
              className={styles.aboutImage}
              src={image}
              alt="My Headshot"
              width={300}
              height={300}
            />

            <AddCommentSection params={{ slug: params.slug }} />

            {blogPost.comments
              ? blogPost.comments.map((blogCommentObj: CommentType) => (
                  <BlogComment
                    user={blogCommentObj.user}
                    comment={blogCommentObj.comment}
                    date={new Date(blogCommentObj.date)}
                    key={blogCommentObj.user + String(blogCommentObj.date)}
                  />
                ))
              : null}
              
          </div>
        </div>
      </div>
      <EndFiller />
    </div>
  );
}

export default BlogPost;

/*

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blogPost = blogData.find((post) => post.slug === slug);

  if (!blogPost) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.date}</p>
      <p>{blogPost.message}</p>
    </div>
  );
};

*/
