import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import EditItem from './editItem';
import DeleteItem from './deleteItem';
import { Stack } from '@mui/material';

const ListItemsHooks = ({ fetchItems, items }) => {
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
							'flex-direction': 'column',
							'justify-content': 'space-between',
						}}
					>
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
									<EditItem currentItem={item} fetchItems={fetchItems} />
									<DeleteItem currentItem={item} fetchItems={fetchItems} />
								</CardActions>
							</Stack>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default ListItemsHooks;
