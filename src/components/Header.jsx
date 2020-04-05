
import React from "react";
import { Typography, Paper } from "@material-ui/core";
export default function Header(props) {
	const { budget, transactions } = props;
	const thisDate = new Date();
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const expense = transactions.reduce((sum, t) => sum + t.spent, 0);
	return (
		<Paper elevation={0} style={{ width: "98%", height: "100px", marginTop: "20px", background: 'transparent' }}>
			<Typography variant="h5">
				{months[thisDate.getMonth() + 1]} of fucking {thisDate.getFullYear()}
			</Typography>
			<Typography variant="h5">
				You fucking planned to spend <span>{budget} </span>this month
            </Typography>
			<Typography variant="h5" style={{ color: expense > (budget/2) ? 'red' : undefined }}>
				You have already spent <span>{expense}</span>
			</Typography>
		</Paper>
	)
}