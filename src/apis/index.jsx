import axios from 'axios'

// const sendRequestToApi = async (url) => {
//   const response = await axios.get(url)
//   return response.data
// }

export const getCurrencyValue = async (symbols, start, end, base = 'EUR', granularity='year') => {
  const host = 'http://localhost:5000'
  const url = `${host}/rates?symbols=${symbols}&start=${start}&end=${end}&granularity=${granularity}`

  console.log(url)
  const response = await axios.get(url)

  let dataSet = response.data

  if (base !== 'EUR') {
    Object.entries(dataSet).forEach(([symbol, value]) => {
      Object.entries(value).forEach(([date, amount]) => {
        dataSet.EUR[date] = dataSet.EUR[date] / dataSet[base][date]
        dataSet[symbol][date] = amount / dataSet[base][date]
      })
    })
  }

  // return {
  //   labels: Object.keys(dataSet.PHP).sort((a, b) => { return a - b })
  //   dataSets
  // }
  return dataSet
}