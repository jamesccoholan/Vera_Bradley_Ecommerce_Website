import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/roadmapStyle";

const useStyles = makeStyles(styles);

const roadmapItems = [
  {
    phase: 1,
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-06-27_at_3.41.55_PM_kGbZLfnvs9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656369758022",
    items: [
      {
        title: "Limited Edition Physicals",
        description:
          "Limited Edition Physicals In addition to the Heritage Pass providing Allow List access to the 1982 Collection, each Heritage Pass will come with a limited-edition Jilly bag, created exclusively for this inaugural Vera Bradley NFT drop. These very special Jilly bags are available in four unique archived Vera Bradley prints, and to drive excitement, purchasers of the Heritage Pass token will have to wait until the bag arrives to discover which Jilly bag pattern they receive!",
      },
    ],
  },
  {
    phase: 2,
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-06-27_at_3.41.59_PM_mBP4M6AxQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656369757757",
    items: [
      {
        title: "Charity",
        description:
          "Through VB Cares, 100% of proceeds from the 1982 Collection will be donated to The Vera Bradley Foundation for Breast Cancer, which has already made $37.5 million in contributions (to date) to support critical advancements in breast cancer research.",
      },
    ],
  },
  {
    phase: 3,
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-06-27_at_3.42.11_PM_239UtY-Dx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656369757639",
    items: [
      {
        title: "Giveaways",
        description:
          "Amongst its many treasures, the Veraverse is filled with unique experiences and giveaways to be revealed throughout the Veraverse journey.",
      },
    ],
  },
];

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <Fade duration={1000} bottom cascade>
            <div>
              <h1 className={classes.title}>Roadmap</h1>
              <h4 className={classes.description}>
                {
                  "As we travel into the Veraverse, our #1 priority is creating an exciting and rewarding experience for Vera Bradley’s loyal customers and new NFT collectors. Rooted in Vera Bradley’s brand ethos and culture, the Veraverse is committed to merging the physical and digital worlds through innovative NFT collections, limited-edition product offerings and special giveaways accessible only in the Vera Verse. This Roadmap lays the framework for what our team has in store, with surprises and delights to be revealed throughout the journey."
                }
              </h4>
            </div>
          </Fade>
          <div className={classes.roadmapContainer}>
            {roadmapItems.map((r) => (
              <Fade duration={1000} bottom cascade key={r.phase}>
                <div className={classes.roadmapSectionContainer}>
                  <img
                    src={r.img}
                    alt="Disconaut Helmet"
                    className={classes.roadmapDot}
                  />
                  <div className={classes.roadmapSection}>
                    <h1 className={classes.roadmapPhase}>{r.phase}</h1>
                    {r.items.map((item) => (
                      <div key={item.title}>
                        <h3 className={classes.roadmapItemTitle}>
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className={classes.roadmapDivider} />
                </div>
              </Fade>
            ))}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
