import ListEntry from "./ListEntry";
import Country from "./Country";

const Info = ({ countriesToShow, setSearch }) => {
	if (countriesToShow.length > 10) {
		return <p>Too many matches, specify another filter</p>;
	} else if (countriesToShow.length == 1) {
		return <Country country={countriesToShow[0]} />;
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

export default Info