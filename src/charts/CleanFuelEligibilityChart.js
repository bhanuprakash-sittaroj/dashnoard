// charts/CleanFuelEligibilityChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

function CleanFuelEligibilityChart({ data }) {
    const eligibility = data.reduce((acc, item) => {
        acc[item["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]] = (acc[item["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]] || 0) + 1;
        return acc;
    }, {});

    const chartData = [
        ['Eligibility', 'Count'],
        ...Object.entries(eligibility),
    ];

    return (
        <div>
            <h2 className="chart-title">Clean Fuel Eligibility</h2>
            <Chart
                chartType="PieChart"  // Use PieChart instead
                data={chartData}
                options={{
                    pieHole: 0.4,       // Adds the "doughnut" effect
                    pieSliceText: 'label',
                }}
                width="100%"
                height="400px"
            />
        </div>
    );
}

export default CleanFuelEligibilityChart;
