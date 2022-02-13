import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Button, Grid } from "@material-ui/core";
import classes from "../styles/Nav.module.scss";

import SectionCarousel from "./Slider";

const Navigation = () => {
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "var(--primary)" }}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.GridCont}>
            <Grid item xs={4} className={classes.PrimaryAction}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                Accreditaion Machine
              </Typography>
            </Grid>
            <Grid item xs={8} className={classes.SecondaryActions}>
              <Button
                aria-label="testimonials"
                color="inherit"
                style={{ marginLeft: "auto" }}
              >
                Testemonials
              </Button>
              <Button aria-label="services" color="inherit">
                Services
              </Button>
              <Button aria-label="services" color="inherit">
                Contact us
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.slider}>
              <SectionCarousel />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
