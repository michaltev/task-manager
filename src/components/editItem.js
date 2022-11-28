import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import { getCityInName, getTempratureInCity } from '../services/cityWeatherService';

const EditTaskHooks = ({ currentItem, fetchItems }) => {
	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
		setName(currentItem.name);
		setDescription(currentItem.description);
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
		var itemDetails = {
			id: currentItem.id,
			name: name || currentItem.name,
			description: description || currentItem.description,
		};
		const cityInTask = getCityInName(itemDetails.name);
		if (cityInTask) {
			itemDetails.temprature = await getTempratureInCity(cityInTask);
		}
		await API.graphql(graphqlOperation(mutations.updateTask, { input: itemDetails }));
		handleClose();
		fetchItems();
	};

	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			<Button size="small" color="inherit" aria-label="Edit" onClick={handleClickOpen}>
				<EditIcon />
			</Button>

			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Edit Task: {currentItem.name}</DialogTitle>
				<DialogContent>
					<TextField
						style={{ marginRight: 10 }}
						id="name"
						value={name}
						placeholder={currentItem.name}
						label="Name"
						type="string"
						onChange={handleNameChange('name')}
					/>

					<TextField
						style={{ marginTop: 10 }}
						multiline
						id="description"
						value={description}
						placeholder={currentItem.description}
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
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditTaskHooks;
