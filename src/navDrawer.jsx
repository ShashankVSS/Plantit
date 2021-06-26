import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, ListItem, List, ListItemText, ListItemIcon  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';

import logo from './imgs/logo.png';

class NavDrawer extends React.Component {
	constructor(props) {
		super(props);
        this.state = {drawer: false};
	}

	toggleDrawer(open) {
		this.setState({drawer: open});
	}
	
	render() {
		return(
      		<div id="navDrawer">
				<AppBar position="static" className="tb">
					<Toolbar >
						<IconButton edge="start" color="inherit" onClick={() => this.toggleDrawer(true)}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">
							{this.props.page}
						</Typography>
						<img src={logo} className="tblogo"/>
					</Toolbar>
				</AppBar>
				<Drawer anchor={"left"} open={this.state.drawer} onClose={() => this.toggleDrawer(false)}>
                    <div>
                    <List className="sidebar">
                        <ListItem button key="Home" onClick={() => this.props.setPage('home')}>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button key="Parties" onClick={() => this.props.setPage('notification')}>
                            <ListItemIcon><GroupIcon/></ListItemIcon>
                            <ListItemText primary="Parties" />
                        </ListItem>
                        <ListItem button key="Take Photo" onClick={() => this.props.setPage('photos')}>
                            <ListItemIcon><AddAPhotoIcon/></ListItemIcon>
                            <ListItemText primary="Take Photo" />
                        </ListItem>
                        <ListItem button key="Join Party" onClick={() => this.props.setPage('planparty')}>
                            <ListItemIcon><GroupAddIcon/></ListItemIcon>
                            <ListItemText primary="Join Party" />
                        </ListItem>
                        <ListItem button key="Profile" onClick={() => this.props.setPage('profile')}>
                            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        <ListItem button key="Store" onClick={() => this.props.setPage('store')}>
                            <ListItemIcon><StorefrontIcon/></ListItemIcon>
                            <ListItemText primary="Store" />
                        </ListItem>
                    </List>
                    </div>
				</Drawer>
			</div>
		);
	}
};

export default NavDrawer;
