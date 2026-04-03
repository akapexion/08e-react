import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Form = () => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(message);

        setName("");
        setMessage("");

        toast.success('Form Submitted Successfully');
    }

  return (
    <>
        <form onSubmit={handleSubmission} className='w-[300px] justify-self-center border my-24 border-gray-300 shadow-2xl'>
            <input type="text" placeholder='Enter Your Name...' className='w-[100%] p-5 border border-gray-300' value={name} onChange={(e) => setName(e.target.value)}/>
            <textarea placeholder='Enter Your Message' className='w-[100%] border p-5 border-gray-300'  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

            <button className='w-[100%] border-black border p-5'>Submit</button>
        </form>
    </>
  )
}

export default Form
