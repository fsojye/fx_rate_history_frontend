import React from 'react'

import CurrencySelector from './CurrencySelector'
import GranularitySelector from './GranularitySelector'
import BaseSelector from './BaseSelector'
import { StartDatePicker, EndDatePicker} from './DatePicker'

export const Controller = (props) => {
  return (
    <>
    <div style={{
      display: "flex",
    }}>
    <CurrencySelector 
      symbols={props.symbols}
      onSymbolsSelect={props.onSymbolsSelect}
    />
    <BaseSelector 
      baseCurrency={props.baseCurrency}
      onBaseCurrencySelect={props.onBaseCurrencySelect}
    />
    <GranularitySelector 
      granularity={props.granularity}
      onGranularitySelect={props.onGranularitySelect}
    />
    </div>
    <div style={{
      display: "flex",
    }}>
    <StartDatePicker
      startDate={props.startDate}
      onStartDateSelect={props.onStartDateSelect}
    />
    <EndDatePicker
      endDate={props.endDate}
      onEndDateSelect={props.onEndDateSelect}
    />
    </div>
    </>
  )
}
