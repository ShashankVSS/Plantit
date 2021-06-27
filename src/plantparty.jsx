import React from 'react';
import { Select, Button, MenuItem, Typography } from '@material-ui/core'
import './plantparty.css';
import NavDrawer from './navDrawer';
import mapboxgl from 'mapbox-gl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

class Party extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selected: ''};

		this.mapContainer = React.createRef();
		this.updateSelect = this.updateSelect.bind(this);
	}

	componentDidMount() {
        const { lng, lat, zoom } = {lng: -79.685001, lat: 43.789044, zoom: 12};
        const map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
			attributionControl: false
        });

		let all;
		this.props.getAll().then(points => {
			all = points;
		});

		map.on('load', () => {
			if (!all) {
				var drop = document.getElementById('dropdown');
				all.forEach(marker => {
					new mapboxgl.Marker()
					.setLngLat([parseInt(marker.longitude), parseInt(marker.latitude)])
					.setPopup(
					new mapboxgl.Popup({ offset: 25 }) // add popups
						.setHTML(
							'<h3>' +
							marker.data +
							'</h3>'
						)
					)
					.addTo(map);

					var op = document.createElement('option');
					op.innerHTML = marker.data;
					op.value = marker.data;
					drop.appendChild(op);
				});
			}
			if (this.props.lon) {
				new mapboxgl.Marker().setLngLat([parseFloat(this.props.lon), parseFloat(this.props.lat)]).addTo(map);
				new mapboxgl.Marker().setLngLat([parseFloat(this.props.lon2), parseFloat(this.props.lat2)]).addTo(map);
				}
		});
    }

	updateSelect(e) {
		this.setState({selected: e.target.value});
	}
	
	//export prop states for location and then import them into map values to update?
	render() {
		return(
      		<div id="plantparty">
				<NavDrawer page="Join Party" setPage = {this.props.setPage}></NavDrawer>
				<div className="partyCard">

                    <Typography>Join Planting Party</Typography>
					<FormControl className="partyoptions">
						<InputLabel htmlFor="age-native-simple">Available Planting Parties</InputLabel>
						<Select id="dropdown" native value={this.state.selected} onChange={this.updateSelect}>
						<option>Park Revitalization</option>
						<option>Dry Alley</option>
						</Select>
					</FormControl>

                    <div ref={this.mapContainer} className="map-container2" />

                </div>

                <Button className="joinparty" variant="contained" size="large" color="primary" onClick={() => this.props.setPage('store')}> Submit </Button>
			</div>
		);
	}
}

export default Party;
