import React from 'react';
import './store.css';
import NavDrawer from './navDrawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {Typography, Button} from '@material-ui/core';
import amazonGift from './imgs/amazon.jpg';
import lowesGift from './imgs/lowes.png';
import walmartGift from './imgs/walmart.png';
import cineplexGift from './imgs/cinplex.jpg';
import Dialog from '@material-ui/core/Dialog';
import DialogAction from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class Store extends React.Component {
	constructor(props) {
		super(props);
		this.state = {confirmBox: false, choice: ""};
	}
	
	setOpen(){
		this.setState.confirmBox(true);
	}

	setClose(){
		this.setState.confirmBox(false);

	}

	render() {
		return(
      		<div id='store'>
			<NavDrawer page="Store" setPage={this.props.setPage}/>
				<Dialog
					open={this.state.confirmBox}
					onClose={() => this.setState({confirmBox: false})}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Confirm Exchange"}</DialogTitle>
					<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are you sure you want to exchange your points to {this.state.choice}?
					</DialogContentText>
					</DialogContent>
					<DialogAction>
						<Button variant="contained" fullWidth size="large" color="primary" onClick={()=> this.setState({confirmBox: false})}>Cancel</Button>
						<Button variant="contained" fullWidth size="large" color="primary" onClick={()=> this.setState({confirmBox: false})}>Confirm</Button>
					</DialogAction>
				</Dialog>
				<Card className="storeCards">
					<CardActionArea>
						<CardMedia>
								<span className="purchase">
								<img src={amazonGift} className="img-nuter"/>
								</span>
						</CardMedia>
						<CardContent>
							<Button variant="contained" fullWidth size="large" color="primary" onClick={() => this.setState({confirmBox: true, choice: "Amazon"})}>2500 Points</Button>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card className="storeCards">
					<CardActionArea>
						<CardMedia>
							<span className="purchase">
								<img src={lowesGift} className="img-nuter"/>
							</span>
						</CardMedia>
						<CardContent>
							<Button variant="contained" fullWidth size="large" color="primary" onClick={() => this.setState({confirmBox: true, choice: "Lowes"})}>5000 Points</Button>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card className="storeCards">
					<CardActionArea>
						<CardMedia>
							<span className="purchase">
								<img src={cineplexGift} className="img-nuter"/>
							</span>
						</CardMedia>
						<CardContent>
							<Button variant="contained" fullWidth size="large" color="primary" onClick={() => this.setState({confirmBox: true, choice: "Cineplex"})}>4000 Points</Button>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card className="storeCards">
					<CardActionArea>
						<CardMedia>
							<span className="purchase">
								<img src={walmartGift} className="img-nuter"/>
							</span>
						</CardMedia>
						<CardContent>
							<Button variant="contained" fullWidth size="large" color="primary" onClick={() => this.setState({confirmBox: true, choice: "Walmart"})}>5000 Points</Button>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		);
	}
}

export default Store;
