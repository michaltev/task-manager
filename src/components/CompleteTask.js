import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import { Checkbox } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const CompleteTaskHooks = ({ currentItem, onSuccess }) => {
	const [isLoading, setIsLoading] = React.useState(false);

	const handleChange = async e => {
		var itemDetails = {
			id: currentItem.id,
			name: currentItem.name,
			description: currentItem.description,
			isCompleted: e.target.checked,
		};
		setIsLoading(true);
		await API.graphql(graphqlOperation(mutations.updateTask, { input: itemDetails }));

		await onSuccess();

		setIsLoading(false);
	};

	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', marginRight: '8px' }}>
			{isLoading ? (
				<LoadingButton loading variant="outlined">
					{' '}
					S
				</LoadingButton>
			) : (
				<Checkbox
					checked={currentItem.isCompleted ?? false}
					onChange={handleChange}
					color="default"
					inputProps={{ 'aria-label': 'controlled' }}
				/>
			)}
		</div>
	);
};

export default CompleteTaskHooks;
