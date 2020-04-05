import React, {useState} from 'react';
import {
	Button,
	Paper,
	Typography,
	Input,
	FormHelperText,
	FormControl,
	InputLabel,
	Grid,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from "@material-ui/core";

export default function EditTransactionDialog(props) {
	/** Props */
	const { isOpen, handleClose, transaction, setEditingTransaction, updateTransaction } = props;
	
	/** State */
	const [noteError, setNoteError] = useState("");
	const [spentError, setSpentError] = useState("");

	/** Helpers */
	const validate = () => {

		let errorNote = "";
		let errorSpent = "";

		let isError = false;
		if (Number.isNaN(parseInt(transaction.spent)) || parseInt(transaction.spent) < 0) {
			isError = true;
			errorSpent = "Enter only amount spent";
		}

		if (transaction.note.length <= 0) {
			isError = true;
			errorNote = "Enter note related to expenditure eg. tea , grocery ";
		}

		setNoteError(errorNote);
		setSpentError(errorSpent);
		return isError;
	};

	const handleClick = () => {
		setSpentError("");
		setNoteError("");

		let error = validate();
		if (!error) {
			const _transaction = transaction;
			setEditingTransaction(null);
			updateTransaction(_transaction);
		}
	}

	/** Render */
	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
			<DialogContent>
				<DialogContentText>Edit</DialogContentText>
				<Grid item xs>
					<FormControl>
						<InputLabel htmlFor="component-simple">Note</InputLabel>
						<Input
							id="component-simple"
							value={transaction.note}
							onChange={(e) => setEditingTransaction({
								...transaction,
								note: e.target.value
							})}
							name="noteEdit"
							aria-describedby="component-error-text"
						/>
						<FormHelperText id="component-error-text" error={!!noteError}>
							{noteError}
						</FormHelperText>
					</FormControl>
				</Grid>

				<Grid item xs>
					<FormControl>
						<InputLabel htmlFor="component-simple">Spent</InputLabel>
						<Input
							id="component-simple"
							value={transaction.spent}
							onChange={(e) => setEditingTransaction({
								...transaction,
								spent: parseInt(e.target.value)
							})}
							name="spentEdit"
							aria-describedby="component-error-text"
						/>
						<FormHelperText id="component-error-text" error={!!spentError}>
							{spentError}
						</FormHelperText>
					</FormControl>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Cancel
				</Button>
				<Button onClick={handleClick} color="primary">
					Change
				</Button>
			</DialogActions>
		</Dialog>
	);
}