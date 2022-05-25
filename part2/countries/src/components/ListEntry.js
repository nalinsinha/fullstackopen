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

export default ListEntry