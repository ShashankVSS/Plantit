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
		this.state = {file: '', file2: '', lat: '', lon: '', lat2: '', lon2: '', description: '', modal: false};

		this.fileInput = React.createRef();
		this.fileInput2 = React.createRef();
		this.updateDesc = this.updateDesc.bind(this);
		this.updateFile = this.updateFile.bind(this);
		this.updateFile2 = this.updateFile2.bind(this);
		this.mapContainer = React.createRef();
	}
	
	componentDidMount() {
        const { lng, lat, zoom } = {lng: -79.685001, lat: 43.789044, zoom: 13};
        const map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
			attributionControl: false
        });
		
		this.map = map;
    }

	updateDesc(e) {
		this.setState({description: e.target.value});
	}
	
	async updateFile() {
        var osod = await this.geolocate();
		this.setState({file: this.fileInput.current.files[0], lat: osod.coords.latitude, lon: osod.coords.longitude});
    }

	async updateFile2() {
		var osod = await this.geolocate();
        this.setState({file2: this.fileInput2.current.files[0], lat2: osod.coords.latitude, lon2: osod.coords.longitude});
    }

	geolocate() {
		return new Promise((res, rej) => {
			navigator.geolocation.getCurrentPosition(res, rej, {enableHighAccuracy: true});
		});
	}

	render() {
		return(
      		<div id="photos">
				<canvas id="canvas" hidden></canvas>
				<NavDrawer page="Photos" setPage = {this.props.setPage}/>
					<div id="photos-card">
						<div>

							<Typography className="photodesc" variant="h6">Add an open plot</Typography>
							<TextField  id="outlined-basic" label="Description" variant="outlined" margin="normal" onChange={this.updateDesc}/>

							<input type="file" ref={this.fileInput} onChange={this.updateFile} id="file-input" accept="image/png" hidden/>
							<label htmlFor="file-input">
								<Button fullWidth className="imageSelect" variant="contained" color="primary" size="large" component="span" onClick={() => {
									new mapboxgl.Marker().setLngLat([-79.684987,43.788972]).addTo(this.map);
									
								}}
								>
									First Image
								</Button>
							</label>										
							<input type="file" ref={this.fileInput2} onChange={this.updateFile2} id="file-input2" accept="image/png" hidden/>
							<label htmlFor="file-input2">
								<Button fullWidth className="imageSelect" variant="contained" color="primary" size="large" component="span" onClick={() => {
								new mapboxgl.Marker().setLngLat([-79.685081,43.789137]).addTo(this.map)}}>
									Second Image
								</Button>
							</label>						43.789137, -79.685081				
							<div ref={this.mapContainer} className="map-container3" />
						</div>
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
				<Button className="joinparty" variant="contained" size="large" color="primary" onClick={() => {this.props.setPage('home'); this.props.setCoord(43.788972, -79.684987, 43.789137, -79.685081);}}> Submit </Button>
			</div>
		);
	}
}

export default Photos;