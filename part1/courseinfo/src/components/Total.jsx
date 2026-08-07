const Total = ({ parts }) => {
    let totalExercises = 0

    console.log(parts)

    for (let i = 0; i < parts.length; i++) {
        totalExercises += parts[i].exercises
    }

    return (
        <p>total of {totalExercises} exercises</p>
    )
}


export default Total