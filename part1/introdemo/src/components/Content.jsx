import Part1 from "./part/part1"
import Part2 from "./part/part2"
import Part3 from "./part/part3"

const Content = ({parts}) => {
  
  return (
    <>
    <Part1 Part1={parts[0]}/>
    <Part2 Part2={parts[1]}/>
    <Part3 Part3={parts[2]}/>
    </>
  )
}
export default Content