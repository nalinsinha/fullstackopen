import { useState, useEffect } from "react";
import axios from "axios";
import Info from "./components/Info"

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
				find countries
				<input value={search} onChange={handleSearchChange}></input>
			</form>
			<Info countriesToShow={countriesToShow} setSearch={setSearch} />
		</div>
	);
}

export default App;
