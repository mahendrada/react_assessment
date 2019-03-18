import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import * as _ from 'lodash';
import ChartContainer from "./ChartContainer";

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

class ChartVisualisation extends Component {

  render() {
    const { classes, data } = this.props;
    const chartData = _.map(data, (currentEntity) => {
      const { metric, timestamp } = currentEntity;
      return {
        temperature: metric,
        time: timestamp
      }
    })
    
    return(
      <Card className={classes.card}>
        <CardHeader title="Map Visualization" />
        <CardContent className={classes.mapWrapper}>
            <ChartContainer chartData={chartData} />
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

export default connect(mapState)(withStyles(styles)(ChartVisualisation));