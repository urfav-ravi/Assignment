// ActivityChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "5", activity: 3000 },
  { day: "7", activity: 6000 },
  { day: "9", activity: 12000 },
  { day: "11", activity: 4500 },
  { day: "13", activity: 4500 },
  { day: "15", activity: 4500 },
  { day: "17", activity: 9000 },
  { day: "19", activity: 10500 },
  { day: "21", activity: 15000 },
  { day: "23", activity: 10500 },
  { day: "25", activity: 7500 },
  { day: "27", activity: 4500 },
];

const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={10}
        ry={10}
        style={{
          transition: "none",
          pointerEvents: "none",
        }}
      />
    </g>
  );
};

const ActivityChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="day" stroke="#a0a0a2" />
          <YAxis stroke="#a0a0a2" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              border: "none",
              borderRadius: "10px",
            }}
          />
          <Bar
            dataKey="activity"
            fill="#7493ff"
            barSize={20}
            shape={<CustomBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
