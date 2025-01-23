import React from 'react'
import Header  from "./Header.jsx"
import Content from './Content.jsx'

const Course = ({course}) => {
    console.log(course)
  return (
    <div>
      <Header Header = {course.name}/>
      <Content parts = {course.parts}/>
    </div>
  )
}

export default Course
