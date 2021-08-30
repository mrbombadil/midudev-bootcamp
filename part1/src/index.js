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
  const [ranking, setRanking] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    avg: 0,
    positives: 0
  })

  const setToValue = rank => {
    if(ranking[rank] !== undefined){
      let newRanking = {
        ...ranking,
        [rank]: ranking[rank] + 1,      
        all: ranking.all + 1      
      }

      newRanking = {
        ...newRanking,      
        avg: ((ranking.good - ranking.bad) * 100)/ ranking.all,
        positives: (ranking.good * 100) / ranking.all
      }

      setRanking(newRanking);
    }

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
      <Ranking text="All" value={ranking.all} />
      <Ranking text="Average" value={ranking.avg} />
      <Ranking text="Positives" value={ranking.positives + '%'} />
    </div>
  )
}



ReactDOM.render(<App />, 
  document.getElementById('root')
)