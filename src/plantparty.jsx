import React from 'react';
import { Select, Button, MenuItem } from '@material-ui/core'
import './planparty.css';

class Party extends React.Component {
	constructor(props) {
		super(props);
	}
	//export prop states for location and then import them into map values to update?
	render() {
		return(
      		<div>
				<div>

                    <label for="parties">Join Planting Party</label>

                    <Select name="parties" id="partyDrop">
                        <MenuItem>Default</MenuItem>
                    </Select>


                    <div ref={this.mapContainer} className="map-container" />

                </div>

                <Button>Submit</Button>
			</div>
		);
	}
}

export default Party;
