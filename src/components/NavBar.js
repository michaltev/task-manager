import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import AddTask from './AddTask';

const NavBarHooks = ({ fetchItems }) => {
	return (
		<AppBar position="static" color="default">
			<Toolbar>
				<Stack flexGrow={1} direction={'row'} justifyContent={'space-between'}>
					<Typography variant="h5" color="inherit">
						Those Are Your Tasks:
					</Typography>
					<AddTask onSuccess={fetchItems} />
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default NavBarHooks;
