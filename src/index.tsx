import React from "react";
import ReactDom from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

type AppState = {
  lat?: number;
  errorMsg?: string;
};

const theme = createMuiTheme({});

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  getGeolocation = (): void => {
    if ("geolocation" in navigator) {
      /* la geolocalización está disponible */
      navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ lat: position.coords.latitude }),
        (err) => {
          this.setState({ errorMsg: err.message });
        }
      );
    } else {
      /* la geolocalización NO está disponible */
      console.log("Ubicación no disponible.");
    }
  };

  componentDidMount() {
    this.getGeolocation();
  }

  renderContent = () => {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }

    return <Loader loadingText="Please allow location request." />;
  };

  render() {
    return <ThemeProvider theme={theme}>{this.renderContent()}</ThemeProvider>;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
