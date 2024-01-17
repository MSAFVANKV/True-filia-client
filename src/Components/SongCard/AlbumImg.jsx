import React from 'react'
import './SongCard.css'


function AlbumImg({ url }) {
  return (
    <div className='albumImg flex'>
            <img src={url} alt="albumImg" className=''/>
            <div className="albumImg_shadow">
            <img src={url} alt="albumImg" className='albumImg_shadow'/>
            </div>
    </div>
  )
}

export default AlbumImg