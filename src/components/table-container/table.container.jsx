import React, { Component } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import "./table.style.scss";
import List from '../listContainer-component/listContainer.component';
export default class Tablecontainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			record: [],
			show: false
		};
	}
	componentDidMount() {
		this.setState({
			record: JSON.parse(localStorage.getItem("records")) || []
		});
	}

	render() {
		return (
			<div className="box" style={{
				width: "100%", height: "55vh", overflowY: "scroll",padding:"10px"
			}}>
			<Paper
			elevation={3} fixed
				style={{ width: "100%",backgroundColor:"transparent"}}>
			
				<List></List>
				<List></List>
				<List></List>
				<List></List>
				<List></List>
				
			</Paper>
			</div>
		);
	}
}

/**
 * 		let list = this.state.record.map((obj, ind) => (
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
								TOTAL EXPENSES : 9000
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
 */
