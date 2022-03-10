import React, { useState } from 'react'
import Select from 'react-select';

const BaseSelector = (props) => {
  const BASE_CURRENCIES = ['USD', 'EUR']
  const data = BASE_CURRENCIES.map(element => {
    return {value:element, label:element}
  })
  const [options] = useState(data)

  return (
    <div style={
      {display: "flex", flexDirection: "column", padding: "20px"}}>
    <div style={
      {fontSize: "12px", fontWeight: "bold", color: "#444444"}}>
    Base Currency:
    </div>
    <Select 
      options={options}
      defaultValue={{value:props.baseCurrency, label:props.baseCurrency}}
      onChange={props.onBaseCurrencySelect}
    />
    </div>
  )
}

export default BaseSelector