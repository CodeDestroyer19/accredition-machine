import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardActions } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      margin: "15px",
      flexWrap: "wrap",
      maxWidth: "450px",
      flexDirection: "column",
    },
    details: {
      display: "flex",
      width: "calc(100% - 151px)",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 150,
      height: 75,
      margin: "",
    },
    testimony: {
      width: "100%",
      padding: "1rem",
    },
    TopSection: {
      width: "100%",
      flexWrap: "nowrap",
      display: "flex",
    },
  })
);

export default function MediaControlCard({ elem }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.TopSection}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              {elem.nameof}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {elem.schoolname}
            </Typography>
          </CardContent>
        </div>
      </div>
      <div className={classes.testimony}>
        <Typography variant="subtitle1" color="textSecondary">
          {elem.testement}
        </Typography>
      </div>
    </Card>
  );
}
