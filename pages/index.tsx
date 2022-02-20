import React from "react";
import styles from "../styles/Home.module.scss";
import Meta from "../components/Meta";
import Testemoninals from "../components/Testemoninals";
import {
  Typography,
  Grid,
  ListItem,
  ListItemIcon,
  IconButton,
} from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import { Phone, Email, ArrowLeft, ArrowRight } from "@material-ui/icons";
import ServiceCard from "../components/ServiceCard";
import MiscCard from "../components/MiscCards";
import TestimonialCards from "../components/TestimonialCards";
import { Transition } from "react-transition-group";

import VisibilitySensor from "react-visibility-sensor";

//Data uris
import { clouds, animated, polygraph } from "../utils/dataURIs";
import {
  InfoDAta,
  clientData,
  Testemoninalslist,
  transitionStyles,
  serviceData,
} from "../utils/dataJSON";

export default function Home() {
  const [load, SetLoad] = React.useState(1);
  const [initload, SetInitload] = React.useState(0);
  const [inProp, setInProp] = React.useState(false);

  return (
    <>
      <Meta title="Accreditaion Machine" description="" />
      <div className={styles.MainContainer}>
        <div className="svgBG">
          <Parallax strength={350}>
            <Background>
              <img src={clouds} />
            </Background>
            <div style={{ height: "100vh" }}>
              <div className={`${styles.insideStyles} ${styles.card}`}>
                <p className={`${styles.Heading} ${styles.Mdfont}`}>
                  We are an Accreditation Digital agency
                </p>
                <Typography variant="h6" align="center">
                  We focus on accrediting schools, from kindergartens to
                  universities...
                </Typography>
                <Typography variant="h6" align="center">
                  You name it.
                </Typography>
                <Typography variant="h6" align="center">
                  We also specialize in registering companies and more!
                </Typography>
              </div>
            </div>
          </Parallax>
        </div>

        <hr className="Line" />

        <div className={styles.Services}>
          <Grid>
            <br />
            <Typography className={`${styles.Heading} ${styles.Mdfont}`}>
              We are leaders in Accerditation
            </Typography>
            <br />
            <VisibilitySensor
              onChange={isVisible => {
                setInProp(isVisible);
              }}
            >
              <Grid
                xs={12}
                item
                container
                spacing={2}
                style={{ margin: "0px" }}
              >
                {InfoDAta.map((elem, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      lg={4}
                      key={`Meta-info-#no${index}`}
                      style={{ display: "flex" }}
                    >
                      <Transition in={inProp} timeout={300 * (index + 3)}>
                        {state => (
                          <div
                            style={{
                              transition: `all ${
                                300 * (index + 3)
                              }ms ease-in-out`,
                              opacity: 0,
                              transform: `translate(0px, 0px)`,
                              ...transitionStyles[state],
                            }}
                          >
                            <MiscCard
                              icon={elem.icon}
                              classes={styles}
                              title={elem.title}
                              list={elem.list}
                            />
                          </div>
                        )}
                      </Transition>
                    </Grid>
                  );
                })}
              </Grid>
            </VisibilitySensor>
          </Grid>

          <div style={{ margin: "30px 0px" }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  align="center"
                  variant="h5"
                  className={`${styles.Heading} ${styles.Lgfont}`}
                >
                  <span style={{ color: "var(--tertairy)" }}>Our</span> Clients
                </Typography>
              </Grid>
              {clientData.map((elem, index) => {
                return (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    lg={3}
                    key={`Client-elem-#no${index}`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      overflow: "hidden",
                      paddingBottom: "50px",
                    }}
                  >
                    <img src={elem.imgPath} alt={elem.alt} className="logos" />
                  </Grid>
                );
              })}
            </Grid>
            <Typography
              variant="h5"
              className={`${styles.Heading} ${styles.Mdfont}`}
              align="center"
              id="testimoninals"
            >
              Testimoninals
            </Typography>

            <div className={styles.testimonialdiv}>
              <Testemoninals Testemoninalslist={Testemoninalslist} />
            </div>
            <div className={styles.testimonialcarddiv}>
              {Testemoninalslist.slice(initload, load).map((elem, index) => {
                return (
                  <TestimonialCards key={`Testicard-no#${index}`} elem={elem} />
                );
              })}
              <div className={styles.navcontainer}>
                <IconButton
                  disabled={initload === 0 ? true : false}
                  onClick={() => {
                    SetLoad(prev => prev - 1);
                    SetInitload(prev => prev - 1);
                  }}
                  className={styles.LeftnavButton}
                  role="Testemonial Navigate Left Button"
                >
                  <ArrowLeft />
                </IconButton>
                <IconButton
                  disabled={Testemoninalslist.length === load ? true : false}
                  onClick={() => {
                    SetLoad(prev => prev + 1);
                    SetInitload(prev => prev + 1);
                  }}
                  className={styles.RightnavButton}
                  role="Testemonial Navigate right Button"
                >
                  <ArrowRight />
                </IconButton>
              </div>
            </div>
            <br />
          </div>

          <div className="svgBG">
            <Parallax strength={350}>
              <Background>
                <img src={animated} />
              </Background>
              <div style={{ height: "65vh" }}>
                <div
                  className={`${styles.insideStyles} ${styles.card}`}
                  style={{ top: "50%", left: "50%" }}
                >
                  <Typography className={`${styles.Heading} ${styles.Lgfont}`}>
                    Let's work{" "}
                    <span style={{ color: "var(--qunit)" }}>together</span>
                  </Typography>
                </div>
              </div>
            </Parallax>
          </div>

          <hr className="Line" />

          <Grid container spacing={2} id="services">
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className={`${styles.Heading} ${styles.Mdfont}`}
                align="center"
              >
                Accreditation Services
              </Typography>
            </Grid>
            {serviceData.first.map((elem, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  key={`Service-item-#no${index}`}
                >
                  <ServiceCard elem={elem} />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className={`${styles.Heading} ${styles.Mdfont}`}
                align="center"
              >
                Registrations
              </Typography>
            </Grid>
            {serviceData.second.map((elem, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={6}
                  key={`Service-item-#no${index}`}
                >
                  <ServiceCard elem={elem} />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className={`${styles.Heading} ${styles.Mdfont}`}
                align="center"
              >
                Other Services
              </Typography>
            </Grid>
            {serviceData.third.map((elem, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={6}
                  key={`Service-item-#no${index}`}
                >
                  <ServiceCard elem={elem} />
                </Grid>
              );
            })}
          </Grid>
          <hr className="Line" />

          <div className="svgBG">
            <Parallax strength={550}>
              <Background>
                <img src={polygraph} />
              </Background>
              <div style={{ height: "70vh" }}>
                <div
                  className={`${styles.insideStyles} ${styles.card}`}
                  style={{ top: "50%", left: "50%" }}
                >
                  <Typography className={`${styles.Heading} ${styles.Lgfont}`}>
                    <span style={{ color: "var(--tertairy" }} id="contactus">
                      Contact{" "}
                    </span>{" "}
                    Us
                  </Typography>
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItem button component="a" href="tel:+27 67 028 7206">
                        <ListItemIcon>
                          <Phone />
                        </ListItemIcon>
                        tel: +27 67 028 7206
                      </ListItem>
                      <ListItem
                        button
                        component="a"
                        href="mailto:sparkledigitaladvertisers@gmail.com"
                      >
                        <ListItemIcon>
                          <Email />
                        </ListItemIcon>
                        <Typography style={{ wordWrap: "break-word" }} noWrap>
                          sparkledigitaladvertisers@gmail.com
                        </Typography>
                      </ListItem>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </>
  );
}
