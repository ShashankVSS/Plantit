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
		this.mapContainer = React.createRef();
	}

	componentDidMount() {
        const { lng, lat, zoom } = {lng: -117.5443667, lat: 33.8354925, zoom: 9};
        const map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
			attributionControl: false
        });
    }
	//export prop states for location and then import them into map values to update?
	render() {
		return(
      		<div id="plantparty">
				<NavDrawer page="Join Party" setPage = {this.props.setPage}></NavDrawer>
				<div className="partyCard">

                    <Typography for="parties">Join Planting Party</Typography>

					<FormControl className="partyoptions">
						<InputLabel htmlFor="age-native-simple">Available Planting Parties</InputLabel>
						<Select
							onChange=""
							>
							<option aria-label="None" value="" />
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
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
