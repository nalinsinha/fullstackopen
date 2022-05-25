import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
	const [weather, setWeather] = useState(null);
	useEffect(() => {
		console.log(
			"https://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital[0]}"
		);
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&APPID=${process.env.REACT_APP_API_KEY}`
			)
			.then((response) => {
				setWeather(response.data);
				console.log(response.data);
				console.log("weather: ", weather);
			});
	}, [country, weather]);
	let icon = "";
	
	if (weather) {
		console.log(weather);
		console.log("w: ", Object.keys(weather.weather));
		icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
		return (
			<>
				<h1>{country.name.common}</h1>
				<p>capital {country.capital[0]}</p>
				<p>area {country.area}</p>
				<h3>languages</h3>
				<ul>
					{Object.values(country.languages).map((prop) => (
						<li key={prop}>{prop}</li>
					))}
				</ul>
				<img src={country.flags.png} />
				<h2>Weather in {country.capital}</h2>
				<p>Temperature {(weather.main.temp - 273)}</p>
				<img src={icon} />
				<p>Wind {weather.wind.speed} m/s</p>
			</>
		);
	}
	else {
		return (
			<>
				<h1>{country.name.common}</h1>
				<p>capital {country.capital[0]}</p>
				<p>area {country.area}</p>
				<h3>languages</h3>
				<ul>
					{Object.values(country.languages).map((prop) => (
						<li key={prop}>{prop}</li>
					))}
				</ul>
				<img src={country.flags.png} />
				<h2>Weather in {country.capital} unavailable</h2>
			</>
		);
	}
	
};

export default Country