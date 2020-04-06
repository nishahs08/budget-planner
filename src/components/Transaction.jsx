import React from 'react';
import {
	Typography,
	Grid
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

export default function Transaction(props) {
	const { transaction, updateTransaction } = props;
	return (
		<Grid
			container
			lg={12}
			md={12}
			justify="space-between"
			style={{
				padding: "5px",
				backgroundColor: props.index % 2 === 0 ? "#cfd8dc" : "#eceff1",
				color: "#37474f"
			}}
		>
			<Grid item md={2} lg={2}>
				<Typography>
					<span onClick={() => updateTransaction(transaction)}>
						<EditOutlinedIcon />
					</span>
					{transaction.note}
				</Typography>
			</Grid>
			<Grid item md={2} lg={2} >
				<Typography>{transaction.spent}</Typography>
			</Grid>
		</Grid>
	);
}