import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import AppNavBar from './components/appNavBar';
import ListItems from './components/listItems';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { Stack } from '@mui/material';
import * as queries from './graphql/queries';

import { readFile } from './services/cityWeatherService';

import awsExports from './aws-exports';
import React from 'react';
Amplify.configure(awsExports);

function App({ signOut, user }) {
	readFile();

	const [items, setItems] = React.useState([]);

	const fetchItems = async () => {
		const data = await API.graphql(graphqlOperation(queries.listTasks));
		setItems(data.data.listTasks.items);
	};

	return (
		<div>
			<Stack flexGrow={1} direction={'row'} justifyContent={'space-between'}>
				<h1>Hello {user.username}</h1>
				<Button onClick={signOut}>
					<LogoutIcon />
				</Button>
			</Stack>

			<div>
				<AppNavBar fetchItems={fetchItems} />
				<ListItems fetchItems={fetchItems} items={items} />
			</div>
		</div>
	);
}

export default withAuthenticator(App);
