import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Typography align="center" variant="h5">
            Contact us
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography align="center" variant="h5">
            Other Services
          </Typography>
          <Typography variant="h6">Consultation</Typography>
          <Typography variant="h6">Tax Clearance</Typography>
          <Typography variant="h6">CSD with Teasury Registration</Typography>
          <Typography variant="h6">Company Registration</Typography>
        </Grid>
        <Grid item xs={12} lg={4} style={{ display: "flex" }}>
          <Typography
            align="center"
            variant="h6"
            style={{ margin: "auto auto 0px auto" }}
          >
            Accreditation Machine &copy; {new Date().getFullYear().toString()}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
