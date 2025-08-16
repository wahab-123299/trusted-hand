import React from 'react';

const Jobs = () => {
  const allJobs = [
    { title: "Fix Shower", status: "Upcoming", date: "2025-07-30", client: "Amaka" },
    { title: "Install Security Light", status: "Ongoing", date: "2025-07-28", client: "Tunde" },
    { title: "AC Servicing", status: "Completed", date: "2025-07-25", client: "Ngozi" }
  ];

  return (
    <section className="jobs-section">
      <h3>Your Jobs</h3>
      {allJobs.map((job, i) => (
        <article key={i} className={`job-card ${job.status.toLowerCase()}`}>
          <h4>{job.title}</h4>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Date:</strong> {job.date}</p>
          <p><strong>Client:</strong> {job.client}</p>
        </article>
      ))}
    </section>
  );
};

export default Jobs;
