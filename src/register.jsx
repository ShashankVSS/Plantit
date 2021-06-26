import React from 'react';
import './register.css';
import { TextField, Button, Typography, Divider, Link } from '@material-ui/core';
import logo from './imgs/logofull.png';


class Register extends React.Component {
	constructor(props) {
		super(props);
        this.state = {email: '', pass: '', veriPass: true};

        this.updateEmail = this.updateEmail.bind(this);
		this.updatePass = this.updatePass.bind(this);
        this.updateVerPas = this.updateVerPas.bind(this);
	}

	updateEmail(e) {
		this.setState({email: e.target.value});
	}

	updatePass(e) {
		this.setState({pass: e.target.value});
	}

    updateVerPas(e) {
		if (e.target.value === this.state.pass) this.setState({veriPass: true});
		else this.setState({veriPass: false});
	}
	
	render() {
		return(
      		<div id="register">
				<img src={logo} alt="" id="logofull"/>
				<div id="register-card">
					<TextField variant="outlined" label="Email" margin="normal" onChange={this.updateEmail}/>
					<TextField variant="outlined" label="Password" margin="normal" onChange={this.updatePass}/>
					<TextField variant="outlined" label="Verify Password" margin="normal" onChange={this.updateVerPas} error={!this.state.veriPass}/>
					<Divider className="divider"/>
					<Button variant="contained" fullWidth size="large" color="primary" disabled={!this.state.veriPass}
						onClick={() => this.props.register(this.state)}
					>
						Register
					</Button>
					<Typography onClick={() => this.props.setPage('login')}>
						<Link underline="always" className="link">Already have an account?</Link>
					</Typography>
				</div>
			</div>
		);
	}
}

export default Register;