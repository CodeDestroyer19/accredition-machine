import React from "react";
import styles from "../styles/Home.module.scss";
import Meta from "../components/Meta";
import Testemoninals from "../components/Testemoninals";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import IconCard from "../components/IconCard";
import { Menu } from "@material-ui/icons";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <>
      <Meta title="Accreditaion Machine" description="" />
      <div className={styles.MainContainer}>
        <div>
          <Parallax strength={350}>
            <Background className="custom-bg">
              <div
                className="bgDiv"
                style={{
                  background: `url('/vercel.svg')`,
                }}
              />
            </Background>
            <div style={{ height: 500 }}>
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
                  We also specialize in registering companies.
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((elem, index) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  lg={3}
                  key={`Client-elem-#no${index}`}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Menu style={{ fontSize: "48px", margin: "auto" }} />
                </Grid>
              );
            })}
          </Grid>
        </div>

        <Typography
          variant="h5"
          className={`${styles.Heading} ${styles.Lgfont}`}
          align="left"
        >
          Testimoninals
        </Typography>
        <Testemoninals />
        <div className={styles.Services}>
          <Parallax strength={350}>
            <Background className="custom-bg">
              <div
                className="bgDiv"
                style={{
                  backgroundImage: `url('/vercel.svg')`,
                }}
              />
            </Background>
            <div style={{ height: 500 }}>
              <div className={styles.insideStyles}>
                <Typography className={`${styles.Heading} ${styles.Lgfont}`}>
                  Let's work{" "}
                  <span style={{ color: "var(--qunit" }}>together</span>
                </Typography>
              </div>
            </div>
          </Parallax>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6, 8].map((elem, index) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  lg={3}
                  key={`Service-item-#no${index}`}
                >
                  <ServiceCard />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}
