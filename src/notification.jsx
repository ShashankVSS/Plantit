import React from 'react';
import './notification.css';
import NavDrawer from './navDrawer';


class Notification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {drawer: false};
	}


	render() {
		return(
      		<div id="notification">
				  <NavDrawer page="Parties" setPage={this.props.setPage}/>

				  
                <div>
                    cards
                </div>

				<button>Make a Party</button>
			</div>
		);
	}
}

export default Notification;
