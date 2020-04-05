import React from 'react';
import CollapsibleBar from './CollapsibleBar';

export default function TransactionsContainer(props) {
	const { groupedTransactions, updateTransaction } = props;

	return Object
		.keys(groupedTransactions)
		.map((dateString, index) => <CollapsibleBar
			key={dateString}
			dateString={dateString}
			transactions={groupedTransactions[dateString]}
			updateTransaction={updateTransaction}
		/>);
}