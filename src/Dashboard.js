import React from 'react';
import VehicleTypeChart from './charts/VehicleTypeChart';
import ElectricRangeChart from './charts/ElectricRangeChart';
import VehicleCountByCityChart from './charts/VehicleCountByCityChart';
import CleanFuelEligibilityChart from './charts/CleanFuelEligibilityChart';
import './Dashboard.css';
import ElectricRangeByMakeChart from './charts/ElectricRangeByMakeChart';
import ElectricRangeByYearChart from './charts/ElectricRangeByYearChart';

const data = [
    {
        "VIN (1-10)": "JN1AZ0CP8C",
        "County": "Thurston",
        "City": "Tenino",
        "State": "WA",
        "Postal Code": 98589,
        "Model Year": 2012,
        "Make": "NISSAN",
        "Model": "LEAF",
        "Electric Vehicle Type": "Battery Electric Vehicle (BEV)",
        "Clean Alternative Fuel Vehicle (CAFV) Eligibility": "Clean Alternative Fuel Vehicle Eligible",
        "Electric Range": 73,
        "Base MSRP": 0,
        "Legislative District": 20,
        "Electric Utility": "PUGET SOUND ENERGY INC",
        "2020 Census Tract": 53067012620
    },
    {
        "VIN (1-10)": "1FADP5CU4G",
        "County": "Thurston",
        "City": "Olympia",
        "State": "WA",
        "Postal Code": 98501,
        "Model Year": 2016,
        "Make": "FORD",
        "Model": "C-MAX",
        "Electric Vehicle Type": "Plug-in Hybrid Electric Vehicle (PHEV)",
        "Clean Alternative Fuel Vehicle (CAFV) Eligibility": "Not eligible due to low battery range",
        "Electric Range": 19,
        "Base MSRP": 0,
        "Legislative District": 22,
        "Electric Utility": "PUGET SOUND ENERGY INC",
        "2020 Census Tract": 53067010700
    },
    {
        "VIN (1-10)": "1N4AZ1CP4J",
        "County": "Thurston",
        "City": "Olympia",
        "State": "WA",
        "Postal Code": 98501,
        "Model Year": 2018,
        "Make": "NISSAN",
        "Model": "LEAF",
        "Electric Vehicle Type": "Battery Electric Vehicle (BEV)",
        "Clean Alternative Fuel Vehicle (CAFV) Eligibility": "Clean Alternative Fuel Vehicle Eligible",
        "Electric Range": 151,
        "Base MSRP": 0,
        "Legislative District": 22,
        "Electric Utility": "PUGET SOUND ENERGY INC",
        "2020 Census Tract": 53067010700
    }
];

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Electric Vehicle Dashboard</h1>
            <div className="charts-grid">
                <div className="chart-container">
                    <VehicleTypeChart data={data} />
                </div>
                <div className="chart-container">
                    <ElectricRangeChart data={data} />
                </div>
                <div className="chart-container">
                    <VehicleCountByCityChart data={data} />
                </div>
                <div className="chart-container">
                    <CleanFuelEligibilityChart data={data} />
                </div>
                <div className="chart-container">
                    <ElectricRangeByMakeChart data={data}  />
                </div>
                <div className="chart-container">
                    <ElectricRangeByYearChart data={data} />
                </div>
                {/* <div className="chart-container">
                    <ElectricRangeByMakeChart data={data}  />
                </div>
                <div className="chart-container">
                    <ElectricRangeByYearChart data={data}  />
                </div> */}
            </div>
        </div>
    );
}

export default Dashboard;
