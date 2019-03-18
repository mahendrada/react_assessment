import React from "react";
import { Grid } from "@material-ui/core";
import MapVisualization from "./MapVisualization";
import ChartVisualization from "./ChartVisualization";


const NowWhat = props => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <MapVisualization>
          </MapVisualization>
        </Grid>
        <Grid item xs={6}>
          <ChartVisualization>
          </ChartVisualization>
        </Grid>
      </Grid>
    </div>
  );
};

export default (NowWhat);


