import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import AddTask from './AddTask';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
const NavBarHooks = ({ fetchItems, hideCompleted, setHideCompleted }) => {
	const toggleHideCompleted = () => {
		setHideCompleted(!hideCompleted);
	};
	return (
		<AppBar position="static" color="default">
			<Toolbar>
				<Stack flexGrow={1} direction={'row'} justifyContent={'space-between'}>
					<Typography variant="h5" color="inherit">
						Those Are Your Tasks:
					</Typography>
					<Button variant="fab" color="inherit" aria-label="Hide" onClick={toggleHideCompleted}>
						{hideCompleted ? (
							<div style={{ display: 'flex' }}>
								<VisibilityIcon style={{ marginRight: '5px' }} /> Show Completed Tasks
							</div>
						) : (
							<div style={{ display: 'flex' }}>
								<VisibilityOffIcon style={{ marginRight: '5px' }} /> Hide Completed Tasks
							</div>
						)}
					</Button>
					<AddTask onSuccess={fetchItems} />
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default NavBarHooks;
