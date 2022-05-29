import { useState, useEffect } from "react";
import axios from "axios";
import entry from "./services/entry";
import PersonForm from "./components/PersonFrom";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Notification from "./components/Notification"

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-1234567" },
	]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [showAll, setShowAll] = useState(true);
	const [search, setSearch] = useState("");
	const [updateMessage, setUpdateMessage] = useState("");

	useEffect(() => {
		console.log("effect");
		entry.getAll().then((response) => {
			setPersons(response.data);
		});
	}, []);

	const personsToShow = showAll
		? persons
		: persons.filter((person) =>
				person.name.toLowerCase().startsWith(search.toLowerCase(), 0)
		  );

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};
	const handlePhoneChange = (event) => {
		setNewPhone(event.target.value);
	};
	const handleSearchChange = (event) => {
		setSearch(event.target.value);
		if (event.target.value.length === 0) {
			setShowAll(true);
		} else {
			setShowAll(false);
		}
	};
	const deleteUser = (id) => {
		entry.del(id).then((response) => {
			let newPersons = persons.filter((person) => person.id !== id);
			setPersons(newPersons);
		});
	};
	const message = `${newName} is already added to phonebook, replace the old number with a new one?`;

	const addName = (event) => {
		event.preventDefault();
		if (persons.find((person) => person.name === newName)) {
			if (window.confirm(message)) {
				entry
					.update(
						persons.find((person) => person.name === newName).id,
						{
							name: newName,
							number: newPhone,
						}
					)
					.then((response) => {
						setPersons(
							persons.map((person) =>
								person.name === newName ? response.data : person
							)
						);
					});
				setUpdateMessage(`Updated ${newName}`);
				setTimeout(() => {
					setUpdateMessage(null);
				}, 5000);
			}
		} else {
			const temp = {
				name: newName,
				number: newPhone,
				id: persons.length + 1,
			};
			entry.create(temp).then((response) => {
				setPersons(persons.concat(response.data));
			});
			setUpdateMessage(`Updated ${newName}`);
			setTimeout(() => {
				setUpdateMessage(null);
			}, 5000);
		}
		setNewName("");
		setNewPhone("");
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={updateMessage}/>
			<Filter search={search} handleSearchChange={handleSearchChange} />
			<h3>Add a new</h3>
			<PersonForm
				addName={addName}
				newName={newName}
				handleNameChange={handleNameChange}
				newPhone={newPhone}
				handlePhoneChange={handlePhoneChange}
			/>
			<h3>Numbers</h3>
			<Persons personsToShow={personsToShow} deleteUser={deleteUser} />
		</div>
	);
};

export default App;
