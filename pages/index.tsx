import React from "react";
import styles from "../styles/Home.module.scss";
import Meta from "../components/Meta";
import Testemoninals from "../components/Testemoninals";
import { Typography, Grid, ListItem, ListItemIcon } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import IconCard from "../components/IconCard";
import {
  Menu,
  Schedule,
  Android,
  People,
  Phone,
  Email,
} from "@material-ui/icons";
import ServiceCard from "../components/ServiceCard";
import MiscCard from "../components/MiscCards";

//Data uris
import { clouds, animated, polygraph } from "../utils/dataURIs";

export default function Home() {
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
                <p
                  className={styles.Heading}
                  style={{ fontSize: "48px", margin: "0px", padding: "0px" }}
                >
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
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    background: "transparent",
                    left: 0,
                    top: "90%",
                    display: "flex",
                    flexDirection: "row",
                    padding: "0px 20px",
                    justifyContent: "center",
                  }}
                >
                  <IconCard image={<Menu style={{ fontSize: "48px" }} />} />
                  <IconCard image={<Menu style={{ fontSize: "48px" }} />} />
                  <IconCard image={<Menu style={{ fontSize: "48px" }} />} />
                </div>
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
            <Grid xs={12} item container spacing={2} style={{ margin: "0px" }}>
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
                    <MiscCard
                      icon={elem.icon}
                      classes={styles}
                      title={elem.title}
                      list={elem.list}
                    />
                  </Grid>
                );
              })}
            </Grid>
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
          </div>

          <div className="svgBG">
            <Parallax strength={350}>
              <Background>
                <img src={animated} />
              </Background>
              <div style={{ height: "65vh" }}>
                <div className={`${styles.insideStyles} ${styles.card}`}>
                  <Typography className={`${styles.Heading} ${styles.Lgfont}`}>
                    Let's work{" "}
                    <span style={{ color: "var(--qunit)" }}>together</span>
                  </Typography>
                </div>
              </div>
            </Parallax>
          </div>

          <hr className="Line" />

          <Grid container spacing={2}>
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
          <hr className="Line" />

          <Typography
            variant="h5"
            className={`${styles.Heading} ${styles.Mdfont}`}
            align="left"
          >
            Testimoninals
          </Typography>
          <Testemoninals />
          <br />

          <div className="svgBG">
            <Parallax strength={550}>
              <Background>
                <img src={polygraph} />
              </Background>
              <div style={{ height: "70vh" }}>
                <div className={`${styles.insideStyles} ${styles.card}`}>
                  <Typography className={`${styles.Heading} ${styles.Lgfont}`}>
                    <span style={{ color: "var(--tertairy" }}>Contact </span> Us
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
                    <Grid item></Grid>
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
