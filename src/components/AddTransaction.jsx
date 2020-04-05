import React, { useState } from "react";
import {
	Paper,
	Grid,
	FormControl,
	InputLabel,
	FormHelperText,
	Input,
	Button
} from "@material-ui/core";

export default function AddTransaction(props) {
	let [note, setNote] = useState("");
	let [spent, setSpent] = useState("");
	let [NoteError, setNoteError] = useState("");
	let [SpentError, setSpentError] = useState("");

	const validate = () => {

		let errorNote = "";
		let errorSpent = "";

		let isError = false;
		if (Number.isNaN(parseInt(spent)) || parseInt(spent) < 0) {
			isError = true;
			errorSpent = "Enter only amount spent";
		}

		if (note.length <= 0) {
			isError = true;
			errorNote = "Enter note related to expenditure eg. tea , grocery ";
		}

		setNoteError(errorNote);
		setSpentError(errorSpent);
		return isError;
	}

	const handleClick = () => {
		setSpentError("");
		setNoteError("");

		let error = validate();
		if (!error) {
			let newRecord = {
				spentOn: Date.now(),
				spent: parseInt(spent),
				note: note,
				id: Date.now()
			};
			setNote("");
			setSpent("");

			props.addTransaction(newRecord);
		}
	}

	return (
		<Paper
			elevation={0}
			style={{ width: "100%", padding: "2px", backgroundColor: "transparent" }}
		>
			<Grid container spacing={3} justify="center">
				<Grid item md={3} lg={1}>
					<FormControl>
						<InputLabel htmlFor="component-simple">Note</InputLabel>
						<Input
							id="component-simple"
							value={note}
							name="note"
							onChange={(e) => setNote(e.target.value)}
							aria-describedby="component-error-text"
						/>
						<FormHelperText id="component-error-text" error={!!NoteError}>
							{NoteError}
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item>
					<FormControl md={3} lg={2}>
						<InputLabel htmlFor="component-simple">Spent</InputLabel>
						<Input
							id="component-simple"
							value={spent}
							name="spent"
							onChange={(e) => setSpent(e.target.value)}
							aria-describedby="component-error-text"
						/>
						<FormHelperText id="component-error-text" error={!!SpentError}>
							{NoteError}
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item md={3} lg={3} style={{}}>
					<FormControl>
						<Button variant="contained" style={{ marginTop: "17px" }} onClick={() => handleClick()}>
							Track
						</Button>
					</FormControl>
				</Grid>
			</Grid>
		</Paper>
	);
}
