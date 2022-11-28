import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';

const DeleteTaskHooks = ({ currentItem, fetchItems }) => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = async () => {
		var itemDetails = {
			id: currentItem.id,
		};
		await API.graphql(graphqlOperation(mutations.deleteTask, { input: itemDetails }));
		handleClose();
		fetchItems();
	};

	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			<Button size="small" color="inherit" aria-label="Add" onClick={handleClickOpen}>
				<DeleteIcon />
			</Button>

			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Are you sure you want to delete task: {currentItem.name}?</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleDelete} color="primary">
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default DeleteTaskHooks;
