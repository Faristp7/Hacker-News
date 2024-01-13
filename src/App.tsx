import './App.css'
import Home from './pages/Home'
import Stories from './pages/Stories'

function App() {
  return (
    <div className='bg-white min-h-screen dark:bg-black dark:text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-3 w-full z-10'>
        <div className='col-span-1'>
          <Home />
        </div>
        <div className='col-span-2 flex-1'>
          <Stories />
        </div>
      </div>
    </div>
  )
}

export default App
