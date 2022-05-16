import React from 'react'
import Add from './Add'


function Title() {
  return (
    <div className='flex fixed flex-col py-8 items-center bg-gray-100 shadow-lg shadow-cyan-500/50'>
        <h1 className='font-bold text-xl mb-2 py-2 px-4 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 text-white'>
        📑 Catatan-todo 
        </h1>
        <p className='text-gray-700 font-bold mb-4'>"Create -Read -Update -Delete"</p>
        <div><Add/></div> 
    </div>
  )
}

export default Title