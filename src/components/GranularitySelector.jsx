import React, { useState } from 'react'
import Select from 'react-select';

const GranularitySelector = (props) => {
  const GRANULARITY_LEVELS = ['year', 'month']
  const data = GRANULARITY_LEVELS.map(element => {
    return {value:element, label:element}
  })
  const [options] = useState(data)

  return (
    <div style={
      {display: "flex", flexDirection: "column", padding: "20px"}}>
    <div style={
      {fontSize: "12px", fontWeight: "bold", color: "#444444"}}>
    Granularity:
    </div>
    <Select 
      options={options}
      defaultValue={{value:props.granularity, label:props.granularity}}
      onChange={props.onGranularitySelect}
    />
    </div>
  )
}

export default GranularitySelector