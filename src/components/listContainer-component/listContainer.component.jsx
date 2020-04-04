import React,{useState} from 'react'
import {
	Grid,
	Paper,
	Typography
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
export default function List(props) {
const [total,setTotal] = useState(0)
console.log("rec",props.record);
	return (

		<Paper elevation={1}>
			<Grid container lg={12} style={{ backgroundColor: "red", marginBottom: "30px" }}>
				
				<Grid
					container
					lg={12}
					md={12}
					justify="space-between"
					style={{
						padding: "5px",
						color: "#f4f6f8",
						backgroundImage: "linear-gradient(to right bottom,#263238,#546e7a)"
					}}
				>
					<Grid item md={2} lg={2}>
						{" "}
						<Typography> <span style={{ margin: "5px" }}>+</span>12 MARCH</Typography>

					</Grid>
					<Grid item md={2} lg={2} alignItems="center">
						<Typography>TOTAL EXPENSE: </Typography>
					</Grid>
				</Grid>

				<Grid
					container
					lg={12}
					md={12}
					justify="space-between"
					style={{
						padding: "5px",
						backgroundColor: "#cfd8dc",
						color: "#37474f"
					}}
				>

					<Grid item md={2} lg={2}>

						<Typography><span ><EditOutlinedIcon /> </span> tea</Typography>

					</Grid>
					<Grid item md={2} lg={2} >
						<Typography>900</Typography>
					</Grid>

				</Grid>

				<Grid
					container
					lg={12}
					md={12}
					justify="space-between"
					style={{
						padding: "5px",
						backgroundColor: "#eceff1 ",
						color: "#37474f"
					}}
				>
					<Grid item md={2} lg={2}>
						{" "}
						<Typography> <span><EditOutlinedIcon /></span>corn</Typography>

					</Grid>
					<Grid item md={2} lg={2} alignItems="center">
						<Typography>900</Typography>
					</Grid>

				</Grid>

				<Grid
					container
					lg={12}
					md={12}
					justify="space-between"
					style={{
						padding: "5px",
						backgroundColor: "#cfd8dc",
						color: "#37474f"
					}}
				>
					<Grid item md={2} lg={2}>
						{" "}
						<Typography> <span ><EditOutlinedIcon /></span>samosa</Typography>

					</Grid>
					<Grid item md={2} lg={2} alignItems="center">
						<Typography>900</Typography>
					</Grid>

				</Grid>

			</Grid>
		</Paper>
	)

}


/**
 *
 *
 */