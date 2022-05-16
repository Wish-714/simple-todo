import React from 'react'
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Add() {

    const [title, setTitle] = React.useState('')

    const handleSubmit = async (i) => {
        i.preventDefault()
        if (title !== '') {
            await addDoc(collection(db, 'todos'), {
                title,
                completed: false,
            })
            setTitle('');
        }
    } 

  return (
    <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className='flex w-screen'>
            <input
            className='w-screen bg-gray-200 shadow-lg text-gray-700 px-4 py-1 ml-8 mr-1 rounded-md'
            type='text'
            placeholder='what do you want to do?..'
            value={title}
            onChange={(i) => setTitle(i.target.value)}/>
            <button
            className='bg-gray-300 text-white px-1 w-14 py-1 mr-8 ml-2 rounded-md hover:bg-gray-400'>
            ➕
            </button>
        </form>
    </div>
  )
}

export default Add