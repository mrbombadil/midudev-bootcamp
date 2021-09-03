import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  const {description} = props;
  return <h1> { description } </h1>;
}

const Excercise = (props) => {
  const {name, number} = props;
  
  return (
    <li>
      <p>
        {name} {number}
      </p>
    </li>
  )
}

const TotalExcercises = ({parts}) => {
  return (    
    <p>Ejercicios totales:
      {
        parts.reduce((prevValue, currentValue) => {
          return (
            prevValue + currentValue.exercises
          )
        }, 0)
      }
    </p> 
  )
}
const Content = ({parts}) => {
  return (    
    <div>
      <ul>
      {
        parts.map(part => {          
          return (               
            <Excercise key={part.id} name={part.name} number={part.exercises} />
          )
        })
      }
      </ul>
      <TotalExcercises parts={parts} />
    </div>

  )
}

const Course = ({course}) => {
  const {name, parts} = course;
  return (
    <li>
      <Header description={name}/>
      <Content parts={parts} />    
    </li>
  );
}

const Courses = ({courses}) => {
  return (    
    <ul>
      {
        courses.map(course => {          
          return (                           
            <Course key={course.id} course={course} />            
          )
        })
      }
      </ul>    
  );
}


/*
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
*/
const App = () => {
  /*const course = {
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
  }*/

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))