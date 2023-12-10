import Link from "next/link";
import React from "react";

import styles from "./page.module.css";

import connectDB from "../../helpers/db";
import BlogModel from "../../database/blogSchema";

import EndFiller from "../../comps/endFiller";

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await BlogModel.find({}).sort({ blogNum: -1 }).orFail();
    return blogs;
  } catch (err) {
    console.error("Error Getting Data From DB: ", err);
    return null;
  }
}

export default async function Blog() {
  const blogData = await getBlogs();

  return (
    <>
      <div className={styles.blog}>
        <div className={styles.blogInnerContainer}>
          <h1 className={styles.pageTitle}>Welcome to the Blog!</h1>
          <div className={styles.blogPosts} id="blog-posts">
            {blogData ? (
              blogData.map((blogPostObj) => (
                <div key={blogPostObj.blogNum}>
                  <Link
                    href={"/blog/" + blogPostObj.slug}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className={styles.blogPost}>
                      <div className={styles.blogPostTitleDate}>
                        <h2 className="blogPostTitle">{blogPostObj.title}</h2>
                        <p className="blogPostDate">
                          {blogPostObj.date.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <p className="blogPostMessage">
                        {blogPostObj.description}
                      </p>
                    </div>
                  </Link>
                  {blogPostObj.blogNum != 1 ? (
                    <h1 className={styles.blogPostTilda}>~</h1>
                  ) : null}
                </div>
              ))
            ) : (
              <p className="blogPostMessage">There are no blog posts yet</p>
            )}
          </div>
        </div>
        <EndFiller />
      </div>
    </>
  );
}
