import { useState } from "react";

const Filter = ({search, handleSearchChange}) => {
	return (
		<form>
			<div>
				filter shown with <input value={search} onChange={handleSearchChange}/>
			</div>
		</form>
	)
}

const PersonForm = ({addName, newName, handleNameChange, newPhone, handlePhoneChange}) => {
	return(
		<form onSubmit={addName}>
			<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					number: <input value={newPhone} onChange={handlePhoneChange} />
				</div>
				<div>
					<button type="submit" >add</button>
			</div>
		</form>
	)
}

const Persons = ({ personsToShow }) => { 
	console.log("personstoShow: ", personsToShow)
	return (
		<>
			{
				personsToShow.map(person => <Person key={person.name} person={person}/>)
			}
		</>
	)
}

const Person = ({person}) => {
	return (
		<p key={person.name}>{person.name} {person.phone}</p>
	)
}

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: "040-1234567" }]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [showAll, setShowAll] = useState(true);
	const [search, setSearch] = useState("")

	
	const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().startsWith(search.toLowerCase(), 0))

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	};
	const handlePhoneChange = (event) => {
		setNewPhone(event.target.value)
	};
	const handleSearchChange = (event) => {
		setSearch(event.target.value)
		if(search.length === 0) {
			setShowAll(true)
		}
		else {
			setShowAll(false)
		}
	}
	const message = `${newName} is already added to phonebook`

	const addName = (event) => {
		event.preventDefault()
		if(persons.find(person => person.name === newName)) {
			alert(message)
		}
		else {
			const temp = {
				name: newName,
				phone: newPhone,
			}
			setPersons(persons.concat(temp))
		}
		setNewName("")
		setNewPhone("")
		
	}


	return (
		<div>
			<h2>Phonebook</h2>
			<Filter search={search} handleSearchChange={handleSearchChange}/>
			<h3>Add a new</h3>
			<PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
			<h3>Numbers</h3>
			<Persons personsToShow={personsToShow}/>
		</div>
	);
};

export default App;
