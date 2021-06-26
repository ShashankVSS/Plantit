import React from 'react';
import './index.css';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import mapboxgl from 'mapbox-gl';
import logo from './imgs/logo.png';
 
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
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" >
							Home
						</Typography>
						<img src="logo"/>
					</Toolbar>
				</AppBar>
                <div ref={this.mapContainer} className="map-container" />

			</div>
		);
	}
};

export default Home;
