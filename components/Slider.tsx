import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/icons
import { People, CheckCircleOutline, Star } from "@material-ui/icons";
// core components
import { Grid, Card } from "@material-ui/core";
import classes from "../styles/Slider.module.scss";
import { sliderURI } from "../utils/dataURIs";

export default function SectionCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
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
                  <div
                    className="slickimage"
                    style={{ backgroundColor: "red" }}
                  />
                  <div className="slickcaption">
                    <Star className="slickicons" style={{ color: "gold" }} />
                    <img
                      src="/slider/brain.gif"
                      alt="Brain power"
                      loading="lazy"
                      className="gif"
                      style={{ left: "20%" }}
                    />
                    <h4>Taking South African institutions to the next level</h4>
                    <img src={sliderURI} className="slickimageSVG" />
                  </div>
                </div>
                <div>
                  <div
                    className="slickimage"
                    style={{ backgroundColor: "green" }}
                  />
                  <div className="slickcaption">
                    <People
                      className="slickicons"
                      style={{ color: "lightblue" }}
                    />
                    <img
                      src="/slider/uni.gif"
                      alt="Brain power"
                      loading="lazy"
                      className="gif"
                      style={{ left: "70%" }}
                    />
                    <h4>Getting to the root of your issues</h4>
                    <img src={sliderURI} className="slickimageSVG" />
                  </div>
                </div>

                <div>
                  <div
                    className="slickimage"
                    style={{ backgroundColor: "gold" }}
                  />
                  <div className="slickcaption">
                    <CheckCircleOutline
                      className="slickicons"
                      style={{ color: "green" }}
                    />
                    <img
                      src="/slider/fin.gif"
                      alt="Brain power"
                      loading="lazy"
                      className="gif"
                      style={{ left: "50%" }}
                    />
                    <h4>
                      Ensuring Quality education and institutions get the proper
                      certifications to operate
                    </h4>
                    <img src={sliderURI} className="slickimageSVG" />
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
