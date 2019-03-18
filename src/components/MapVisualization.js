import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import MapContainer from "./MapContainer";


const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
  card: {
    margin: "5% 2%"
  },
  mapWrapper: {
    position: "relative",
    height: "450px"
  }
};

class MapVisualization extends Component {

  constructor(props) {
    super(props);
    this.refreshData = this.refreshData.bind(this);
  }

  componentDidMount() {
    this.refreshData();
    this.intervalCloser = setInterval(this.refreshData, 4000);
  }

  refreshData() {
    this.props.getDroneLocations();
  }

  componentWillUnmount() {
    clearInterval(this.intervalCloser);
  }

  render() {
    const { classes, data } = this.props;
    let currentLatLong;
    if(data.length > 0) {
      const { latitude, longitude } = data[data.length-1];
      currentLatLong = {
        lat: latitude,
        lng: longitude
      };
    }
    
    return(
      <Card className={classes.card}>
        <CardHeader title="Map Visualization" />
        <CardContent className={classes.mapWrapper}>
            {
              (data.length> 0) ? 
              <MapContainer currentLatLong={currentLatLong} /> : 
              "Loading..."       
            }
        </CardContent>
      </Card>
    )
  }
}

const mapState = (state, ownProps) => {
  const {
    loading,
    data
  } = state.droneLocations;
  return {
    data,
    loading
  };
};

const mapDispatch = dispatch => ({
  getDroneLocations: () =>
    dispatch({
      type: actions.FETCH_DRONE_LOCATIONS
    })
});

export default connect(mapState, mapDispatch)(withStyles(styles)(MapVisualization));