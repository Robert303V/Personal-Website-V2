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
          {newPortfolioData?.map((portObj) => (
            <Link
              href={"/portfolio/" + portObj.slug}
              style={{ textDecoration: "none", color: "inherit" }}
              key={portObj.title}
            >
              <PortfolioItem
                title={portObj.title}
                image={portObj.image}
                link={portObj.link}
                linkText={portObj.linkText}
                desc={portObj.desc}
                newtab={portObj.newtab}
                flip={portObj.flip}
                end={portObj.end}
                double={portObj.double}
                t2={portObj.t2}
                d2={portObj.d2}
              />
            </Link>
          ))}
        </div>
        <EndFiller />
      </div>
    </>
  );
}

/*
async function uploadPortfolio() {
  await connectDB();

  try {
    const result = await PortfolioModel.create(jsonData as PortfolioType[]);
    console.log(result);

  } catch (error) {
    console.error("Error adding documents:", error);
  }
}
*/
