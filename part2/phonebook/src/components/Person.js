const Person = ({ person, deleteUser }) => {
	const del = () => {
		if (window.confirm(`Delete ${person.name}?`)) {
			deleteUser(person.id);
		}
	};
	return (
		<div>
			<p>
				{person.name} {person.number}
			</p>
			<button onClick={del}>delete</button>
		</div>
	);
};

export default Person;
