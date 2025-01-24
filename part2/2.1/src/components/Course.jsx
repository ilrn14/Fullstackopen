
const Course = (props) => {
    const {course} = props;
    return (
     <div>
    <Header course={course} />
    <Content parts={course.parts} ></Content>
     </div>  
    )
}

const Header = ({ course }) => <h1>{course.name}</h1>

const Content = ({ parts }) => {
    return parts.map(part => <Part key = {part.id} part = {part}></Part>)
} 

const Part = ({ part }) => {
    return (<p>
    {part.name} {part.exercises}
     </p>)
}

export default Course