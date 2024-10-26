// charts/VehicleCountByCityChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

function VehicleCountByCityChart({ data }) {
    const cities = data.reduce((acc, item) => {
        acc[item.City] = (acc[item.City] || 0) + 1;
        return acc;
    }, {});

    const chartData = [
        ['City', 'Vehicle Count'],
        ...Object.entries(cities),
    ];

    return (
        <div>
            <h2 className="chart-title">Vehicle Count by City</h2>
            <Chart
                chartType="BarChart"
                data={chartData}
                options={{
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Number of Vehicles',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'City',
                    },
                    bars: 'horizontal', // Make the chart horizontal
                }}
                width="100%"
                height="400px"
            />
        </div>
    );
}

export default VehicleCountByCityChart;
