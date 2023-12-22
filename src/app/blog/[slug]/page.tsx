import Link from "next/link";

import EndFiller from "../../../comps/endFiller";
import AddCommentSection from "../../../comps/addCommentSection";
import CommentsSection from "../../../comps/commentsSection";
import BlogPreview from "../../../comps/blogPreview";

import getBlog from "../../../helpers/getBlog";

import styles from "../page.module.css";

async function BlogPost({ params }: { params: { slug: string } }) {
  let blogPost = await getBlog(params.slug);

  if (!blogPost) {
    return (
      <div className={styles.blog}>
        <div className={styles.blogInnerContainer}>
          <h4>
            <Link href="/blog">Click To Go Back To My Blog</Link>
          </h4>
          <p className="blogPostMessage">This Blog Post Does Not Exist</p>
        </div>
        <EndFiller />
      </div>
    );
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
          <Link href="/blog">Click To Go Back To My Blog</Link>
        </h4>
        <div
          className={styles.blogPostsOuter}
          style={{ borderBottom: "1px solid black" }}
        >
          <div className={styles.blogPosts} id="blog-posts">
            <BlogPreview
              title={blogPost.title}
              date={dateString}
              image={blogPost.image}
              flip={blogPost.blogNum % 2 == 0 ? true : false}
              end={true}
            />
            {blogPost.content.map((contentStr: string) => (
              <div className={styles.blogPostMessageOuter} key={contentStr}>
                <p className={styles.blogPostMessage}>{contentStr}</p>
              </div>
            ))}
          </div>
        </div>
        <h2 className={styles.commentSectionHeader}>Comments Section</h2>
        <AddCommentSection params={{ slug: params.slug, type: "blog" }} />
        {blogPost.comments ? (
          <>
            <CommentsSection comments={blogPost.comments} />
          </>
        ) : null}
      </div>
      <EndFiller />
    </div>
  );
}

export default BlogPost;

/*

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
            </div>



*/
