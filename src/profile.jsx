import React from 'react';
import { Button, Typography } from '@material-ui/core'
import './profile.css';
import NavDrawer from './navDrawer';
import testprofile from './imgs/testprofile.png';
import stars from './imgs/1200px-Golden_star.svg.png';


class Profile extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
      		<div id="profile">

				<NavDrawer page="Profile" setPage={this.props.setPage}/>
				
				<div id="profile-card">
					<img src={this.props.userImage} alt="" />
                    <div>
					<Typography variant="h5" id="username">
                        {this.props.userName}
                    </Typography>

                    <Typography variant="h5" id="score">
                        {this.props.userPoints}
                    </Typography>

					<img src="{stars}"/>


					</div>

				</div>
				<Button className="redeem" variant="contained" size="large" color="primary" onClick={() => this.props.setPage('store')}> Redeem </Button>
			</div>
		);
	}
}
Profile.defaultProps = {userName: "Mr.Ooga Booga", userPoints: 76547643, stars: "0", userImage: testprofile};

export default Profile;