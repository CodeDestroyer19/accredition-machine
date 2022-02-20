import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import classes from "../styles/Nav.module.scss";

import dynamic from "next/dynamic";

const Navigation = () => {
  const scrollTo = ele => {
    const scrollEle = document.querySelector("#" + ele);
    var offset = 70;
    const bodyRect = document.body.getBoundingClientRect().top;
    var elementRect = scrollEle.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (anchor, open) => event => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const list = () => (
      <Box
        role="presentation"
        onClick={toggleDrawer("left", false)}
        onKeyDown={toggleDrawer("left", false)}
      >
        <List>
          {[
            { label: "Testemonials", func: "testimoninals" },
            { label: "Services", func: "services" },
            { label: "Contact us", func: "contactus" },
          ].map((text, index) => (
            <ListItem
              button
              style={{ width: 250 }}
              key={text.label + index}
              onClick={() => {
                scrollTo(text.func);
              }}
            >
              <ListItemText primary={text.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
      <div>
        <React.Fragment>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    );
  }

  const SectionCarousel = dynamic(() => import("./Slider"));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar
          className={classes.toolbar}
          style={{ background: "var(--primary)" }}
        >
          <Grid container className={classes.GridCont}>
            <Grid item xs={4} className={classes.PrimaryAction}>
              <SwipeableTemporaryDrawer />
              <Typography className={classes.title} variant="h6" noWrap>
                Accreditaion Machine
              </Typography>
            </Grid>
            <Grid item xs={8} className={classes.SecondaryActions}>
              <div className={classes.navButtons}>
                <Button
                  aria-label="testimonials"
                  color="inherit"
                  style={{ marginLeft: "auto" }}
                  onClick={() => {
                    scrollTo("testimoninals");
                  }}
                >
                  Testemonials
                </Button>
                <Button
                  aria-label="services"
                  color="inherit"
                  onClick={() => {
                    scrollTo("services");
                  }}
                >
                  Services
                </Button>
                <Button
                  aria-label="services"
                  color="inherit"
                  onClick={() => {
                    scrollTo("contactus");
                  }}
                >
                  Contact us
                </Button>
              </div>
              <Typography className={classes.titlemobile} variant="h6" noWrap>
                Accreditaion Machine
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
        <Grid container style={{ marginTop: "64px" }}>
          <Grid item xs={12} className={classes.slider}>
            <SectionCarousel />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navigation;
