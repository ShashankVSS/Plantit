import React from 'react';
import { Select, Button, MenuItem } from '@material-ui/core'
import './plantparty.css';
import NavDrawer from './navDrawer';
import mapboxgl from 'mapbox-gl';

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
				<NavDrawer></NavDrawer>
				<div className="partyCard">

                    <label for="parties">Join Planting Party</label>

                    <Select name="parties" id="partyDrop">
                        <MenuItem>Default</MenuItem>
                    </Select>


                    <div ref={this.mapContainer} className="map-container" />

                </div>

                <Button>Submit</Button>
			</div>
		);
	}
}

export default Party;
