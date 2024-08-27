import React from 'react';
import { Bar, Line, Pie, Bubble } from "react-chartjs-2";


const Graph = ({title, HandleChange, HandleChange2, data, chart}) => {
    return (
        <div>
       <h1 className="text-black text-3xl font-bold justify-center text-center mb-4">{title}</h1>
      <div className="flex flex-row justify-center items-center space-x-2">
        <p>sort by </p>
        <select className="bg-yellow-400 rounded-sm text-black font-bold" onChange={HandleChange}>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
        <select className="bg-yellow-400 rounded-sm text-black font-bold" onChange={HandleChange2}>
          <option value='Line'>Line</option>
          <option value='Bar'>Bar</option>
          {/* <option value='Pie'>Pie</option>
          <option value='Bubble'>Bubble</option> */}
        </select>
      </div>
      <div>
        {
          chart === 'Line' ? <Line data={data} /> :  chart === 'Bar' ? <Bar data={data} /> : chart === 'Pie' ? <Pie data={data}/> : <Bubble data={data}/>
        }
      </div>
    </div>
    );
}

export default Graph;
