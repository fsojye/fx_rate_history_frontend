import React, { useEffect, useState } from 'react'

import './App.css';
import { getCurrencyValue } from './apis';
import LineGraph from './components/LineGraph';
import { Controller } from './components/Controller';

const Main = () => {
  const [dataSet, setDataSet] = useState(null)
  const [symbols, setSymbols] = useState(['PHP'])
  const [startDate, setStartDate] = useState('1999-1-31')
  const [endDate, setEndDate] = useState('1999-1-31')
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [granularity, setGranularity] = useState('month')

  useEffect(() => {
    getCurrencyValue(symbols, startDate, endDate, baseCurrency, granularity)
    .then((data) => setDataSet(data))
  }, [symbols, startDate, endDate, baseCurrency, granularity])

  const onSymbolsSelect = (newValues) => {
    setSymbols(newValues.map((element)=> element.value))
  }

  const onGranularitySelect = (newValues) => {
    setGranularity(newValues.value)
  }

  const onBaseCurrencySelect = (newValues) => {
    setBaseCurrency(newValues.value)
  }

  const onStartDateSelect = (newValues) => {
    const d = new Date(newValues)
    setStartDate(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`)
  }

  const onEndDateSelect = (newValues) => {
    const d = new Date(newValues)
    setEndDate(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`)
  }

  return (
    <>
    <Controller
      symbols={symbols} 
      onSymbolsSelect={onSymbolsSelect}
      granularity={granularity}
      onGranularitySelect={onGranularitySelect}
      baseCurrency={baseCurrency}
      onBaseCurrencySelect={onBaseCurrencySelect}
      startDate={startDate}
      onStartDateSelect={onStartDateSelect} 
      endDate={endDate}
      onEndDateSelect={onEndDateSelect} 
      />
    <LineGraph symbols={symbols} baseCurrency={baseCurrency} dataSet={dataSet} />
    </>
  ) 
}

const App = () => {
  return (
    <Main />
  )
}

export default App;
