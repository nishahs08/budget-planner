import React, { useState } from 'react';

import Start from './components/Start/Start';
import Header from './components/Header';
import Chart from './components/Chart';
import AddTransaction from './components/AddTransaction';
import TransactionsContainer from './components/TransactionsContainer';
import EditTransactionDialog from './components/EditTransactionDialog';

import { Grid} from '@material-ui/core';

export default function App() {
	/** State */
	const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem('transactions')) || []);
	const [budget, setBudget] = useState(parseInt(localStorage.getItem('budget')) || null);
	const [editingTransaction, setEditingTransaction] = useState(null);

	/** Helper variables */
	const thisMonthKey = `${(new Date()).getDate()}-${(new Date()).getMonth() + 1}-${(new Date()).getFullYear()}`;
	const groupedTransactions = transactions.reduce((group, transaction) => {
		const td = new Date(transaction.spentOn);
		const groupingKey = `${td.getDate()}-${td.getMonth() + 1}-${td.getFullYear()}`;
		if (!group[groupingKey]) {
			group[groupingKey] = [transaction];
		} else {
			group[groupingKey].push(transaction);
		}
		return group;
	}, {});

	/** Helper Methods */
	const addTransaction = (transaction) => {
		const newTransactions = [...transactions, transaction];
		localStorage.setItem('transactions', JSON.stringify(newTransactions));
		setTransactions(newTransactions);
	};

	const updateTransaction = (updatedTransaction) => {
		const newTransactions = transactions.map(transaction => {
			if (transaction.id !== updatedTransaction.id) return transaction;
			return updatedTransaction;
		});
		localStorage.setItem('transactions', JSON.stringify(newTransactions));
		setTransactions(newTransactions);
	}
	
	/** Render */
	return (
		!budget
		? <Start budget={budget} setBudget={budget => {
			localStorage.setItem('budget', budget);
			setBudget(budget);
		}} />
		: <Grid
			container
			color="primary"
			style={{
				justifyContent: "center",
				margin: "auto",
				marginTop: "5vh"
			}}
			spacing={1}
		>
			<Grid item lg={7} md={12} sm={12} style={{ textAlign: "center" }}>
				<Header transactions={groupedTransactions[thisMonthKey] || []} budget={budget} />
			</Grid>
			<Grid item lg={1} md={12}>
				<Chart transactions={transactions} budget={budget} />
			</Grid>
			<Grid
				container
				spacing={1}
				item
				lg={8}
				md={8}
				style={{ marginTop: "10px" }}
			>
				<AddTransaction addTransaction={addTransaction} />
			</Grid>
			<Grid container spacing={1} lg={8} style={{ marginTop: "10px", marginBottom: "15px"}}>
				<TransactionsContainer groupedTransactions={groupedTransactions} updateTransaction={(transaction) => setEditingTransaction(transaction)} />
			</Grid>
			{editingTransaction && <EditTransactionDialog
				transaction={editingTransaction}
				setEditingTransaction={setEditingTransaction}
				updateTransaction={newTransaction => {
					setTransactions(transactions.map(transaction => {
						if (transaction.id !== newTransaction.id) return transaction;
						return newTransaction;
					}))
				}}
				isOpen={!!editingTransaction}
				handleClose={() => setEditingTransaction(false)}
			/>}
		</Grid>
	);
}
