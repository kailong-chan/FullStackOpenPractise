import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from "./Total.jsx";

const Course = ({course}) => {
    return (
        <>
            <Header title={course.name} />
            <Content content={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course