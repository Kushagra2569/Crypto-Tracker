import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function Chart(props) {
    
    const DataFormater = (number) => {
        number = (parseFloat(number).toFixed(2));
        if(number > 1000000000){
          return ((parseFloat((number)/1000000000)).toFixed(2)).toString() + 'B';
        }else if(number > 1000000){
          return (parseFloat((number/1000000)).toFixed(2)).toString() + 'M';
        }else if(number > 1000){
          return (parseFloat((number/1000)).toFixed(2)).toString() + 'K';
        }else{
          return (parseFloat(number).toFixed(2));
        }
      }
    
    const PrevDay = (props.coinProp[0].price + props.coinProp[0].priceChange24h);
    const dataMin = ((PrevDay > props.coinProp[0].low24h)?props.coinProp[0].low24h:PrevDay);
    const dataMax = ((PrevDay < props.coinProp[0].high24h)?props.coinProp[0].high24h:PrevDay);
    
    const data = [{name: 'Previous Day', Price: PrevDay},{name: '24 Hour High', Price: props.coinProp[0].high24h},{name: '24 Hour Low', Price: props.coinProp[0].low24h},{name: 'Current Price', Price: props.coinProp[0].price}];

    return (
        <div className="chart">
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="Price" stroke="#d3bb9c" />
                <XAxis dataKey="name" />
                <YAxis domain={[(dataMin - (0.02*dataMin)),(dataMax + (0.02*dataMax))]} tickFormatter={DataFormater}/>
                <Tooltip formatter={DataFormater}/>
                <Legend />
            </LineChart>
        </div>
    )
}

export default Chart
