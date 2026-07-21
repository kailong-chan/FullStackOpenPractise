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

    return (
        <div>
            <Header title={course.name} />
            <Part name={course.parts[0].name} exercises={course.parts[0].exercises} />
            <Part name={course.parts[1].name} exercises={course.parts[1].exercises} />
            <Part name={course.parts[2].name} exercises={course.parts[2].exercises} />
            <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
        </div>
    )
}

const Header = ({title}) =>
    <h1>{title}</h1>

const Part = ({name, exercises}) =>
    <p>{name} {exercises}</p>

const Total = ({total}) =>
    <p>Number of exercises {total}</p>

export default App