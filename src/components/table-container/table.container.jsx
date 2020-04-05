import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import "./table.style.scss";
import List from "../listContainer-component/listContainer.component";
export default class Tablecontainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}

	render() {
		console.log("reco", this.props.record);

		let records = this.props.record.reduce((accumulator, obj) => {
			let key = obj.timeStamp;

			if (!accumulator[key]) {
				accumulator[key] = [];
			}

			accumulator[key].push(obj);
			return accumulator;
		}, []);

		return (
			<div
				className="box"
				style={{
					width: "100%",
					height: "55vh",
					padding: "10px"
				}}
			>
				<Paper
					elevation={0}
					style={{ width: "100%", backgroundColor: "transparent" }}
				>
					<List groupedRecords={records}></List>
					
				</Paper>
			</div>
		);
	}
}

