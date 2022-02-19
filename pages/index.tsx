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
import IconCard from "../components/IconCard";
import {
  Menu,
  Schedule,
  Android,
  People,
  Phone,
  Email,
  ArrowLeft,
  ArrowRight,
} from "@material-ui/icons";
import ServiceCard from "../components/ServiceCard";
import MiscCard from "../components/MiscCards";
import TestimonialCards from "../components/TestimonialCards";
import { Transition } from "react-transition-group";

import VisibilitySensor from "react-visibility-sensor";
//Data uris
import { clouds, animated, polygraph } from "../utils/dataURIs";

export default function Home() {
  const [load, SetLoad] = React.useState(1);
  const [initload, SetInitload] = React.useState(0);
  const [inProp, setInProp] = React.useState(false);
  const transitionStyles = {
    entering: { opacity: 1, transform: `translate(0px,0px)` },
    entered: { opacity: 1, transform: `translate(0px,0px)` },
    exiting: { opacity: 0, transform: `translate(0px,-150px)` },
    exited: { opacity: 0, transform: `translate(0px,-150px)` },
  };

  const Testemoninalslist = [
    { nameof: "Tina", testement: "", schoolname: "Easy English" },
    { nameof: "name", testement: "", schoolname: "Vaal techincal" },
    { nameof: "name", testement: "", schoolname: "SAFIIT" },
    { nameof: "name", testement: "", schoolname: "Mechatronics Acedemy" },
    { nameof: "name", testement: "", schoolname: "MJR Training" },
    { nameof: "name", testement: "", schoolname: "Sandton Technical" },
  ];

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
                setInProp(true);
              }}
            >
              <Grid
                xs={12}
                item
                container
                spacing={2}
                style={{ margin: "0px" }}
              >
                {[
                  {
                    title: "10 years of experience",
                    list: [
                      "Accredited more than 30 institutions",
                      "Worked with kindergartens to universities",
                      "Registered more than 20 companies and counting",
                      "We link providers to accredited learning material developers",
                      "We outsource assessors/moderators to providrs who need them",
                    ],
                    icon: (
                      <Schedule
                        color="secondary"
                        style={{
                          fontSize: "144px",
                          margin: "0px auto",
                          padding: "0px 0px 15px 0px",
                        }}
                      />
                    ),
                  },
                  {
                    title: "Software powered accreditation",
                    list: [
                      "Smart technology, powering our accreditation process",
                      "Quick delivery for accreditation processes",
                      "Little to no room for errors",
                      "Our software is tried and tested to assure maximum performance",
                    ],
                    icon: (
                      <Android
                        style={{
                          fontSize: "144px",
                          margin: "0px auto",
                          padding: "0px 0px 15px 0px",
                          color: "var(--qunit)",
                        }}
                      />
                    ),
                  },
                  {
                    title: "Customer Service you won’t find anywhere else",
                    list: [
                      `A dedicated team who’ll address your queries`,
                      "All-round customer support",
                      "Frequent updates on your service progress",
                      "Mentorship to entrepreneurs who buy educational franchises intending to exist",
                    ],
                    icon: (
                      <People
                        color="primary"
                        style={{
                          fontSize: "144px",
                          margin: "0px auto",
                          padding: "0px 0px 15px 0px",
                        }}
                      />
                    ),
                  },
                ].map((elem, index) => {
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
              {[
                { imgPath: "/clients/mjr.png", alt: "MJR" },
                { imgPath: "/clients/saf.png", alt: "SAFIIT" },
                { imgPath: "/clients/jintek.png", alt: "Jintek" },
                { imgPath: "/clients/vaal.jpg", alt: "VTI" },
                { imgPath: "/clients/high.jpg", alt: "HTC" },
                { imgPath: "/clients/easy.jpg", alt: "EASY English" },
                { imgPath: "/clients/sandton.png", alt: "Sandton technical" },
                { imgPath: "/clients/mecha.png", alt: "MDA" },
              ].map((elem, index) => {
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
          {/* <VisibilitySensor
            onChange={isVisible => {
              setInProp(isVisible);
            }}
          > */}
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
              {[
                {
                  title: "Umalusi Accreditation",
                  description: "",
                  price: "R25,000",
                  Servicetype: "Accreditation",
                },
                {
                  title: "QCTO Accreditation",
                  description: "",
                  price: "R15,000",
                  Servicetype: "Accreditation",
                },
                {
                  title: "SETA Programme Accreditation",
                  description: "",
                  price: "R5,000 per programme",
                  Servicetype: "Accreditation",
                },
              ].map((elem, index) => {
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
              {[
                {
                  title: "CSD with Teasury Registration",
                  description: "",
                  price: "R2,000",
                  Servicetype: "Registration",
                },
                {
                  title: "Company Registration",
                  description: "",
                  price: "R1,800",
                  Servicetype: "Registration",
                },
              ].map((elem, index) => {
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
              {[
                {
                  title: "Tax Clearance",
                  description: "",
                  price: "R2,000",
                  Servicetype: "Accreditation",
                },
                {
                  title: "Acquisition of SARS report",
                  description: "",
                  price: "R1,500",
                  Servicetype: "Accreditation",
                },
              ].map((elem, index) => {
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
          {/* </VisibilitySensor> */}
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
