import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  const {description} = props;
  return <h1> { description } </h1>;
}

const Excercise = (props) => {
  const {part, number} = props;
  
  return (
    <p>
      {part} {number}
    </p>
  )
}

const Content = (props) => {
  const {courses} = props;
  let courseList = [];
  courses.forEach((course, index)=>{
    courseList.push(<Excercise key={index} part={course.name} number={course.exercises} />)  
  })
  
  return (    
    courseList
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  console.log(course.parts[0].name)
  return (
    <div>
      <Header description={course.name} />
      <Content courses={course.parts} />  
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))