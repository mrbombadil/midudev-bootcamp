import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0));
  
  const randomNumber = () => {
    const randomSelection = parseInt((Math.random() * 6), 10);
    setSelected(randomSelection);    
  }

  const vote = () => {
    const copy = [ ...points ];
    copy[selected] = copy[selected] === undefined ? 1 : ++copy[selected];    
    setPoints(copy); 
  }

  const maxVotedAnecdote = points.indexOf(Math.max(...points));

  return (
    <div>
      <p>{props.anecdotes[selected]} - votos: {points[selected]}</p>
      <button onClick={randomNumber}>Siguiente</button><button onClick={vote}>Votar</button>
      <h2>El más votado:</h2>
      <p>{props.anecdotes[maxVotedAnecdote]} - votos: {points[maxVotedAnecdote]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
