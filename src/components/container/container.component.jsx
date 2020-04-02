import React, { Component } from "react";
import "./container.styles.scss";
import {
  Grid,
  Paper
} from "@material-ui/core";
import Header from "../header-component/header.component";
import Chart from "../chart-component/chart.component";
import Tablecontainer from "../table-container/table.container";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import Form from "../form-component/form.component";
//import ListContainer from '../listContainer-component/listContainer.component';


export default function Container() {
  return (
    <ThemeProvider>
      <Grid
			sm={12}
			lg={10}
			md={11}
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
          <Header></Header>
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
					<Form></Form>
					
				</Grid>

				<Grid container spacing={1} md={9} lg={9} style={{
					marginTop: "10px",marginBottom:"15px"
				}}>
					<Tablecontainer></Tablecontainer>
				 </Grid>
        </Grid>
    
    </ThemeProvider>
  );
}
