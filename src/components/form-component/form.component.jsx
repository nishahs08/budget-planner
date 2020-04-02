import React from 'react'
import {Paper,Grid,FormControl,InputLabel,FormHelperText,Input,Button} from "@material-ui/core";
export default function form() {
	return (
		<Paper elevation={0} style={{ width: "100%", padding: "2px" ,backgroundColor:"transparent"}}>
			<Grid container justify="space-around"> 
				<Grid item md={3} lg={2} >
					<FormControl>
						<InputLabel htmlFor="component-simple">Spent</InputLabel>
						<Input
							id="component-simple"
							value=""
							name="spent"
							aria-describedby="component-error-text"
						/>
						<FormHelperText id="component-error-text" error>
							Error
                </FormHelperText>
					</FormControl>
				</Grid>
				<Grid item>
					<FormControl md={3} lg={2}>
						<InputLabel htmlFor="component-simple">Note</InputLabel>
						<Input
							id="component-simple"
							value=""
							name="spent"
							aria-describedby="component-error-text"
						/>
						<FormHelperText id="component-error-text" error>
							Error
                </FormHelperText>
					</FormControl>
				</Grid>
				<Grid item md={3} lg={2} style={{ textAlign: "center" }}>
					<FormControl >
						<Button variant="contained" style={{ marginTop: "17px" }}>Track</Button>
					</FormControl>
				</Grid>
			</Grid>
		</Paper>
	)
}
