import React from 'react'

function Title() {
  return (
    <div className='z-2 w-screen flex fixed flex-col py-8 items-center bg-gray-100'>
        <h1 className='font-bold text-xl mb-2 py-2 px-4 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 text-white'>
        📑 Catatan-todo 
        </h1>
        <p className='text-gray-700 font-medium'>"Create -Read -Update -Delete"</p>
    </div>
  )
}

export default Title