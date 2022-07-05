import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Vera Bradley</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              // title="Veraverse is a new metaverse concept space by Vera Bradley."
              description="Veraverse is a new metaverse concept space by Vera Bradley. The Veraverse bridges Vera Bradley’s physical and digital worlds, intersecting past, present and future. In 1982, amidst a sea of boring black luggage, Vera Bradley co-founders, Barbara Bradley Baekgaard and Patricia Miller pioneered a world of colorful travel."
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2_1__g_R6buc0B.11?ik-sdk-version=javascript-1.4.3&updatedAt=1657058814808"
              }
              alt="Disconaut NFT"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              // title="Veraverse is a new metaverse concept space by Vera Bradley."
              description="Over the last 40 years, they have created a community woven by the strong spirit and commitment of women supporting women. As we journey into the Veraverse, we are connected by this common thread, a shared love of making the world a bit brighter each day. Dreamers and doers, creatives and curators, planners and protagonists, are connected in our colors and powered by our prints. It's what brings us together, and helps you stand out."
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2.58.34_PM_QDaUcmL8E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657058813934"
              }
              alt="Disconaut NFT"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              // title="Metaverse Concerts and Live Events"
              description="Together, we are Vera Bradley, and we look forward to bringing our colorful world to life in Web3, continuing to pioneer new opportunities for women today, tomorrow and for years to come.Virtual Music Festivals, Live Concerts and Exclusive After-parties."
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2.58.20_PM_L4c6bKMNc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657058813725"
              }
              alt="Disconaut NFT"
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <h2 className={classes.title}> </h2>
        </GridContainer>
      </div>
    </div>
  );
}
