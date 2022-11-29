import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import { Stack } from '@mui/material';
import CompleteTask from './CompleteTask';

const ListTasksHooks = ({ fetchItems, items, hideCompleted }) => {
	React.useEffect(() => {
		fetchItems();
	}, []);

	return (
		<div>
			<Grid container spacing={2} style={{ padding: '10px' }}>
				{items.map(item => (
					<Grid
						key={item.id}
						item
						style={{
							width: 'inherit',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							paddingTop: hideCompleted && item.isCompleted ? '0px' : '',
						}}
					>
						{hideCompleted && item.isCompleted ? null : (
							<Card>
								<Stack flexGrow={1} direction={'row'} justifyContent={'space-between'}>
									<CardContent>
										<Typography variant="h6" gutterBottom>
											{item.name}
										</Typography>
										{item.temprature && (
											<Typography component="p">
												<ThermostatIcon /> {item.temprature}
											</Typography>
										)}

										<br />
										<Typography color="textSecondary" styel={{ overflow: 'hidden' }}>
											{item.description}
										</Typography>
									</CardContent>
									<CardActions>
										<CompleteTask currentItem={item} onSuccess={fetchItems} />
										<EditTask currentItem={item} onSuccess={fetchItems} />
										<DeleteTask currentItem={item} onSuccess={fetchItems} />
									</CardActions>
								</Stack>
							</Card>
						)}
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default ListTasksHooks;
