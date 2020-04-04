
import React from "react";
import { Typography ,Paper} from "@material-ui/core";
export default function Header(props){

	let {year,budget,month,totalExpense}= props;
	return (
		<Paper elevation={0} style={{width:"98%",height:"100px",marginTop:"20px", background: 'transparent'}}>
			<Typography variant="h5">
				{month} of fucking {year}
            </Typography>
			<Typography variant="h5">
				you fucking planned to spend <span>{budget} </span>this month
            </Typography>
			<Typography variant="h5">
				You have already spent <span>{totalExpense}</span>
            </Typography>
	   </Paper>
	)
}