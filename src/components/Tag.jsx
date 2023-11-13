import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('car');
  
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    // path to get the meme image
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, [] )

  function clickHandler() {
    fetchData();
  }

  function changeHandler(event) {
    setTag(event.target.value)
  }

  return (
    <div className='w-1/2 bg-blue-400 mx-auto rounded-lg mt-[30px] border border-black flex flex-col items-center gap-y-5 p-5'>
      <h1 className='text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width={450}/>)
      }

      <input className='bg-white w-10/12 rounded-md p-2 text-center' onChange={changeHandler} value={tag}/>

      <button onClick={clickHandler}
       className='bg-[#CAF5DA] uppercase font-bold w-10/12 rounded-md p-2' >
        Generate
      </button>
      
    </div>
  )
}

export default Tag