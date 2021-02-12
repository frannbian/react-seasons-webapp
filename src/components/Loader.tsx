import React, { FunctionComponent } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

type LoaderProps = {
  loadingText?: string;
};

const Loader: FunctionComponent<LoaderProps> = ({ loadingText }) => {
  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Grid>
        <Grid container alignItems="center" justify="center">
          <CircularProgress />
        </Grid>
        <Grid container alignItems="center" justify="center">
          <Typography>{loadingText}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Loader.defaultProps = {
  loadingText: "Loading...",
};

export default Loader;
