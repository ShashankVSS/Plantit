import React from 'react';
import { Button } from '@material-ui/core'
import './profile.css';

class Profile extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
      		<div id="profile">
				<div id="card">
					<img src="" alt="" />
                    <caption>Default Name</caption>

                    <div id="score">
                        default
                    </div>

					<Button> Redeem </Button>

				</div>
			</div>
		);
	}
}

export default Profile;