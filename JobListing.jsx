import React from 'react';
import data from "./data";

function JobListing() {
  return (
    <div className='job-listing-card'>
       {data.filter((job, index) =>(
        <div key={index} className='country-card'> 
      <img
      src="{company.alpha2Code.toLowerCase()}.svg}"
      alt={`${company.logo} Logo`}
      className='logo' />
      <div className='part-1'>
        <p className='p'>{company.name}</p>
        <button className='new'>NEW!</button>
        <button className='featured'>FEATURED</button>
      </div>
      <div className='part-2'>
         <h2>{job.name}</h2>
      </div>
      <div className='part-3'>
        <span>`{JobListing.time} .`</span>
        <span>`{JobListing.type} .`</span>
        <span>`{JobListing.location} only`</span>
      </div>
    </div>
      ))}
    </div>
  )
}

export default JobListing;




