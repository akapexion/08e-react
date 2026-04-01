import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState(false);

    function handleCount(){
        setCounter(counter+1);
        console.log(counter);
    }

    function handleToggle(){
        setToggle(!toggle);
        console.log(toggle);
    }

    useEffect(() => {
        console.log("useEffect Code....");
    }, [counter])

  return (
    <>
        Effect

        <br />

        <button onClick={handleCount}>Update Counter</button>
        <button onClick={handleToggle}>Toggle Value</button>
    </>
  )
}

export default Effect
