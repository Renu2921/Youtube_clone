import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
   const toggleMenu=useSelector((state)=>state.toggle.toggleMenu);
    // early return
    if(!toggleMenu) return null;
  return (
    <div className=' w-[13%] px-6'>
     <ul className='py-2 flex flex-col gap-3'>
      <li className=""><Link to="/">Home</Link></li>
      <li>shorts</li>
      <li>Subscriptions</li>
      <li>Youtube Music</li>
     </ul>
     <hr></hr>
     <h1  className='font-semibold text-md py-2'>You</h1>
      <ul className='pb-2 flex flex-col gap-3 '>
      <li>History</li>
      <li>Playlists</li>
      <li>Your Videos</li>
      <li>Your Courses</li>
      <li>Watch Later</li>
      <li>Liked videos</li>
     </ul>
     <hr></hr>
     <h1 className='font-semibold text-md py-2'>Subscriptions</h1>
      <ul className='pb-2 flex flex-col gap-3'>
      <li>History</li>
      <li>Playlists</li>
      <li>Your Videos</li>
      <li>Your Courses</li>
      <li>Watch Later</li>
      <li>Liked videos</li>
     </ul>
    </div>
  )
}

export default Sidebar
