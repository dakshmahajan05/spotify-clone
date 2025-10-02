import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/frontend-assets/assets.js'
import SongItem from './SongItem.jsx'
import AlbumItem from './AlbumItem'


const DisplayHome = () => {
  return (
   <>
    <Navbar/>

    <div className='mb-4  '>
        <h1 className='my-5 font-bold text-2xl'>Feautured Chart</h1>
        <div className='flex overflow-auto'>
            {albumsData.map((item, index) => {
                 return <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
             })}

        </div>
    </div>

    <div className='mb-4  '>
        <h1 className='my-5 font-bold text-2xl'>Todays Biggest Hits</h1>
        <div className='flex overflow-auto'>
            {songsData.map((item,index)=>{
                return <SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />
            })}

        </div>
    </div>

   </>
  )
}

export default DisplayHome
