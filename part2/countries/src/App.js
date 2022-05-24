import { useState, useEffect } from "react";
import axios from "axios";

const Info = ({ countriesToShow, setSearch }) => {
	if (countriesToShow.length > 10) {
		return <p>Too many matches, specify another filter</p>;
	} else if (countriesToShow.length == 1) {
		let country = countriesToShow[0];
		console.log("languages:---", country.languages);
		return (
			<>
				<h1>{country.name.common}</h1>
				<p>capital {country.capital[0]}</p>
				<p>area {country.area}</p>
				<h3>languages</h3>
				<ul>
					{Object.values(country.languages).map((prop) => (
						<li>{prop}</li>
					))}
				</ul>
				<img src={country.flags.png} />
			</>
		);
	} else {
		return (
			<form>
				{countriesToShow.map((country) => (
					<ListEntry
						key={country.area}
						country={country}
						setSearch={setSearch}
					/>
				))}
			</form>
		);
	}
};

const ListEntry = ({ country, setSearch }) => {
	const changeSearch = () => {
		setSearch(country.name.common);
	};
	return (
		<div>
			{country.name.common}
			<button onClick={changeSearch}>show</button>
		</div>
	);
};

function App() {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		console.log("effect");
		axios.get("https://restcountries.com/v3.1/all").then((response) => {
			console.log("promise fulfilled");
			setCountries(response.data);
		});
	}, []);

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const countriesToShow = countries.filter((country) =>
		country.name.common.toLowerCase().includes(search.toLowerCase())
	);
	if (countries[0]) {
		console.log(countries[0]);
	}

	return (
		<div>
			<form>
				find countries{" "}
				<input value={search} onChange={handleSearchChange}></input>
			</form>
			<Info countriesToShow={countriesToShow} setSearch={setSearch} />
		</div>
	);
}

export default App;
