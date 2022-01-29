import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Loading from './Loading';
import Job from './Job';
import JobsButtons from './JobsButtons';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);

  const fetchJobs = async function() {
    const resp = await fetch(url);
    const jobs = await resp.json();
    setJobs(jobs);
    setLoading(false);
  }

  useEffect(fetchJobs, []);

  if (loading) {
    return <Loading />
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
