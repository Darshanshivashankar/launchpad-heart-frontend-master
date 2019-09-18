import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "0", uv: 500, pv: 2400, amt: 2400 },
  { name: "20", uv: 300, pv: 2400, amt: 2400 },
  { name: "40", uv: 450, pv: 2400, amt: 2400 },
  { name: "60", uv: 100, pv: 2400, amt: 2400 }
];
export const RenderLineChart = () => {
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        {" "}
        <Tooltip/>
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};
