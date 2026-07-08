const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
      <div>
        <Header course={course} />
        <Content part={part1} exercises={exercises1} />
        <Content part={part2} exercises={exercises2} />
        <Content part={part3} exercises={exercises3} />
        <Total exercises={exercises1 + exercises2 + exercises3} />
      </div>
  )
}

// render the name of the course
const Header = (props) => (
    <h1>{props.course}</h1>
)

// render the parts and the number of exercise
const Content = (props) => (
    <p>{props.part} {props.exercises}</p>
)

// render the total number of exercise
const Total = (props) => (
    <p>Number of exercises {props.exercises}</p>
)

export default App