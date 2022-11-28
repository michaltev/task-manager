import fetch from 'node-fetch';

import raw from '../data/cities.txt';

const OPENWEATHER_ACCESS_KEY = 'e6a5a1b360f0b49a67297af8ad2220fa';
const OPENWEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${OPENWEATHER_ACCESS_KEY}`;

export let cities = [];

export const readFile = () => {
	fetch(raw)
		.then(r => r.text())
		.then(text => {
			cities = text;
		});
};

export const getCityInName = taskName => {
	const match = fnMatches(cities, taskName);

	return match?.[0];
};

const fnMatches = (cities, str) => str.match(new RegExp(cities, 'i'));

export const getTempratureInCity = async cityName => {
	const url = `${OPENWEATHER_API_URL}&q=${cityName}`;

	const fetched = await fetch(url, {
		method: 'GET',
	});

	const weatherResult = await fetched.json();
	console.log({ ...weatherResult });
	return Math.ceil(weatherResult?.main?.temp) ?? null;
};
