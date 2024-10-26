// charts/ElectricRangeByMakeChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

function ElectricRangeByMakeChart({ data }) {
    const rangeByMake = data.reduce((acc, item) => {
        acc[item.Make] = (acc[item.Make] || { totalRange: 0, count: 0 });
        acc[item.Make].totalRange += item.ElectricRange;
        acc[item.Make].count += 1;
        return acc;
    }, {});

    const chartData = [
        ['Make', 'Average Electric Range'],
        ...Object.entries(rangeByMake).map(([make, { totalRange, count }]) => [make, totalRange / count]),
    ];

    return (
        <div>
            <h2 className="chart-title">Average Electric Range by Make</h2>
            <Chart
                chartType="BarChart"
                data={chartData}
                options={{
                    title: 'Average Electric Range by Make',
                    hAxis: { title: 'Average Electric Range' },
                    vAxis: { title: 'Make' },
                    legend: 'none',
                }}
                width="100%"
                height="400px"
            />
        </div>
    );
}

export default ElectricRangeByMakeChart;

