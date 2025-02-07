
const Course = (props) => {
    const {course} = props;
    const {parts} = course;
    const total = parts.reduce((accumulator,currentValue) => accumulator + currentValue.exercises, 0)
    return (
     <div>
    <Header course={course} />
    <Content parts={parts} ></Content>
    <div>
       <strong> total of {total} exercises </strong>
    </div>
     </div>  
    )
}

const Header = ({ course }) => <h2>{course.name}</h2>

const Content = ({ parts }) => {
    return parts.map(part => <Part key = {part.id} part = {part}></Part>)
} 

const Part = ({ part }) => {
    return (<p>
    {part.name} {part.exercises}
     </p>)
}


export default Course