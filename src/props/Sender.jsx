import React from 'react'
import Receiver from './Receiver';

const Sender = () => {

    const name = "Bilal";
    const age = 17;

  return (
    <div>
      Sender

      <br />

      <Receiver abc={name} def={age} />
    </div>
  )
}

export default Sender
