import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import {Grid, Card} from "@material-ui/core";
import classes from "../styles/Slider.module.scss";

export default function SectionCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section} style={{ padding: "0px" }}>
      <div className={classes.container}>
        <Grid>
          <Grid item
            xs={12}
            className={classes.marginAuto}
            style={{ padding: "0px" }}
          >
            <Card>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/Logo Assets/uma.jpg"
                    alt="First slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src="/Parallex/itcCenter.JPG"
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Cnr Botha & Mandela Streets, Old Witbank News Buiilding
                      Town, Emalahleni, 1035
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/Parallex/class.JPG"
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Examination In session
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}