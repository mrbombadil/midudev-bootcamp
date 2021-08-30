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
  /*const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)*/

  const [ranking, setRanking] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0
  })

  const setToValue = rank => {
    ranking[rank] !== undefined && setRanking({
      ...ranking,
      [rank]: ranking[rank] + 1,
      all: ranking.all + 1 
    });    
  }

  return (
    <div>
      <Title text="Give FeedBack" />
      <Button handleClick={() => setToValue("good")} text="good" />
      <Button handleClick={() => setToValue("neutral")} text="neutral" />
      <Button handleClick={() => setToValue("bad")} text="bad" />      
      
      <Title text="Statistics" />
      <Ranking text="Good" value={ranking.good} />
      <Ranking text="Neutral" value={ranking.neutral} />
      <Ranking text="Bad" value={ranking.bad} />
      <Ranking text="All" value={ranking.good + ranking.bad + ranking.neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)