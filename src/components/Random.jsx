import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

  const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-400 mx-auto rounded-lg mt-[30px] border border-black flex flex-col items-center gap-y-5 p-5'>
      <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width={450}/>)
      }

      <button onClick={() => fetchData()}
       className='bg-[#CAF5DA] uppercase font-bold w-10/12 rounded-md p-2'
      >
        Generate
      </button>
      
    </div>
  )
}

export default Random