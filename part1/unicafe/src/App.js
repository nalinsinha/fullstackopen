import { useState } from "react";

const Header = ({text}) => {
	return <h1>{text}</h1>;
};

const Button = ({text, handleClick}) => {
	return (
		<button onClick={handleClick}>
			{text}
		</button>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return <div>
		<Header text='give feedback'/>
		<Button text='good' handleClick={() => setGood(good + 1)}/>
		<Button text='neutral'handleClick={() => setNeutral(neutral + 1)}/>
		<Button text='bad' handleClick={() => setBad(bad + 1)}/>
		<Header text='statistics'/>
		<p>Good: {good}</p>
		<p>Neutral: {neutral}</p>
		<p>Bad: {bad}</p>
	</div>;
};

export default App;
