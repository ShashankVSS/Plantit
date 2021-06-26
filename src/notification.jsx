import React from 'react';
import './notification.css';
import NavDrawer from './navDrawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Typography} from '@material-ui/core'
import partieimg from './imgs/maptest.png'

class Notification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {drawer: false};
	}


	render() {
		return(
      		<div id="notification">
				<NavDrawer page="Parties" setPage={this.props.setPage}/>
				<Card className="partiecards">
					<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles
					</Typography>
					</CardContent>
					<CardMedia>
						<img src={partieimg} className="img-container"/>
					</CardMedia>
				</Card>


				<button>Make a Party</button>
			</div>
		);
	}
}

export default Notification;
