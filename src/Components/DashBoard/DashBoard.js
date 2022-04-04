import React, { useEffect, useState } from "react";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";
import { BarChart, Bar } from "recharts";
import "./DashBoard.css"

const DashBoard = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json"
    )
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="chart-cart">
      <div>
        <LineChart
          width={500}
          height={300}
          data={datas}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sell"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
        <p>Total sells in every month</p>
      </div>

      <div>
        <BarChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
        <p>Investmant and revenue in every month</p>
      </div>
    </div>
  );
};

// investment: 100000;
// month: "Mar";
// revenue: 10401;
// sell: 241;

export default DashBoard;
