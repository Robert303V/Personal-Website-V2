import Link from "next/link";

import PortfolioItem from "../../../comps/portfolioItem";
import EndFiller from "../../../comps/endFiller";

import connectDB from "../../../helpers/db";
import PortfolioModel from "../../../database/portfolioSchema";

import styles from "../page.module.css";
import globals from "../../globals.module.css";

async function getProject(slug: string) {
  await connectDB();

  try {
    const project = await PortfolioModel.findOne({ slug }).orFail();
    return project;
  } catch (err) {
    console.error("Error Getting Data From DB: ", err);
    return null;
  }
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  return (
    <>
      <div className={styles.projectSection}>
        <div className={styles.projectContainer}>
          <h1 className={globals.pageTitle}>{project.title}</h1>
          <h4>
            <Link href="/portfolio">Click To Go Back To My Portfolio</Link>
          </h4>
          {project ? (
            <PortfolioItem
              title={""}
              image={project.image}
              link={project.link}
              linkText={project.linkText}
              desc={project.desc}
              newtab={project.newtab}
              flip={project.flip}
              end={true}
              double={project.double}
              t2={project.t2}
              d2={project.d2}
              key={project.title}
            />
          ) : (
            <p>did not found projec</p>
          )}
        </div>
        <EndFiller />
      </div>
    </>
  );
}
