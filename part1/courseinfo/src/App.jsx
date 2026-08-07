import Course from "./components/Course.jsx";

const App = () => {
    const course = {
        id : 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id : 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id : 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id : 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id : 4
            }
        ]
    }

    // return (
    //     <div>
    //         <Header title={course.name} />
    //         <Part name={course.parts[0].name} exercises={course.parts[0].exercises} />
    //         <Part name={course.parts[1].name} exercises={course.parts[1].exercises} />
    //         <Part name={course.parts[2].name} exercises={course.parts[2].exercises} />
    //         <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    //     </div>
    // )

    return (
        <Course course={course} />
    )
}

// const Header = ({title}) =>
//     <h1>{title}</h1>

// const Part = ({name, exercises}) =>
//     <p>{name} {exercises}</p>

// const Total = ({total}) =>
//     <p>Number of exercises {total}</p>

export default App