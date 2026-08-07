import Header from './Header.jsx'
import Content from './Content.jsx'

const Course = ({course}) => {
    return (
        <>
            <Header title={course.name} />
            <Content content={course.parts} />
        </>
    )
}

export default Course