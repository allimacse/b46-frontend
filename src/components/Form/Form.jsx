import React, { useState } from 'react'

const Form = () => {
  const [title, setTitle] = useState('Título')
  const handleChange = (e) => setTitle(e.target.value);
  return (
    <React.Fragment>
      <h1> {title} </h1>
      <input type="text" onChange={handleChange} value={title}/>
    </React.Fragment>
  )
}

export default Form