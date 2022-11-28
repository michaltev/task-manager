let csvToJson = require('convert-csv-to-json');
const fs = require('fs');

const cities = [];
let locations = csvToJson.fieldDelimiter(',').getJsonFromCsv('worldcities.csv');
for (const location of locations) {
	cities.push(location.city);
}

fs.writeFileSync('cities.txt', JSON.stringify(cities.join('|')));
