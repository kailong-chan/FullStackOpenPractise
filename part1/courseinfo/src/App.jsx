const App = () => {
    const course = 'Half Stack application development'

    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header title={course} />
            <Part part={part1.name} exercise={part1.exercises} />
            <Part part={part2.name} exercise={part2.exercises} />
            <Part part={part3.name} exercise={part3.exercises} />
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}

const Header = ({title}) =>
    <h1>{title}</h1>

const Part = ({part, exercise}) =>
    <p>{part}{exercise}</p>

const Total = ({total}) =>
    <p>Number of exercises {total}</p>

export default App