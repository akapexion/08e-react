import React, { useState } from 'react'

const Counter = () => {

    // const abc = "ali"  normal variable

    // state variable
    const [count, setCount] = useState(0);

    const handleCounter = () => {
        setCount(count+1);
    }

  return (
    <>
        <p>My Count is {count}</p>

        <button onClick={handleCounter} className='bg-blue-600 text-white px-4 py-2'>Press</button>
    </>
  )
}

export default Counter
