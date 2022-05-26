import Person from "./Person";

const Persons = ({ personsToShow, deleteUser }) => {
	console.log("personstoShow: ", personsToShow);
	return (
		<>
			{personsToShow.map((person) => (
				<Person
					key={person.name}
					person={person}
					deleteUser={deleteUser}
				/>
			))}
		</>
	);
};

export default Persons;
