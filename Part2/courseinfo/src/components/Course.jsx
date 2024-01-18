const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
  
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

export default Course