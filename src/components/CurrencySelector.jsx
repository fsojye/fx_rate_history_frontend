import React, { useState } from 'react'
import Select from 'react-select';

import { iso4217, AVAILABLE_CURRENCY_CODES } from '../common/constants';


const getISO4217 = (codes) => {
  return codes.map((element, index) => {
    try {
      return {value: element, label: iso4217[element]['name']}
    } catch (error) {
      return {value: element, label: element}
    }
  })
}
const CurrencySelector = (props) => {
  const data = getISO4217(AVAILABLE_CURRENCY_CODES)
  const [options] = useState(data)

  return (
    <div style={
      {display: "flex", flexDirection: "column", padding: "20px"}}>
    <div style={
      {fontSize: "12px", fontWeight: "bold", color: "#444444"}}>
    Currencies:
    </div>
    <Select 
      options={options}
      defaultValue={getISO4217(props.symbols)}
      onChange={props.onSymbolsSelect}
      isMulti={true} />
    </div>
  )
}

export default CurrencySelector