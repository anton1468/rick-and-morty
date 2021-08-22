import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 150,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const LocationCard = (locationList) => {
  const classes = useStyles();
  const location = locationList.locationList;
  return (
    <div className="location-card">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h5">
            {location.name}
          </Typography>
          <Typography component="h6">
            Dimension: {location.dimension}
          </Typography>
          <Typography variant="h7" component="h7">
            Number of residents: {location.residents.length}
          </Typography>
          <Typography variant="p" component="p">
            Type: {location.type}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationCard;
