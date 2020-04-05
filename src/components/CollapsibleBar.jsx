import React from 'react';
import Transaction from './Transaction';
import { Grid, Typography } from '@material-ui/core';

export default function CollapsibleBar(props) {
	const { dateString, transactions, updateTransaction } = props;
	return (
		<>
			<Grid
				container
				lg={12}
				md={12}
				justify="space-between"
				style={{
					padding: "5px",
					color: "#f4f6f8",
					backgroundImage: "linear-gradient(to right bottom,#263238,#546e7a)",
					marginTop: "30px"
				}}
			>
				<Grid item md={2} lg={2}>
					<Typography>
						<span style={{ margin: "5px" }}>+</span>{dateString}
					</Typography>
				</Grid>
				<Grid item md={2} lg={2} alignItems="center">
					<Typography>TOTAL EXPENSE: {transactions.reduce((sum, t) => sum = sum + t.spent, 0)}</Typography>
				</Grid>
			</Grid>
			{transactions.map((transaction, index) => <Transaction
				key={index}
				index={index}
				transaction={transaction}
				updateTransaction={updateTransaction}
			/>)}
		</>
	)
}