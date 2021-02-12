import React, { FunctionComponent } from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { Grid, makeStyles, Typography } from "@material-ui/core";

type SeasonDisplayProps = {
  lat: number;
};

interface SeasonConfigObject {
  [key: string]: any;
}

const seasonConfig: SeasonConfigObject = {
  summer: {
    text: "Lets hit the beach!",
    icon: <WbSunnyIcon style={{ fontSize: "10rem" }}></WbSunnyIcon>,
  },
  winter: {
    text: "Burr, it's chilly!",
    icon: <AcUnitIcon style={{ fontSize: "10rem" }}></AcUnitIcon>,
  },
};

const getSeason = (lat: number, month: number): string => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }

  return lat > 0 ? "winter" : "summer";
};

const useStyles = makeStyles({
  winter: {
    backgroundColor: "cyan",
    color: "blue",
  },
  summer: {
    backgroundColor: "orange",
    color: "red",
  },
});

const SeasonDisplay: FunctionComponent<SeasonDisplayProps> = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];
  const classes = useStyles(season);

  return (
    <Grid
      container
      className={season === "winter" ? classes.winter : classes.summer}
      style={{ height: "100vh" }}
    >
      <Grid item xs={12}>
        <Grid container justify="flex-start">
          {icon}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Typography variant="h1" component="h2">
            {text}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="flex-end">
          {icon}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SeasonDisplay;
