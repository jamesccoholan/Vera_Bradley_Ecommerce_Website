import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import VideoSection from "./Sections/VideoSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/RoadmapSection.js";
import Gallery from "./Sections/Gallery.js";
import Story from "./Sections/Story.js";
import FAQ from "./Sections/FAQ.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Vera Bradley"
        rightLinks={<HeaderLinks />}
        absolute
        {...rest}
      />
      <Parallax
        filter
        image={
          "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_1.55.37_PM_mTu74dyVu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657054588107"
        }
        alt="Vera bRadley"
      >
        <Fade duration={2000} bottom cascade>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>VB</h1>
                <h2 className={classes.subtitle}>NFT</h2>
                <h4>Minting Soon</h4>
                <br />
                <Button
                  color="twitter"
                  size="lg"
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleButton}
                >
                  <i className="fas fa-play" />
                  Producers Portal
                </Button>
                {/* <Button
                  color="twitter"
                  size="lg"
                  href="https://indd.adobe.com/view/30e69cf0-2477-4cb2-9c9a-e0696b616e06"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whitepaper
                </Button> */}
              </GridItem>
            </GridContainer>
          </div>
        </Fade>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <div>
        <VideoSection />
        <WorkSection />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Gallery />
          </div>
        </div>
        <Story />
        <FAQ />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
