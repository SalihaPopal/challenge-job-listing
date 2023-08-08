// import React from 'react';
// import data from "./data";

// function JobListing() {
//   return (
//       <div> 
//        {data.map((job, index) =>(
//         <div key={index} className='job-listing-card' id="alert">
//       <img
//       src={job.logo}
//       alt={`${job.logo} Logo`}
//       className='logo' />
//       <div className='header'>
//         <h3>{job.company}</h3>
//         <button className='new'>NEW!</button>
//         <button className='featured'>FEATURED</button>
//       </div>
//       <div className='main'>
//          <h2>{job.position}</h2>
//       </div>
//       <div className='footer'>
//         <span>{`${job.postedAt} . `}</span>
//         <span>{`${job.contract} . `}</span>
//         <span>{job.location}</span>
//       </div>

//       <div className='sidebar'>
//         <span className='span'>{job.role}</span>
//         <span className='span'>{job.level}</span>
//         <span id='languages'>{job.languages}</span>
//       </div>
//     </div>
//       ))}
//     </div>
//   )
// }

// export default JobListing;



import React, { useState } from 'react';
import data from './data';

function JobListing() {
  const [filters, setFilters] = useState([]);

  const handleFilterClick = (filter, highlight) => {
    if (filters.includes(filter)) {
      // Filter is already selected, remove it
      setFilters(filters.filter((f) => f === highlight));
    } else {
      // Filter is not selected, add it
      setFilters([...filters, filter]);
    }
  };

  const filteredJobs = data.filter((job) => {
    return filters.every((filter) => {
      // Check if job's role, level, or languages array includes the filter
      return (
        job.role.toLowerCase() === filter.toLowerCase() ||
        job.level.toLowerCase() === filter.toLowerCase() ||
        job.languages.some(
          (language) => language.toLowerCase() === filter.toLowerCase()
        )
      );
    });
  });

  return (
    <div>
      <div className="job-listings">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="job-listing-card" id="highlight">
              <img
                src={job.logo}
                alt={`${job.logo} Logo`}
                className="logo"
              />
      <div className='header'>
        <h3>{job.company}</h3>
          {job.new && <span className="tag-new">New!</span>}
          {job.featured && <span className="tag-featured">Featured</span>}
      </div>
      <div className='main-header'>
        <h2>{job.position}</h2>
      </div>
      <div className='main-content'>
          <span className='content-item'>{`${job.postedAt} . `}</span>
          <span className='content-item'>{`${job.contract} . `}</span>
          <span className='content-item'>{job.location}</span>
      </div>

      <div className="sidebar">
                <button 
                  className={`span ${filters.includes(job.role) ? 'active' : 'highlight'}`}
                  onClick={() => handleFilterClick(job.role)}
                >
                  {job.role}
                </button>
                <span
                  className={`span ${filters.includes(job.level) ? 'active' : 'highlight'}`}
                  onClick={() => handleFilterClick(job.level)}
                >
                  {job.level}
                </span>
                <span className="span-languages">
                  {' '}
                  {job.languages.map((language, index) => (
                    <button
                      key={index}
                      className={`language ${filters.includes(language) ? 'active' : 'highlight'}`}
                      onClick={() => handleFilterClick(language)}
                    >
                      {language}
                    </button>
                  ))}
                </span>
                {job.tools.map(tool => (
                    <button key={tool}>{tool}</button>
                  ))}
              </div>
      </div>

          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default JobListing;

