import React, { Component } from 'react'
import './Start.scss';
import { Button, Input, FormHelperText, FormControl } from "@material-ui/core";
import { useState } from 'react';

export default function Start(props) {
	const { budget, setBudget } = props;
	const [localBudget, setLocalBudget] = useState(budget);
	const [budgetError, setBudgetError] = useState("");

	const handleClick = (e) => {
		let month = new Date().getMonth();
		setBudgetError("");
		if (Number.isNaN(localBudget) === false && localBudget > 0) {
			console.log("is number", localBudget, month);
			setBudget(localBudget);
		}
		else {
			setBudgetError("Budget should be a number greater than 0 ");
		}
	}

	return (
		<div className="container">
			<div className="container--sub">
				<div className="container--sub__1">
					I swear I won't fucking spend more than
						<span>
						<FormControl>
							<Input
								id="component-simple"
								value={localBudget}
								onChange={e => setLocalBudget(parseInt(e.target.value))}
								name="budget"
								aria-describedby="component-error-text"
							/>
							<FormHelperText id="component-error-text" error={!!budgetError}>
								{budgetError}
							</FormHelperText>
						</FormControl>
					</span> this month.
					</div>
				<div className="container--sub__2">
					<FormControl>
						<Button variant="contained" onClick={handleClick}>
							Lets Plan
						</Button>
					</FormControl>
				</div>
			</div>
		</div>
	)
}
