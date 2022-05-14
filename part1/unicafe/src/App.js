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
	const [sum, setSum] = useState(0);
	const [total, setTotal] = useState(0);
	const handleGood = () => {
		setGood(good + 1)
		setTotal(total + 1)
		setSum(sum + 1)
	}
	const handleNeutral = () => {
		setNeutral(neutral + 1)
		setTotal(total + 1)
	}
	const handleBad = () => {
		setBad(bad + 1)
		setTotal(total + 1)
		setSum(sum - 1)
	}

	return <div>
		<Header text='give feedback'/>
		<Button text='good' handleClick={handleGood}/>
		<Button text='neutral'handleClick={handleNeutral}/>
		<Button text='bad' handleClick={handleBad}/>
		<Header text='statistics'/>
		<p>Good: {good}</p>
		<p>Neutral: {neutral}</p>
		<p>Bad: {bad}</p>
		<p>All: {sum}</p>
		<p>Average: {sum / total}</p>
		<p>positive: {(good/total) * 100}%</p>
	</div>;
};

export default App;
