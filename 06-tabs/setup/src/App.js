import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import Job from './Job';
import JobsButtons from './JobsButtons';
import DataError from './DataError';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [dataError, set_dataError] = useState(true);
  
  const fetchJobs = function() {
    // fetch( (tryAgain < 4 ? 'afskj' : '') + url)
    fetch(url)
      .then(resp => {
        if(resp.status >= 200 && resp.status < 300) {
          set_dataError(false);
          return resp.json();
        } else {
          set_dataError(true);
          setLoading(false);
        }
      })
      .then(jobs => {
        setJobs(jobs);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error Description: ', error.message);
        set_dataError(true);
        setLoading(false);
      });
  }
  
  const [tryAgain, set_tryAgain] = useState(1);
  const [time , set_time] = useState(15);

  const reload = function() {
    if (dataError) {
      setTimeout(() => {
        if(time > 0) {
          set_time(t => t - 1);
        } else {
          setLoading(true);
          set_tryAgain(t => t + 1);
          set_time(15);
        }
      }, 1000);
    } 
  }

  useEffect(reload, [time]);
  
  useEffect(fetchJobs, [tryAgain]);

  if (loading) {
    return <Loading />
  }
  if (dataError) {
    return <DataError time={time} />
  }
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <JobsButtons jobs={jobs} page={page} setPage={setPage} />
        <Job {...jobs[page]}/>
      </div>
    </section>
  )
}

export default App
