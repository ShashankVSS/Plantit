import React from 'react';
import './notification.css';
import NavDrawer from './navDrawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {Typography, Button} from '@material-ui/core'
import partieimg from './imgs/grass.jfif'
import partieimg1 from './imgs/roadold.jpg'
import partieimg2 from './imgs/treespond.jpg'

class Notification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {drawer: false};
	}


	render() {
		return(
      		<div id="notification">
				<NavDrawer page="Parties" setPage={this.props.setPage}/>
				<div id="cards">
				<Card className="partiecards">
					<CardActionArea>
					<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						Clear area that is in need of more trees! 🌳
					</Typography>
					</CardContent>
					<CardMedia>
						<img src={partieimg} className="img-container"/>
					</CardMedia>
					</CardActionArea>
				</Card>
				<Card className="partiecards">
					<CardActionArea>
					<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						This road could use some new trees.
					</Typography>
					</CardContent>
					<CardMedia>
						<img src={partieimg1} className="img-container"/>
					</CardMedia>
					</CardActionArea>
				</Card>
				<Card className="partiecards">
					<CardActionArea>
					<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						Who wants to come revitalize this old park!
					</Typography>
					</CardContent>
					<CardMedia>
						<img src={partieimg2} className="img-container"/>
					</CardMedia>
					</CardActionArea>
				</Card>
				</div>

				<Button className="redeem" variant="contained" size="large" color="primary"> Make A Party </Button>
			</div>
		);
	}
}

export default Notification;
