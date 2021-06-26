import React from 'react';
import './index.css';

import mapboxgl from '!mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hyaWtiIiwiYSI6ImNrcWRneW0xMDA4MHEyb3F2aGk5Mmpib2YifQ.9zMxUjgU0Vx5GXgh9FhFuA';

class Home extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            lng: -70.9,
            lat: 42.35,
            zoom: 9
            };
            this.mapContainer = React.createRef();
	}

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        }
        
	
	
	render() {
		return(
      		<div>
				
                <div ref={this.mapContainer} className="map-container" />

			</div>
		);
	}
};

