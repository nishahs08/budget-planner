
import React from "react";
import { Typography ,Paper} from "@material-ui/core";
export default function Header(props){
	let budget = localStorage.getItem('budget');
	return (
		<Paper elevation={0} style={{width:"98%",height:"100px",marginTop:"20px", background: 'transparent'}}>
			<Typography variant="h5">
				March of fucking 2020
            </Typography>
			<Typography variant="h5">
				you fucking planned to spend <span>{budget} </span>this month
            </Typography>
			<Typography variant="h5">
				You have already spent <span>{props.totalExpense}</span>
            </Typography>
	   </Paper>
	)
}