import Link from "next/link";

import PortfolioItem from "../../comps/portfolioItem";
import EndFiller from "../../comps/endFiller";

import styles from "./page.module.css";
import globals from "../globals.module.css";

import connectDB from "../../helpers/db";
import PortfolioModel from "../../database/portfolioSchema";

async function getPortfolios() {
  await connectDB();

  try {
    const portfolios = await PortfolioModel.find({})
      .sort({ portfolioNum: 1 })
      .orFail();
    return portfolios;
  } catch (err) {
    console.error("Error Getting Data From DB: ", err);
    return null;
  }
}

export default async function Portfolio() {
  const newPortfolioData = await getPortfolios();

  return (
    <>
      <div className={styles.projectSection}>
        <div className={styles.projectContainer}>
          <h1 className={globals.pageTitle}>Welcome to My Portfolio!</h1>
          {newPortfolioData ? (
            <h4 className={globals.pageTitle}>
              Click on a project to find out more, or on the link to view it!
            </h4>
          ) : null}
          {newPortfolioData ? (
            newPortfolioData.map((portObj) => (
              <Link
                href={"/portfolio/" + portObj.slug}
                style={{ textDecoration: "none", color: "inherit" }}
                key={portObj.title}
              >
                <div className={styles.linkToIndividual}>
                  <PortfolioItem
                    title={portObj.title}
                    image={portObj.image}
                    link={portObj.link}
                    linkText={portObj.linkText}
                    desc={portObj.desc}
                    newtab={portObj.newtab}
                    flip={portObj.flip}
                    end={portObj.end}
                    date={portObj.date}
                  />
                </div>
              </Link>
            ))
          ) : (
            <p>There was an error loading the portfolio projects. :(</p>
          )}
        </div>
        <EndFiller />
      </div>
    </>
  );
}
