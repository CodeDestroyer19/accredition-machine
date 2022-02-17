import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/icons
import { People, CheckCircleOutline, Star } from "@material-ui/icons";
// core components
import { Grid, Card } from "@material-ui/core";
import classes from "../styles/Slider.module.scss";

export default function SectionCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 6500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section} style={{ padding: "0px" }}>
      <div className={classes.container}>
        <Grid>
          <Grid
            item
            xs={12}
            className={classes.marginAuto}
            style={{ padding: "0px" }}
          >
            <div style={{ overflow: "hidden" }}>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/slider/agreement.jpg"
                    alt="Second slide"
                    className="slickimage"
                    loading="lazy"
                  />
                  <div className="slickcaption">
                    <Star className="slickicons" style={{ color: "gold" }} />
                    <h4>Taking South African institutions to the next level</h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/slider/planning.jpg"
                    alt="First slide"
                    className="slickimage"
                    loading="lazy"
                  />
                  <div className="slickcaption">
                    <People
                      className="slickicons"
                      style={{ color: "lightblue" }}
                    />
                    <h4>Getting to the root of your issues</h4>
                  </div>
                </div>

                <div>
                  <img
                    src="/slider/school.jpg"
                    alt="Third slide"
                    className="slickimage"
                    loading="lazy"
                  />
                  <div className="slickcaption">
                    <CheckCircleOutline
                      className="slickicons"
                      style={{ color: "green" }}
                    />
                    <h4>
                      Ensuring Quality education and institutions get the proper
                      certifications to operate
                    </h4>
                  </div>
                </div>
              </Carousel>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
