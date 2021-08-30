import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Title = ({text}) => (
  <h1>{text}</h1>
)

const Ranking = ({text, value}) => (
  <p>{text}: {value}</p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setToValue = (rank) => {
    switch (rank){
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default: break;      
    }
    setAll(all + 1);
  }

  return (
    <div>
      <Title text="Give FeedBack" />
      <Button handleClick={() => setToValue("good")} text="good" />
      <Button handleClick={() => setToValue("neutral")} text="neutral" />
      <Button handleClick={() => setToValue("bad")} text="bad" />      
      
      <Title text="Statistics" />
      <Ranking text="Good" value={good} />
      <Ranking text="Neutral" value={neutral} />
      <Ranking text="Bad" value={bad} />
      <Ranking text="All" value={good + bad + neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)