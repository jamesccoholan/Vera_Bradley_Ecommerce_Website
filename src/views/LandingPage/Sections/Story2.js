import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/storyStyle.js";

const useStyles = makeStyles(styles);

export default function Story2() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade duration={2000} bottom cascade>
        <GridContainer justify="center">
          <h1 className={classes.title}>Vera Bradley Cares</h1>
          <br />
          <GridItem xs={12} sm={10} md={10} className={classes.sectionArea}>
            <GridItem xs={12} sm={8} md={6}>
              <h4 className={classes.description}>
                {
                  "At Vera Bradley, we care. We care about our associates, our customers and about creating brighter, more joyful lives for girls and women everywhere."
                }
              </h4>
              <h4 className={classes.description}>
                {
                  "Together, we have built a culture of hope around breast cancer. We have helped school children here at home and around the world. We have uplifted local organizations and built better communities together. And most recently, we have made new commitments to inclusivity and sustainability. Caring is at our core and a big part of our promise, especially as we journey into future."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2_1__g_R6buc0B.11?ik-sdk-version=javascript-1.4.3&updatedAt=1657058814808"
                }
                alt="Disconaut Scene"
              />
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2.23.36_PM_GszudZM_Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657058811330"
                }
                alt="Gathering Scene"
              />
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <h2>Vera Bradley Foundation for Breast Cancer</h2>
              <h4
                className={classNames(
                  classes.description,
                  classes.descriptionRight
                )}
              >
                {
                  "100% of Vera Bradley’s Primary and Secondary sales proceeds of the 1982 Collection will be donated to the Vera Bradley Foundation for Breast Cancer."
                }
              </h4>
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={8} md={6}>
              <h2>Built Upon Women Supporting Women</h2>
              <h4 className={classes.description}>
                {
                  "Fun, creative, beautiful and full of life, Mary Sloan was one of the first Vera Bradley sales representatives and a mother to two daughters and a son. She was a longtime friend to Vera Bradley Co-founders Barbara Bradley Baekgaard and Patricia Miller. Mary's vibrant life was cut short by breast cancer in the early 1990s. In response, in 1993, Barbara and Patricia committed to funding breast cancer research through a portion of Vera Bradley’s profits. They established the Vera Bradley Foundation for Breast Cancer in 1998 to provide a structure for their efforts and to raise additional funds."
                }
              </h4>
              <br />
              <h4 className={classes.description}>
                {
                  "Today, the Foundation’s mission is woven into the fabric of Vera Bradley and is part of the company culture and to date, has raised $37.5 million for breast cancer research. And, through the power of the Veraverse, Vera Bradley will continue to pave new colorful paths for women in the world of Web3."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6} className={classes.right}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/mary_sloan_QkMpUixMK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657062147704"
                }
                alt="Party Scene"
              />
            </GridItem>
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}
