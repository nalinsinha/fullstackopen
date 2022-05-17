const Header = ({ text }) => <h1>{text}</h1>;

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;



const Course = ({course}) => {
	let total = 0
	return (
		<>
			<Header text={course.name} />
			{
				course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
			}
			<Total sum={course.parts.map(part => part.exercises).reduce((a, b) => a + b, 0)} />
		</>

	)
		
}

const App = () => {
	const course = {
		id: 1,
		name: 'Half Stack application development',
		parts: [
		  {
			name: 'Fundamentals of React',
			exercises: 10,
			id: 1
		  },
		  {
			name: 'Using props to pass data',
			exercises: 7,
			id: 2
		  },
		  {
			name: 'State of a component',
			exercises: 14,
			id: 3
		  }
		]
	  }
	
	  return <Course course={course} />
};

export default App;
