import React from 'react';
import './store.css';
import NavDrawer from './navDrawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {Typography, Button} from '@material-ui/core';
import amazonGift from './imgs/amazon.png';
import lowesGift from './imgs/lowes.png';
import walmartGift from './imgs/walmart.png';
import cineplexGift from './imgs/cinplex.jpg';


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
								<img src={amazonGift} className="img-nuter"/>
						</CardMedia>
						<CardContent>
							<Button variant="contained" fullWidth size="large" color="primary">2500 Points</Button>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card className="storeCards">
					<CardActionArea>
						<CardMedia>
								<img src={lowesGift} className="img-nuter"/>
						</CardMedia>
						<CardContent>
							<Button variant="contained" fullWidth size="large" color="primary">5000 Points</Button>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card className="storeCards">
					<CardActionArea>
						<CardMedia>
								<img src={cineplexGift} className="img-nuter"/>
						</CardMedia>
						<CardContent>
							<Button variant="contained" fullWidth size="large" color="primary">4000 Points</Button>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card className="storeCards">
					<CardActionArea>
						<CardMedia>
								<img src={walmartGift} className="img-nuter"/>
						</CardMedia>
						<CardContent>
							<Button variant="contained" fullWidth size="large" color="primary">5000 Points</Button>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		);
	}
}

export default Store;
