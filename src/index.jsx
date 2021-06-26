import React from 'react';
import ReactDOM from 'react-dom';
import { Grow, CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './index.css';
import ky from 'ky';

import Login from './login';
import Register from './register';
import logo from './imgs/logo.png';
import Home from './home';
import Notification from './notification'
import Photos from './photos'
import PlanParty from './plantparty'
import Profile from './profile'
import Store from './store'


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
		this.state = { page: 'load' };

		this.setPage = this.setPage.bind(this);
		this.login = this.login.bind(this);
	}

	componentDidMount() {
		setTimeout(() => this.setState({ page: 'login' }), 600);
	}

	setPage(page) {
		this.setState({ page: page });
	}

	async login(state) {
		// const json = await ky.post('http://localhost:3002/api/auth/signin', {
		// 	json: {email: 'no', password: 'no'},
		// 	timeout: 3000
		// }).json();

		fetch('http://localhost:3002/api/auth/signin', {
			method: 'POST',
			mode: 'cors',
			body: {
				"password": "bob",
				"email": "bobv@bob.com"
			}
		}).then(data => console.log(data));

		// console.log(json);
	}

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{this.state.page === 'load' &&
					<div id="wrapper">
						<Grow in={true} {...({ timeout: 600 })}>
							<div id="box">
								<img src={logo} alt="" id="logo" />
							</div>
						</Grow>
					</div>}
				{ this.state.page === 'login' && <Login setPage={this.setPage} login={this.login} />}
				{ this.state.page === 'register' && <Register setPage={this.setPage} />}
				{ this.state.page === 'home' && <Home setPage={this.setPage} />}
				{ this.state.page === 'notification' && <Notification setPage={this.setPage} />}
				{ this.state.page === 'photos' && <Photos setPage={this.setPage} />}
				{ this.state.page === 'planparty' && <PlanParty setPage={this.setPage} />}
				{ this.state.page === 'profile' && <Profile setPage={this.setPage} />}
				{ this.state.page === 'store' && <Store setPage={this.setPage} />}
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
