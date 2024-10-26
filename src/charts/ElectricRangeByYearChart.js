// charts/ElectricRangeByYearChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

function ElectricRangeByYearChart({ data }) {
    const rangeByYear = data.reduce((acc, item) => {
        acc[item["Model Year"]] = (acc[item["Model Year"]] || { totalRange: 0, count: 0 });
        acc[item["Model Year"]].totalRange += item.ElectricRange;
        acc[item["Model Year"]].count += 1;
        return acc;
    }, {});

    const chartData = [
        ['Model Year', 'Average Electric Range'],
        ...Object.entries(rangeByYear).map(([year, { totalRange, count }]) => [year, totalRange / count]),
    ];

    return (
        <div>
            <h2 className="chart-title">Average Electric Range by Model Year</h2>
            <Chart
                chartType="LineChart"
                data={chartData}
                options={{
                    title: 'Average Electric Range by Model Year',
                    hAxis: { title: 'Model Year' },
                    vAxis: { title: 'Average Electric Range' },
                    legend: 'none',
                }}
                width="100%"
                height="400px"
            />
        </div>
    );
}

export default ElectricRangeByYearChart;
