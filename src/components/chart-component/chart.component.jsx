import * as React from "react";
import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { Paper} from '@material-ui/core';

const data = [
  { country: "Russia", area: 12 },
  { country: "Canada", area: 7 }
];
export default function chart(props) {
  return (
		<Paper elevation={0} style={{backgroundColor:"transparent",width:"110px",height:"100px",marginTop:"20px"}}>
    <Chart width={100} height={100} data={data} style={{margin:"auto"}}>
      <PieSeries valueField="area" argumentField="country" innerRadius={0.5} />
      <Animation /> 
    </Chart>
		</Paper>
  );
}
