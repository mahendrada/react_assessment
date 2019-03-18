import React from 'react'
import moment from 'moment'

import {
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  LineChart
} from 'recharts'

const TimeSeriesChart = ({ chartData }) => {
  const formatter = (value, name, props) => {
    return ["Time- ", moment(value).format('HH:mm Do')]
  }
  return (
  <ResponsiveContainer width ='100%' height ='100%'>
    <LineChart width='100%' height='100%' data={chartData}>
      <XAxis
        dataKey = 'time'
        domain = {['auto', 'auto']}
        name = 'Time'
        tickFormatter = {(unixTime) => moment(unixTime).format('HH:mm Do')}
        type = 'number'
      />
      <YAxis dataKey = 'temperature' 
      domain = {['auto', 'auto']}
      name = 'Temperature' />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Tooltip labelFormatter={formatter} />
      <Line type="monotone" dataKey="temperature" stroke="#8884d8" legendType="line" dot={false}/>
    </LineChart>
  </ResponsiveContainer>)
}

export default TimeSeriesChart


// <ScatterChart>
// <XAxis
//   dataKey = 'time'
//   domain = {['auto', 'auto']}
//   name = 'Time'
//   tickFormatter = {(unixTime) => moment(unixTime).format('HH:mm Do')}
//   type = 'number'
// />
// <YAxis dataKey = 'temperature' 
// domain = {['auto', 'auto']}
// name = 'Temperature' />
// <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>

// <Scatter
//   data = {chartData}
//   line = {{ stroke: '#8884d8' }}
//   name = 'Temperatur of the drone for the past 30 mins'
// />

// </ScatterChart>