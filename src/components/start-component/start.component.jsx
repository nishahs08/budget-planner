import React, { Component } from 'react'
import './start.component.scss';
import { Button, Input, FormHelperText, FormControl } from "@material-ui/core";

export default class Start extends Component {
	constructor(props) {
		super(props);
		this.state = {

			budget: "",
			errorBudget: "",
			link: "/main"
		}
		this.onInput = this.onInput.bind(this);
	}
	onInput(e) {
		let budget = e.target.value;
		this.setState({ budget: budget });
	}
	handleClick(e) {
		let month = new Date().getMonth();
		let budget = this.state.budget;
		this.setState({ errorBudget: "" });
		if (Number.isNaN(budget) === false && budget > 0) {
			console.log("is number", budget, month);
			localStorage.setItem('budget', this.state.budget);
			this.props.onLetsPlanClick();
		}
		else {
			this.setState({ errorBudget: "Budget should be a number greater than 0 " })
		}

	}
	render() {
		return (
			<div className="container">
				<div className="container--sub">
					<div className="container--sub__1">
						I swear I won't fucking spend more than
						<span>
							<FormControl>
								<Input
									id="component-simple"
									value={this.state.budget}
									onChange={e => this.onInput(e)}
									name="budget"
									aria-describedby="component-error-text"
								/>
								<FormHelperText id="component-error-text" error>
									{this.state.errorBudget}
								</FormHelperText>
							</FormControl>
						</span> this month.
					</div>
					<div className="container--sub__2">
						<FormControl>
							<Button variant="contained" onClick={e => this.handleClick(e)}>
								Lets Plan
							</Button>
							
						</FormControl>
					</div>
				</div>
			</div>
		)
	}
}
