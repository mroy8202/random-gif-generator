import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <div className='h-screen w-full font-montserrat flex flex-col background overflow-x-hidden'>
      <div className='bg-white w-11/12 mx-auto rounded-lg mt-[40px] p-4'>
        <h1 className='text-center text-3xl font-extrabold'>RANDOM GIFS</h1>
      </div>
      <div>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
