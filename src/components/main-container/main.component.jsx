import React, { Component } from "react";
import "./main.component.scss";
import {
	Button,
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
import Header from '../header-component/header.component';
import Chart from '../chart-component/chart.component';
export default class Container extends Component {
	constructor() {
		super();

		this.state = {
			totalBudget: "",
			totalExpense: "",
			icon:"+",
			show: "",
			note: "",
			spent: "",
			noteEdit: "",
			spentEdit: "",
			errorNote: "",
			errorSpent: "",
			errorNoteEdit: "",
			errorSpentEdit: "",
			open: false,
			id: "",
			iconPlus: true,
			record: []
		};

		this.handleShow = this.handleShow.bind(this);
		this.handleExpensesChange = this.handleExpensesChange.bind(this);
		this.handleNoteChange = this.handleNoteChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.validate = this.validate.bind(this);
		this.onClickEdit = this.onClickEdit.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.editRecord = this.editRecord.bind(this);
		this.totalExpense = this.totalExpense.bind(this);
	}

	componentDidMount() {
		this.setState({
			record: JSON.parse(localStorage.getItem("records")) || []
		});
	
	}

	totalExpense(){
		let expense = this.state.record.reduce((sum,ob)=> sum+ob.spent , 0);
		this.setState({totalExpense:expense});
		console.log("-",this.state.totalExpense)

	}
	onClickEdit(id) {
		this.setState({ open: true, id });
	}

	editRecord() {
		const { spentEdit, noteEdit } = this.state;
		this.setState({ errorSpentEdit: "", errorNoteEdit: "" });
		let id = parseInt(this.state.id);
		let error = {};

		let isError = false;
		if (noteEdit.length <= 0) {
			isError = true;
			error.errorNoteEdit =
				"Enter note related to expenditure eg. tea , grocery ";
		}

		if (Number.isNaN(parseInt(spentEdit)) || parseInt(spentEdit) < 0) {
			
			isError = true;
			error.errorSpentEdit = "Enter only amount spent";
		}

		this.setState(error);
		
		if (isError === false) {
			let arr = this.state.record.map(rec => {
				if (id === rec.id) {
					rec.note = noteEdit;
					rec.spent = parseInt(spentEdit);
				}

				return rec;
			});
			localStorage.setItem("records", JSON.stringify(arr));
			this.setState((state)=>{
			return ({ record: arr, spentEdit: "", noteEdit: "",errorSpentEdit:"",errorNoteEdit:"" ,open:false})
			}
			);
		}
	}

	handleClose() {
		this.setState({ open: false });
	}

	validate() {
		const { spent, note } = this.state;
		
		let error = {};

		let isError = false;
		if (Number.isNaN(parseInt(spent)) || parseInt(spent) < 0) {
			isError = true;
			error.errorSpent = "Enter only amount spent";
		}

		if (note.length <= 0) {
			isError = true;
			error.errorNote = "Enter note related to expenditure eg. tea , grocery ";
		}

		this.setState((state) => {
			return ({ ...state, ...error });
		});

		return isError;
	}

	handleClick() {
	
		this.setState({
			errorNote: "",
			errorSpent: "" });
			
		let error = this.validate();
		if (error === false) {
			let newRecord = {
				timeStamp: new Date().getDate(),
				spent: parseInt(this.state.spent),
				note: this.state.note,
				id: Date.now()
			};

			let storageDocument = JSON.parse(localStorage.getItem("records")) || [];

			storageDocument.push(newRecord);

			localStorage.setItem("records", JSON.stringify(storageDocument));

			this.setState({
				record: storageDocument, spent: "", note: "", errorNote: "",
				errorSpent: ""});
			
		} else {
			
		}
		this.setState({ spentError: "", noteError: "" });
	}

	handleShow(ind) {
		if(this.state.show !== ind){
		this.setState({ show: ind ,iconPlus:false});
		}else{
			this.setState({show:"",iconPlus:true})
		}
	}

	handleExpensesChange(e) {
		this.setState({ spent: e.target.value });
	}
	handleNoteChange(e) {
		this.setState({ note: e.target.value });
	}

	onInputChange(e) {
		if (e.target.name) this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { record } = this.state;
		let totalExpense = this.state.record.reduce((sum, ob) => sum + ob.spent, 0);
		let records = [];
        let chartData = [];
		records = record.reduce((accumulator, obj) => {
			let key = obj.timeStamp;

			if (!accumulator[key]) {
				accumulator[key] = [];
			}

			accumulator[key].push(obj);
			return accumulator;
		}, []);

		let list = records.map((obj, ind) => (
			<>
				<div
					className="container--record__list main"
					value={ind}
					onClick={() => this.handleShow(ind)}
				>
					{(!this.state.iconPlus) && (this.state.show === ind)
				 ?
					<span className="expand">-</span>
					:
						<span className="expand">+</span>
				}
					<div className="expand-1">{ind + " March"}</div>
					<div className="expand-2">
						TOTAL EXPENSES : {obj.reduce((sum, ob) => sum + ob.spent, 0)}{" "}
					</div>
				</div>
				{this.state.show === ind
					? obj.map(o => (
						<>
							<div className="container--record__list sub">
								<span
									className="expand"
									onClick={e => this.onClickEdit(o.id)}
									id={o.id}
								>
									<EditOutlinedIcon />
								</span>
								<div className="expand-1">{o.note}</div>
								<div className="expand-2">{o.spent}</div>
							</div>
						</>
					))
					: null}
			</>
		));

		//this.totalExpense();
		return (
			<div className="container">
				<div className="container--record">
					<Header budget={this.state.totalBudget} totalExpense={ this.state.record.reduce((sum, ob) => sum + ob.spent, 0) }></Header>
					<Chart  expense={this.state.totalExpense} budget={this.state.totalBudget}></Chart>
					<div className="container--record__1 container--record__track">
						<Grid item xs>
							<FormControl>
								<InputLabel htmlFor="component-simple">Note</InputLabel>
								<Input
									id="component-simple"
									value={this.state.note}
									onChange={this.onInputChange}
									name="note"
									aria-describedby="component-error-text"
								/>
								<FormHelperText id="component-error-text" error>
									{this.state.errorNote}
								</FormHelperText>
							</FormControl>
						</Grid>
						<Grid item xs>
							<FormControl>
								<InputLabel htmlFor="component-simple">Spent</InputLabel>
								<Input
									id="component-simple"
									value={this.state.spent}
									onChange={this.onInputChange}
									name="spent"
									aria-describedby="component-error-text"
								/>
								<FormHelperText id="component-error-text" error>
									{this.state.errorSpent}
								</FormHelperText>
							</FormControl>
						</Grid>
						<Grid item xs>
							<FormControl>
								<Button variant="contained" onClick={e => this.handleClick(e)}>
									Track
                </Button>
							</FormControl>
						</Grid>
					</div>
					<div className="container--record__1 container--record__row">
						{list}
					</div>
				</div>

				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
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
									value={this.state.noteEdit}
									onChange={this.onInputChange}
									name="noteEdit"
									aria-describedby="component-error-text"
								/>
								<FormHelperText id="component-error-text" error>
									{this.state.errorNoteEdit}
								</FormHelperText>
							</FormControl>
						</Grid>

						<Grid item xs>
							<FormControl>
								<InputLabel htmlFor="component-simple">Spent</InputLabel>
								<Input
									id="component-simple"
									value={this.state.spentEdit}
									onChange={this.onInputChange}
									name="spentEdit"
									aria-describedby="component-error-text"
								/>
								<FormHelperText id="component-error-text" error>
									{this.state.errorSpentEdit}
								</FormHelperText>
							</FormControl>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
            </Button>
						<Button onClick={this.editRecord} color="primary">
							Change
            </Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

/*<div className="container--sub">
					<div className="container--sub__1">
							I swear I won't fucking spend more than <span> {this.state.totalBudget}</span> this month.
					</div>
					<div className="container--sub__2">
						<div>Lets Plan</div>
					</div>
			</div> */

/**
 *
 *
 * 	{
		timeStamp: 23,
		spent: 200,
		note: 'tea'
	},
	{
		timeStamp: 23,
		spent: 400,
		note: 'electricity'
	},
	{
		timeStamp: 22,
		spent: 600,
		note: 'water'
	},
	{
		timeStamp: 20,
		spent: 800,
		note: 'food'
	},
	{
		timeStamp: 22,
		spent: 1600,
		note: 'coffee'
	},
	{
		timeStamp: 22,
		spent: 600,
		note: 'water'
	},
	{
		timeStamp: 26,
		spent: 800,
		note: 'food'

	},
	{
		timeStamp: 26,
		spent: 1600,
		note: 'coffee'
	},
	{
		timeStamp: 27,
		spent: 600,
		note: 'water'
	},
	{
		timeStamp: 27,
		spent: 800,
		note: 'food'
	},
	{
		timeStamp: 23,
		spent: 1600,
		note: 'coffee'
	},
	{
		timeStamp: 26,
		spent: 1600,
		note: 'coffee'
	},
	{
		timeStamp: 27,
		spent: 600,
		note: 'water'
	},
	{
		timeStamp: 27,
		spent: 800,
		note: 'food'
	},
	{
		timeStamp: 23,
		spent: 1600,
		note: 'coffee'
	}
 */

/**
 * <TextField id="standard-basic" label="TRACK YOUR EXPENSES" value={this.state.note} name="note"  onChange={(e) =>
		 this.onInputChange(e)}></TextField>
		 <TextField id="standard-basic" label="AMOUNT" value={this.state.spent} color="secondary" name="spent" onChange={(e) =>
		 this.onInputChange(e)} />
		 <Button variant="contained" size="large" color="default" onClick={(e) => this.handleClick(e)} >TRACK</Button>
 */
