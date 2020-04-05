import React, { useState } from 'react'

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

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
export default function List(props) {

	const [id, setId] = useState(0);
	const [flag, setFlag] = useState(true);
	const [spentEdit, setSpentEdit] = useState("");
	const [noteEdit, setNoteEdit] = useState("");
	const [errorNoteEdit, setErrorNoteEdit] = useState("");
	const [errorSpentEdit, setErrorSpentEdit] = useState("");
	const [record, setRecord] = useState(JSON.parse(localStorage.getItem('records')));

	const onClickEdit = (id) => {
		console.log("oio", id)
		setFlag(!flag);
		setId(id);
	}

	const handleClose = () => {
		setFlag(false);
	}

	const editRecord = () => {
		setErrorNoteEdit("");
		setErrorSpentEdit("");

		//handleClose();
		let errorNoteEdit = "";
		let errorSpentEdit = "";
		let isError = false;
		
		if (noteEdit.length <= 0) {
			isError = true;
			errorNoteEdit = "Enter note related to expenditure eg. tea , grocery ";
		}

		if (Number.isNaN(parseInt(spentEdit)) || parseInt(spentEdit) < 0) {
			isError = true;
			errorSpentEdit = "Enter only amount spent";
		}

		if (isError) {
			setErrorNoteEdit(errorNoteEdit);
			setErrorSpentEdit(errorSpentEdit);
		} else {
			let _id = parseInt(id);
			let arr = record.map(rec => {
				if (_id === rec.id) {
					rec.note = noteEdit;
					rec.spent = parseInt(spentEdit);
				}

				return rec;
			});
			localStorage.setItem("records", JSON.stringify(arr));

			setNoteEdit("");
			setSpentEdit("");
			setFlag(false);
			setRecord(arr);
			handleClose();
		}
		
	}

	return (

		<Paper elevation={0}>
			<Grid container lg={12} style={{ marginBottom: "30px" }}>
				{props.groupedRecords.map((records, i) => (
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
								{" "}
								<Typography> <span style={{ margin: "5px" }}>+</span>{i} MARCH</Typography>

							</Grid>
							<Grid item md={2} lg={2} alignItems="center">
								<Typography>TOTAL EXPENSE: {records.reduce((sum, ob) => sum = sum + ob.spent, 0)} </Typography>
							</Grid>
						</Grid>

						{records.map((record, ind) => (
							<Grid
								container
								lg={12}
								md={12}
								justify="space-between"
								style={{
									padding: "5px",
									backgroundColor: ind % 2 == 0 ? "#cfd8dc" : "#eceff1",
									color: "#37474f"
								}}
							>

								<Grid item md={2} lg={2}>

									<Typography><span onClick={() => onClickEdit(record.id)}><EditOutlinedIcon /> </span> {record.spent}</Typography>

								</Grid>
								<Grid item md={2} lg={2} >
									<Typography>{record.note}</Typography>
								</Grid>
							</Grid>
						))}
					</>
				))}

				<Dialog
					open={flag}
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
									value={noteEdit}
									onChange={(e) => setNoteEdit(e.target.value)}
									name="noteEdit"
									aria-describedby="component-error-text"
								/>
								<FormHelperText id="component-error-text" error>
									{errorNoteEdit}
								</FormHelperText>
							</FormControl>
						</Grid>

						<Grid item xs>
							<FormControl>
								<InputLabel htmlFor="component-simple">Spent</InputLabel>
								<Input
									id="component-simple"
									value={spentEdit}
									onChange={(e) => setSpentEdit(e.target.value)}
									name="spentEdit"
									aria-describedby="component-error-text"
								/>
								<FormHelperText id="component-error-text" error>
									{errorSpentEdit}
								</FormHelperText>
							</FormControl>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
            			</Button>
						<Button onClick={editRecord} color="primary">
							Change
						</Button>
					</DialogActions>
				</Dialog>
			</Grid>
		</Paper>
	)

}


