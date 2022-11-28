import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddItem from './addItem';
import { Stack } from '@mui/system';

const NavBarHooks = ({ fetchItems }) => {
	return (
		<AppBar position="static" color="default">
			<Toolbar>
				<Stack flexGrow={1} direction={'row'} justifyContent={'space-between'}>
					<Typography variant="h5" color="inherit">
						Those Are Your Tasks:
					</Typography>
					<AddItem fetchItems={fetchItems} />
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default NavBarHooks;
