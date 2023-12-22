import Link from "next/link";

import PortfolioItem from "../../../comps/portfolioItem";
import EndFiller from "../../../comps/endFiller";
import CommentsSection from "../../../comps/commentsSection";
import AddCommentSection from "../../../comps/addCommentSection";

import getProject from "../../../helpers/getProject";

import styles from "../page.module.css";

async function Project({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    return (
      <div className={styles.projectSection}>
        <div className={styles.projectContainer}>
          <h4>
            <Link href="/portfolio">Click To Go Back To My Portfolio</Link>
          </h4>
          <p>This Project Does Not Exist</p>
        </div>
        <EndFiller />
      </div>
    );
  }

  return (
    <>
      <div className={styles.projectSection}>
        <div className={styles.projectContainer}>
          <h4>
            <Link href="/portfolio">Click To Go Back To My Portfolio</Link>
          </h4>
          <div style={{ borderBottom: "1px solid black" }}>
            {project ? (
              <>
                <PortfolioItem
                  title={project.title}
                  image={project.image}
                  link={project.link}
                  linkText={project.linkText}
                  desc={project.desc}
                  newtab={project.newtab}
                  flip={project.flip}
                  end={true}
                  date={project.date}
                  key={project.title}
                />
                {project.content.map((contentStr: string) => (
                  <div className={styles.contentMessageOuter} key={contentStr}>
                    <p className={styles.contentMessage}>{contentStr}</p>
                  </div>
                ))}
              </>
            ) : (
              <p>did not found projec</p>
            )}
          </div>
          <h2 className={styles.commentSectionHeader}>Comments Section</h2>
          <AddCommentSection
            params={{ slug: params.slug, type: "portfolio" }}
          />
          {project.comments ? (
            <>
              <CommentsSection comments={project.comments} />
            </>
          ) : null}
        </div>
        <EndFiller />
      </div>
    </>
  );
}

export default Project;
