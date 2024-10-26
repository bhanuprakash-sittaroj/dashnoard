// charts/VehicleTypeChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

function VehicleTypeChart({ data }) {
    const vehicleCount = data.reduce((acc, item) => {
        acc[item["Electric Vehicle Type"]] = (acc[item["Electric Vehicle Type"]] || 0) + 1;
        return acc;
    }, {});

    const chartData = [
        ['Type', 'Count'],
        ...Object.entries(vehicleCount),
    ];

    const options = {
        title: 'Vehicle Count by Type',
        pieHole: 0.4,
        colors: ['#4A90E2', '#50E3C2', '#F5A623'], // Custom Colors
        legend: { position: 'bottom' },
    };

    return (
        <div>
            <h2 className="chart-title">Vehicle Count by Type</h2>
            <Chart
                chartType="PieChart"
                data={chartData}
                options={options}
                width="100%"
                height="400px"
            />
        </div>
    );
}

export default VehicleTypeChart;
