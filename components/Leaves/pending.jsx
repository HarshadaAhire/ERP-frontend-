import React, { useState } from 'react';
import './leaves.css';

const Pending = () => {
  const leaveData = [
    { label: 'Sick Leaves', used: 3, remaining: 10, total: 20 },
    { label: 'Paid Leaves', used: 5, remaining: 15, total: 20 },
    { label: 'Causal Leaves', used: 2, remaining: 8, total: 10 },
    { label: 'Maternity Leaves', used: 0, remaining: 12, total: 12 }, // New card
    { label: 'Unpaid Leaves', used: 2, remaining: 8, total: 10 } // New card
  ];

  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderLeaveCards = () => {
    return leaveData.map((data, index) => {
      const total = data.total;
      const usedPercentage = (data.used / total) * 100;
      const remainingPercentage = ((data.remaining) / total) * 100;
      const unusedPercentage = 100 - usedPercentage - remainingPercentage;

      return (
        <div className="leave-card" key={index}>
          <h2>{data.label}</h2>
          <div className="leave-card-content">
            <div className="leave-circle-graph">
              <div className="leave-circle" style={{ '--used': `${usedPercentage}%`, '--remaining': `${remainingPercentage}%`, '--unused': `${unusedPercentage}%` }}></div>
            </div>
            <div className="leave-info">
              <p>unspend: {data.remaining}</p>
              <p>Used: {data.used}</p>
              <p>Total: {data.total}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="leave-screen">
      <div className="leave-cards">
        {renderLeaveCards()}
      </div>

      <div className="tabs">
        <button className={activeTab === 'all' ? 'active' : ''} onClick={() => handleTabChange('all')}>All Leaves</button>
        <button className={activeTab === 'approved' ? 'active' : ''} onClick={() => handleTabChange('approved')}>Approved</button>
        <button className={activeTab === 'rejected' ? 'active' : ''} onClick={() => handleTabChange('rejected')}>Rejected</button>
        <button className={activeTab === 'pending' ? 'active' : ''} onClick={() => handleTabChange('pending')}>Pending</button>
      </div>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Apply Days</th>
            <th>Type of Leave</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data for table */}
          <tr>
            <td>2024-04-26</td>
            <td>02</td>
            <td>Sick Leave</td>
            <td>Fever</td>
            <td><a href="#">Pending</a></td>
          </tr>
          <tr>
            <td>2024-04-26</td>
            <td>02</td>
            <td>Sick Leave</td>
            <td>Fever</td>
            <td><a href="#">Pending</a></td>
          </tr>
          <tr>
            <td>2024-04-26</td>
            <td>02</td>
            <td>Sick Leave</td>
            <td>Fever</td>
            <td><a href="#">Pending</a></td>
          </tr>
          <tr>
            <td>2024-04-26</td>
            <td>02</td>
            <td>Sick Leave</td>
            <td>Fever</td>
            <td><a href="#">Pending</a></td>
          </tr>
          <tr>
            <td>2024-04-26</td>
            <td>02</td>
            <td>Sick Leave</td>
            <td>Fever</td>
            <td><a href="#">Pending</a></td>
          </tr>
          <tr>
            <td>2024-04-26</td>
            <td>02</td>
            <td>Sick Leave</td>
            <td>Fever</td>
            <td><a href="#">Pending</a></td>
          </tr>
          <tr>
            <td>2024-04-26</td>
            <td>02</td>
            <td>Sick Leave</td>
            <td>Fever</td>
            <td><a href="#">Pending</a></td>
          </tr>
          <tr>
            <td>2024-04-26</td>
            <td>02</td>
            <td>Sick Leave</td>
            <td>Fever</td>
            <td><a href="#">Pending</a></td>
          </tr>
         

          {/* Add more rows based on leaveData */}
        </tbody>
      </table>

      <button className="apply-button">Apply for Leave</button>
    </div>
  );
};

export default Pending;
