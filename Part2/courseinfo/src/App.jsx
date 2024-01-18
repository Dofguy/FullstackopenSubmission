const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  console.log(parts)

  const total = parts.reduce((sum, part) => {
    console.log('what is happening', sum, part)
    return sum + part.exercises
  }, 0)

  return (
    <b>
      total of {total} exercises
    </b>
  )
}


const Part = ({ part }) => {
  console.log(part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return(
    <>
      {parts.map(part => 
        <Part key={part.id} part={part}/>
      )}  
    </>
  )
}

const Course = ({ course }) => {
  console.log(course)
  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

const App = () => {
  const course = {
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
  }

  return <Course course={course} />
}

export default App