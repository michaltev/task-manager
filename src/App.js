import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import NavBar from './components/NavBar';
import ListTasks from './components/ListTasks';
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
	const [hideCompleted, setHideCompleted] = React.useState(true);

	const fetchItems = async isCompleted => {
		const data = await API.graphql(graphqlOperation(queries.listTasks));
		// sort by creation date in FE - if the data was paginated, the sort must have been in the query
		const sortedData = data.data.listTasks.items.sort(function (a, b) {
			return new Date(b.createdAt) - new Date(a.createdAt);
		});

		setItems(sortedData);
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
				<NavBar fetchItems={fetchItems} hideCompleted={hideCompleted} setHideCompleted={setHideCompleted} />
				<ListTasks fetchItems={fetchItems} items={items} hideCompleted={hideCompleted} />
			</div>
		</div>
	);
}

export default withAuthenticator(App);
