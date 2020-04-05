import  React from "react";
import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { Paper } from '@material-ui/core';


export default function ChartComponent(props) {
	const totalSpent = props.transactions.reduce((sum,transaction)=>sum+transaction.spent,0);
	const data = [
		{description:"budget", value:props.budget || 90},
		{description:"expenditure",value:totalSpent}
	]
	return (
		<Paper elevation={0} style={{ backgroundColor: "transparent", width: "110px", height: "100px", marginTop: "20px" }}>
			<Chart width={100} height={100} data={data} style={{ margin: "auto" }}>
				<PieSeries valueField="value" argumentField="description" innerRadius={0.5} />
				<Animation />
			</Chart>
		</Paper>
	);
}
