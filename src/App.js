import React from 'react';
//import Container from './components/main-container/main.component';
import Container from './components/container/container.component';
//import './App.css';
import Start from './components/start-component/start.component';
//import TableContainer from './components/table-container/table.container';
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { navigation: "home" }
	}

	componentDidMount() {
		localStorage.getItem('budget') ? this.setState({ navigation: 'plan' }) : this.setState({ navigation: "home" });
	}

	render() {
		return (
			<div className="App">
				{this.state.navigation === 'plan'
					?
					<Container></Container>
					:
					<Start onLetsPlanClick={() => this.setState({ navigation: "plan" })}></Start>
				}
			</div>
		);
	}
}

export default App;
