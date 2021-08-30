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

  return (
    <div>
      <Title text="Give FeedBack" />
      <Button handleClick={() => setGood(good +1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />      
      
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