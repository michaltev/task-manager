import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import { getCityInName, getTempratureInCity } from '../services/cityWeatherService';

const AddTaskHooks = ({ fetchItems }) => {
	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleNameChange = name => event => {
		setName(event.target.value);
	};

	const handleDescriptionChange = description => event => {
		setDescription(event.target.value);
	};

	const handleSubmit = async e => {
		const itemDetails = {
			name: name,
			description: description,
		};

		const cityInTask = getCityInName(itemDetails.name);
		if (cityInTask) {
			itemDetails.temprature = await getTempratureInCity(cityInTask);
		}
		await API.graphql(graphqlOperation(mutations.createTask, { input: itemDetails }));
		handleClose();
		fetchItems();
	};

	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			<Button variant="fab" color="inherit" aria-label="Add" onClick={handleClickOpen}>
				<AddIcon /> Add a New Task
			</Button>

			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Add a New Task</DialogTitle>
				<DialogContent>
					<TextField id="name" label="Name" type="string" fullWidth onChange={handleNameChange('name')} />
					<TextField
						style={{ marginTop: 10 }}
						multiline
						id="description"
						label="Description"
						type="string"
						rows="4"
						fullWidth
						onChange={handleDescriptionChange('description')}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleSubmit} color="primary">
						Add Task
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AddTaskHooks;
