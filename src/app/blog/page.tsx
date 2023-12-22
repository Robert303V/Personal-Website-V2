import Link from "next/link";
import React from "react";

import connectDB from "../../helpers/db";
import BlogModel from "../../database/blogSchema";

import EndFiller from "../../comps/endFiller";
import BlogPreview from "../../comps/blogPreview";

import styles from "./page.module.css";

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
          <h1 className={styles.pageTitle}>Welcome to my Blog!</h1>
          {blogData ? (
            <h4 className={styles.pageTitle}>
              Click on a post to read all about it.
            </h4>
          ) : null}
          <div className={styles.blogPostsOuter}>
            <div className={styles.blogPosts} id="blog-posts">
              {blogData ? (
                blogData.map((blogPostObj) => (
                  <div className={styles.linkOuter} key={blogPostObj.blogNum}>
                    <Link
                      href={"/blog/" + blogPostObj.slug}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className={styles.linkToIndividual}
                        style={{
                          borderBottom:
                            blogPostObj.blogNum != 1
                              ? "1px solid black"
                              : "none",
                        }}
                      >
                        <BlogPreview
                          title={blogPostObj.title}
                          date={blogPostObj.date.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                          image={blogPostObj.image}
                          flip={blogPostObj.blogNum % 2 == 0 ? true : false}
                          end={blogPostObj.blogNum != 1 ? false : true}
                        />
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="blogPostMessage">
                  There was an error loading the blog posts. :(
                </p>
              )}
            </div>
          </div>
        </div>
        <EndFiller />
      </div>
    </>
  );
}
