const App = () => {
    const course = 'Half Stack application development'
    // const part1 = {
    //     name: 'Fundamentals of React',
    //     exercises: 10
    // }
    // const part2 = {
    //     name: 'Using props to pass data',
    //     exercises: 7
    // }
    // const part3 = {
    //     name: 'State of a component',
    //     exercises: 14
    // }

    // pass array as props
    const parts = [
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

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            {/*<Total exercises={part1.exercises + part2.exercises + part3.exercises} />*/}
            <Total parts={parts} />
        </div>
    )
}

// render the name of the course
const Header = (props) => (
    <h1>{props.course}</h1>
)

// render the parts and the number of exercise
const Content = ({parts}) => {
    return (
        <div>
            <p>{parts[0].name} {parts[0].exercises}</p>
            <p>{parts[1].name} {parts[1].exercises}</p>
            <p>{parts[2].name} {parts[2].exercises}</p>
        </div>
    )
}

// render the total number of exercise
const Total = ({parts}) => (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
)

export default App