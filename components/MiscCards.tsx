import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText } from "@material-ui/core";

const MiscCard = ({ icon, classes, title, list }) => {
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div className={classes.iconDiv}>{icon}</div>
        <Typography variant="h5" component="h2" align="center">
          {title}
        </Typography>

        <List>
          {list.map((txt: string, index: number) => {
            return (
              <ListItem key={`MetaDescription-#no${index}`}>
                <ListItemText
                  primary={<Typography variant="body1">{txt}</Typography>}
                />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default MiscCard;
