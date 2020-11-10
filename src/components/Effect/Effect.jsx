import React, { useState, useEffect } from 'react'

const Effect = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Se ha creado el componente desde el use Effect');
    return () =>{
      console.log('Esto solo se mostrara cuando el componente sea destruido');
    }
  }, [count])
  

  const addToCount = (e) => {
    const result = count + 1
    setCount(result)
  }
  return (
    <React.Fragment>
      <h4>
        {count}
      </h4>
      <button onClick={addToCount}>Suma</button>
    </React.Fragment>
  )
}

export default Effect