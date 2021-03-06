import React from 'react';
import ReactDOM from 'react-dom';
import { Grow, CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './index.css';

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

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {page: 'load', token: ''};

		this.setPage = this.setPage.bind(this);
		this.login = this.login.bind(this);
		this.register = this.register.bind(this);
		this.upload = this.upload.bind(this);
		this.getAll = this.getAll.bind(this);
		this.setCoord = this.setCoord.bind(this);
	}

	componentDidMount() {
		setTimeout(() => this.setState({page: 'login'}), 600);
	}

	setPage(page) {
		this.setState({page: page});
	}

	setCoord(a, b, c, d){
		this.setState({lat: a, lon: b, lat2: c, lon2: d})
	}

	async login(state) {
		console.log();
		fetch(`http://${window.location.hostname}:3000/api/auth/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({email: state.email, password: state.pass})
		})
		.then(response => response.json())
		.then(result => {
			if (result.id) {
				this.setState({token: result.token, page: 'home'});
			}
		});
	}

	async register(state) {
		fetch(`http://${window.location.hostname}:3000/api/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({email: state.email, password: state.pass})
		})
		.then(response => response.json())
		.then(result => {
			if (result.message == 'User registered successfully.') {
				this.setState({page: 'login'});
			}
		});
	}

	async upload(state) {
		console.log(state.file);
		/*var input, file, fr, img;
	
		fr = new FileReader();
		fr.onload = () => {
			img = new Image();
			img.onload = () => {
				var canvas = document.getElementById('canvas');
				canvas.width = img.width;
				canvas.height = img.height;
				var ctx = canvas.getContext("2d");
				ctx.drawImage(img,0,0);
				canvas.toDataURL("image/png");
			}
			img.src = fr.result;
		};
		fr.readAsDataURL(state.file);*/
   		const img = await getBase64(state.file);
		
		fetch(`http://${window.location.hostname}:3000/api/data/upload`, {
			method: 'POST',
			headers: {
				'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDZmNmNiNzhhZjEyMWNjYzE5NDdlOCIsImlhdCI6MTYyNDcwMDgzOCwiZXhwIjoxNjI0Nzg3MjM4fQ.JnlN96kz0JbTgMnC2DJNSv-RHgLjC_RPkTtQpnowJlM',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				data: state.description,
				image_data: img,
				image_data2: '1',
				latitude: state.lat,
				longitude: state.lon,
				latitude2: state.lat2,
				longitude2: state.lon2
			})
		})
		.then(response => response.json())
		.then(result => {
			this.setPage('home');
		});
	}

	async getAll() {
		let response = await fetch(`http://${window.location.hostname}:3000/api/data/get_all`, {
			method: 'GET',
			headers: {
				'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDZmNmNiNzhhZjEyMWNjYzE5NDdlOCIsImlhdCI6MTYyNDcwMDgzOCwiZXhwIjoxNjI0Nzg3MjM4fQ.JnlN96kz0JbTgMnC2DJNSv-RHgLjC_RPkTtQpnowJlM'
			}
		})
		let result = await response.json();
		return result;
	}
	
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline/>
				{this.state.page === 'load' &&
				<div id="wrapper">
					<Grow in={true} {...({timeout: 600})}>
						<div id="box">
							<img src={logo} alt="" id="logo"/>
						</div>
					</Grow>
				</div>}
				{ this.state.page === 'login' && <Login setPage={this.setPage} login={this.login}/> }
				{ this.state.page === 'register' && <Register setPage={this.setPage} register={this.register}/> }
        		{ this.state.page === 'home' && <Home setPage={this.setPage} getAll={this.getAll} lat={this.state.lat} lon={this.state.lon} lat2={this.state.lat2} lon2={this.state.lon2}/> }
				{ this.state.page === 'notification' && <Notification setPage={this.setPage} /> }
				{ this.state.page === 'photos' && <Photos setPage={this.setPage} upload={this.upload} setCoord={this.setCoord}/> }
				{ this.state.page === 'planparty' && <PlanParty setPage={this.setPage} getAll={this.getAll} lat={this.state.lat} lon={this.state.lon} lat2={this.state.lat2} lon2={this.state.lon2}/> }
				{ this.state.page === 'profile' && <Profile setPage={this.setPage} /> }
				{ this.state.page === 'store' && <Store setPage={this.setPage} /> }
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
