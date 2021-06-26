import React from 'react';
import './store.css';
import NavDrawer from './navDrawer';

class Store extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
      		<div id='store'>

				<NavDrawer page="Store" setPage={this.props.setPage}/>

				more cards
			</div>
		);
	}
}

export default Store;
