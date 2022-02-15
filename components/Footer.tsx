import React from "react";
import {
  Grid,
  Typography,
  ListItem,
  ListItemIcon,
  List,
} from "@material-ui/core";
import { Code } from "@material-ui/icons";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Typography align="center" variant="h5">
            Other Services
          </Typography>
          <ListItem button component="a" href="https://www.sparkledigi.com">
            <ListItemIcon>
              <Code style={{ color: "var(--qunit)" }} />
            </ListItemIcon>
            Web Development/Graphics Design
          </ListItem>
          <ListItem button component="a" href="https://www.sparkledigi.com">
            <ListItemIcon>
              <Code style={{ color: "var(--qunit)" }} />
            </ListItemIcon>
            UX Design
          </ListItem>
        </Grid>
        <Grid item xs={12} lg={6} style={{ display: "flex" }}>
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
