import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Comment from './components/commentSection/Comment';
import Stories from './pages/Stories';
import SideBar from './components/sideBar/SideBar';
import { YC } from './components/TabsMenu/YC';
import { Appearance } from './components/TabsMenu/Appearance';
import { About } from './components/TabsMenu/About';

function App() {
  return (
    <div className='bg-white h-screen dark:bg-black dark:text-white overflow-y-hidden'>
      <div className='grid grid-cols-1 sm:grid-cols-3 w-full z-10'>
        <div className='h-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path='/comment' element={<Comment />} />
            <Route path='/options' element={<SideBar />} />
            <Route path='/YC' element={<YC />} />
            <Route path='/appearance' element={<Appearance />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
        <div className='col-span-2'>
          <Stories />
        </div>
      </div>
    </div>
  );
}

export default App;
