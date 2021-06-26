import React from 'react';
import { Button } from '@material-ui/core'
import './profile.css';
import NavDrawer from './navDrawer';
import testprofile from './imgs/testprofile.png'

class Profile extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
      		<div id="profile">

				<NavDrawer page="Profile" setPage={this.props.setPage}/>
				
				<div id="profile-card">
					<img src={testprofile} alt="" />
                    <div id="username">
                        Mr. ooga booga
                    </div>

                    <div id="score">
                        default
                    </div>

				</div>
				<Button className="redeem" variant="contained" size="large" color="primary" onClick={() => this.props.setPage('store')}> Redeem </Button>
			</div>
		);
	}
}

export default Profile;