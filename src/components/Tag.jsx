import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

  const [tag, setTag] = useState('car');

  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-400 mx-auto rounded-lg mt-[30px] border border-black flex flex-col items-center gap-y-5 p-5'>
      <h1 className='text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width={450}/>)
      }

      <input className='bg-white w-10/12 rounded-md p-2 text-center' onChange={(event) => setTag(event.target.value)} value={tag}/>

      <button onClick={() => fetchData(tag)}
       className='bg-[#CAF5DA] uppercase font-bold w-10/12 rounded-md p-2' >
        Generate
      </button>
      
    </div>
  )
}

export default Tag