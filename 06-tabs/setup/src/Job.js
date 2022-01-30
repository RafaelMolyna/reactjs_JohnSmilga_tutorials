import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

function Job(props) {
  const {company, dates, duties, title} = props;

  return (
    <article className="job-info">
      <h3>{title} </h3>
      <h4>{company} </h4>
      <p className="job-date">{dates} </p>
      {duties.map((duty, i) => {
        return (
          <div className="job-desc" key={i} >
            <FaAngleDoubleRight className='job-icon' />
            <p>{duty} </p>
          </div>
        );
      })}
    </article>
  )
}

export default Job
