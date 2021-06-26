import React from 'react';
import { TextField, Button, Typography, Divider, Link, Fade } from '@material-ui/core';
import './login.css';

import logo from './imgs/logofull.png';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {email: '', pass: ''};

		this.updateEmail = this.updateEmail.bind(this);
		this.updatePass = this.updatePass.bind(this);
	}

	updateEmail(e) {
		this.setState({email: e.target.value});
	}

	updatePass(e) {
		this.setState({pass: e.target.value});
	}
	
	render() {
		return(
      		<div id="login">
				<Fade in={true} {...({timeout: 300})}>
					<div>
					<img src={logo} alt="" id="logofull"/>
					<div id="login-card">
						<TextField variant="outlined" label="Email" margin="normal" onChange={this.updateEmail}/>
						<TextField variant="outlined" label="Password" type="password" margin="normal" onChange={this.updatePass}/>
						<Divider className="divider"/>
						<Button variant="contained" size="large" color="primary" fullWidth onClick={() => this.props.login(this.state)}>Login</Button>
						<Typography onClick={() => this.props.setPage('register')}>
							<Link underline="always" className="link">Don't have an account?</Link>
						</Typography>
					</div>
					</div>
				</Fade>
			</div>
		);
	}
}

export default Login;
