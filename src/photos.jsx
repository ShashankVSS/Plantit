import React from 'react';
import { TextField, Button, Card, Input } from '@material-ui/core'
import './photos.css';

class Photos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {description: ''};

		this.updateDesc = this.updateDesc.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateDesc(e) {
		this.setState({description: e.target.value});
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(function(position) {
		  console.log("Latitude is :", position.coords.latitude);
		  console.log("Longitude is :", position.coords.longitude);
		});
	}

	render() {
		return(
      		<div>
				<form action="">
					<Card class="card">

						<h3>Add an open plot</h3>
						<label for="description">Description: </label>
						<TextField id="outlined-basic" label="Description" variant="outlined" onChange={this.updateDesc}/>

						<Input type="file" value="image?" onChange={this.handleChange}/>
					</Card>
				
					<Button>Submit</Button>
				</form>
			</div>
		);
	}
}

export default Photos;