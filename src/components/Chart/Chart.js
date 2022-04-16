import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
  const dataPointvalues = props.dataPoints.map(
    (dataPoint) => dataPoint.value//each datapoint object is converted in value and the map function returns array so it returns array of values.
  );
  const maximumValue = Math.max(...dataPointvalues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
