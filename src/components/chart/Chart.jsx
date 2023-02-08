
import './chart.scss'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
function Chart(props) {
    const data = [
        {
          name: 'January',
          count: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'February',
          count: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          count: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          count: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          count: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          count: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          count: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className='chart'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                {/* <YAxis dataKey='pv'/> */}
                <Tooltip />
                <Area type="natural" dataKey="count" stroke="#B8B5E8" fill="#B8B5E8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;