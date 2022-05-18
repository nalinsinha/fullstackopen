import React from 'react'

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

export default Course