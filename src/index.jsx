import React from 'react';
import ReactDOM from 'react-dom';
import { Grow } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './index.css';

import Login from './login';
import Register from './register';
import logo from './imgs/logo.png';
import Home from './home';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#AA2F2F'
		},
		secondary: {
			main: '#FFFFFF'
		}
	}
});

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {page: 'home'};

		this.setPage = this.setPage.bind(this);
		this.login = this.login.bind(this);
	}

	componentDidMount() {
		setTimeout(() => this.setState({page: 'home'}), 600);
	}

	setPage(page) {
		this.setState({page: page});
	}

	login(state) {
		console.log(JSON.stringify(state));
	}
	
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				{this.state.page === 'load' &&
				<div id="wrapper">
					<Grow in={true} {...({timeout: 600})}>
						<div id="box">
							<img src={logo} alt="" id="logo"/>
						</div>
					</Grow>
				</div>}
				{ this.state.page === 'login' && <Login setPage={this.setPage} login={this.login}/> }
				{ this.state.page === 'register' && <Register setPage={this.setPage} /> }
        { this.state.page === 'home' && <Home setPage={this.setPage} /> }
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
