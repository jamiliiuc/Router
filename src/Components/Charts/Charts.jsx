import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis,CartesianGrid, Tooltip } from 'recharts';
import { FaAlignJustify } from "react-icons/fa";
import './Charts.css'
const Charts = () => {
    const [isHidden, setIsHidden] = useState(1);
    const data = [
        { name: 'A', uv: 400, pv: 2300, amt: 2400 },
        { name: 'B', uv: 600, pv: 2100, amt: 2400 },
        { name: 'C', uv: 300, pv: 200, amt: 2400 },
        { name: 'D', uv: 700, pv: 9400, amt: 2400 },
        { name: 'E', uv: 500, pv: 2400, amt: 2400 },
    ];

    return (
        <div>
            <FaAlignJustify onClick={() => setIsHidden(!isHidden)} style={{fontSize: "30px"}}/>

            <LineChart className={isHidden ? "hidden" : ""} width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="red" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>

        </div>
    );
};

export default Charts;