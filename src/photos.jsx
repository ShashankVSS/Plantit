import React from 'react';
import { TextField, Button, Card, Input, InputAdornment, Typography, DialogTitle, DialogContent } from '@material-ui/core'
import './photos.css';
import NavDrawer from './navDrawer';
import Dialog from '@material-ui/core/Dialog';
import instructions from './imgs/instructions.gif'
import mapboxgl from 'mapbox-gl';

class Photos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {file: '', description: '', modal: false};

		this.fileInput = React.createRef();
		this.updateDesc = this.updateDesc.bind(this);
		this.updateFile = this.updateFile.bind(this);
		this.mapContainer = React.createRef();
		
	}
	
	componentDidMount() {
        const { lng, lat, zoom } = {lng: -117.5443667, lat: 33.8354925, zoom: 14};
        const map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
			attributionControl: false
        });
    }

	updateDesc(e) {
		this.setState({description: e.target.value});
	}
	
	updateFile() {
        this.setState({file: this.fileInput.current.files[0]});
    }

	render() {
		return(
      		<div id="photos">
				<canvas id="canvas" hidden></canvas>
				<NavDrawer page="Photos" setPage = {this.props.setPage}/>
					<div id="photos-card">
						<Card class="card">

							<Typography className="photodesc" variant="h6">Add an open plot</Typography>
							<TextField  id="outlined-basic" label="Description" variant="outlined" margin="normal" onChange={this.updateDesc}/>

							<input type="file" ref={this.fileInput} onChange={this.updateFile} accept="image/png" id="file-input" capture="environment" hidden/>
							<label htmlFor="file-input">
								<Button fullWidth className="imageSelect" variant="contained" color="primary" size="large" component="span">
									First Image
								</Button>
							</label>										
							<input type="file" ref={this.fileInput} onChange={this.updateFile} accept="image/png" id="file-input" capture="environment" hidden/>
							<label htmlFor="file-input">
								<Button fullWidth className="imageSelect" variant="contained" color="primary" size="large" component="span">
									Second Image
								</Button>
							</label>										
							<div ref={this.mapContainer} className="map-container3" />
						</Card>
						<div>
							<Button className="joinparty" variant="contained" size="large" color="primary" onClick={() => this.setState({modal:true})}>
								Instructions
							</Button>
							<Dialog
								open={this.state.modal}
								onClose={() => this.setState({modal:false})}
								aria-labelledby="simple-modal-title"
								aria-describedby="simple-modal-description"
							>
								<DialogTitle id="customized-dialog-title" >
									Instructions
								</DialogTitle>
								<DialogContent dividers >
									<Typography> Take one image from one corner, then walk to the opposite corner of the area and take another photo. See gif below. </Typography>
									<span  className="instgif">
										<img src={instructions}/>	
									</span>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				<Button className="joinparty" variant="contained" size="large" color="primary" onClick={() => this.props.setPage('store')}> Submit </Button>
			</div>
		);
	}
}

export default Photos;