import React from 'react';
import { TextField, Button, Card, Input, InputAdornment } from '@material-ui/core'
import './photos.css';
import NavDrawer from './navDrawer';

class Photos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {file: '', description: ''};

		this.fileInput = React.createRef();
		this.updateDesc = this.updateDesc.bind(this);
		this.updateFile = this.updateFile.bind(this);
	}

	updateDesc(e) {
		this.setState({description: e.target.value});
	}
	
	updateFile() {
        this.setState({file: this.fileInput.current.files[0]});
    }

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(function(position) {
		  console.log("Latitude is :", position.coords.latitude);
		  console.log("Longitude is :", position.coords.longitude);
		});
	}

	render() {
		return(
      		<div id="photos">
				
				<NavDrawer page="Photos" setPage = {this.props.setPage}/>

				<div id="photos-card">
					<form>
						<Card class="card">

							<h3>Add an open plot</h3>
							<label for="description">Description: </label>
							<TextField id="outlined-basic" label="Description" variant="outlined" onChange={this.updateDesc}/>

							<TextField variant="outlined" label="Firmware file" margin="dense" disabled
								value={this.state.file ? this.state.file.name : ''}
								InputProps={{endAdornment:
									<InputAdornment position="end">
										<input type="file" ref={this.fileInput} onChange={this.updateFile} accept="image/*" id="file-input" capture="environment" hidden/>
										<label htmlFor="file-input">
											<Button variant="contained" color="primary" size="small" component="span">
												Browse
											</Button>
										</label>
									</InputAdornment>}}
							/>

						</Card>
					
						<Button variant="contained" size="large" color="primary">Submit</Button>
					</form>
				</div>
			</div>
		);
	}
}

export default Photos;