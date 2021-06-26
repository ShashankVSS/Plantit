import React from 'react';
import './notification.css';
import NavDrawer from './navDrawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class Notification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {drawer: false};
	}


	render() {
		return(
      		<div id="notification">
				  <NavDrawer page="Parties" setPage={this.props.setPage}/>



				<button>Make a Party</button>
			</div>
		);
	}
}

export default Notification;
