import React from 'react'

function DataError({time}) {

  return (
    <section className='section loading' >
      <p>could not reach data,<br/> try again in {time}s ...</p>
    </section>
  )
}

export default DataError
