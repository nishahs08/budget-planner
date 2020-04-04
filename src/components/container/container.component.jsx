import React, { Component } from "react";
import "./container.styles.scss";
import {
	Grid
} from "@material-ui/core";
import Header from "../header-component/header.component";
import Chart from "../chart-component/chart.component";
import Tablecontainer from "../table-container/table.container";
import Form from "../form-component/form.component";
//import ListContainer from '../listContainer-component/listContainer.component';


export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalBudget: "",
			totalExpense: 9000,
			icon: "+",
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
			record: [],
			month: "April",
			year: 2020
		};

		/**this.handleShow = this.handleShow.bind(this);
		this.handleExpensesChange = this.handleExpensesChange.bind(this);
		this.handleNoteChange = this.handleNoteChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.validate = this.validate.bind(this);
		this.onClickEdit = this.onClickEdit.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.editRecord = this.editRecord.bind(this);
		this.totalExpense = this.totalExpense.bind(this);*/
	}

	componentDidMount() {
		this.setState({
			record: JSON.parse(localStorage.getItem("records")) || [],
			budget: JSON.parse(localStorage.getItem("budget")) || []
		});

	}



	render() {
		
		return (

			<Grid
				
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
					<Header budget={this.state.budget} month={this.state.month} year={this.state.year} totalExpense={this.state.totalExpense}></Header>
				</Grid>

				<Grid item lg={1} md={12}>
					<Chart></Chart>
				</Grid>

				<Grid
					container
					spacing={1}
					item
					lg={8}
					md={8}
					style={{
						marginTop: "10px"
					}}
				>
					<Form storageUpdated={() => this.setState({ record: JSON.parse(localStorage.getItem('records')) || [] })}></Form>

				</Grid>

				<Grid container spacing={1}  style={{
					marginTop: "10px", marginBottom: "15px"
				}}>
					<Tablecontainer record={this.state.record}></Tablecontainer>
				</Grid>
			</Grid>


		);
	}
}
