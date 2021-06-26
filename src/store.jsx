import React from 'react';
import './store.css';
import NavDrawer from './navDrawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {Typography, Button} from '@material-ui/core';
import amazonGift from './imgs/amazongift.png';


class Store extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
      		<div id='store'>
			<NavDrawer page="Store" setPage={this.props.setPage}/>

				<Card className="storeCards">
					<CardActionArea>
						<CardMedia>
								<img src={amazonGift} className="img-container"/>
						</CardMedia>
					</CardActionArea>
				</Card>

			</div>
		);
	}
}

export default Store;
