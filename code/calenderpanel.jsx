// CalendarPanel.jsx
import React from 'react';
import './calendarPanel.css';

const CalendarPanel = ({ jobs }) => {
  const upcomingJobs = jobs || [
    { title: "Repair Sink", date: "2025-07-28T10:00:00" },
    { title: "Install AC Unit", date: "2025-07-29T14:30:00" },
  ];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="calendar-panel">
      <h3>📅 Upcoming Jobs</h3>
      <ul className="job-list">
        {upcomingJobs.map((job, index) => (
          <li key={index} className="job-item">
            <span className="job-title">{job.title}</span>
            <span className="job-date">{formatDate(job.date)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPanel;
