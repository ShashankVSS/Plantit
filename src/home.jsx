import React from 'react';
import './home.css';

import NavDrawer from './navDrawer';
import mapboxgl from 'mapbox-gl';

 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hyaWtiIiwiYSI6ImNrcWRneW0xMDA4MHEyb3F2aGk5Mmpib2YifQ.9zMxUjgU0Vx5GXgh9FhFuA';

class Home extends React.Component {
	constructor(props) {
		super(props);
        this.state = {drawer: false};
        this.mapContainer = React.createRef();
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
			if (all) {
				all.forEach(marker => {
				new mapboxgl.Marker()
					.setLngLat([parseFloat(marker.longitude), parseFloat(marker.latitude)])
					.setPopup(
					new mapboxgl.Popup({ offset: 25 }) // add popups
						.setHTML(
							'<h3>' +
							marker.data +
							'</h3>'
						)
					)
					.addTo(map);
				});
			}
			if (this.props.lon) {
			new mapboxgl.Marker().setLngLat([parseFloat(this.props.lon), parseFloat(this.props.lat)]).addTo(map);
			new mapboxgl.Marker().setLngLat([parseFloat(this.props.lon2), parseFloat(this.props.lat2)]).addTo(map);
			}
		});
    }

	toggleDrawer(open) {
		this.setState({drawer: open});
	}
	
	render() {
		return(
      		<div id="home">
				<NavDrawer page="Home" setPage={this.props.setPage}/>
                <div ref={this.mapContainer} className="map-container" />
			</div>
		);
	}
};

export default Home;
