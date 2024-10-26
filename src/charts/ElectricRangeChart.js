// charts/ElectricRangeChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

function ElectricRangeChart({ data }) {
    const chartData = [
        ['Model', 'Electric Range'],
        ...data.map(item => [item.Model, item["Electric Range"]]),
    ];

    return (
        <div>
            <h2 className="chart-title">Electric Range by Model</h2>
            <Chart
                chartType="BarChart"
                data={chartData}
                options={{
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Electric Range (miles)',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Model',
                    },
                }}
                width="100%"
                height="400px"
            />
        </div>
    );
}

export default ElectricRangeChart;
