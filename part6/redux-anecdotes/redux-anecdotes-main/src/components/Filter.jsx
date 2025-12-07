import React from "react";
import {useDispatch} from "react-redux"
import { setFilter } from "../reducers/filterSlice";
const Filter = () => {
  const style = {
    marginBottom: 10
  }
  const dispatch = useDispatch();
  const handleChange = () => {
    return dispatch(setFilter(event.target.value));
  }
  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter