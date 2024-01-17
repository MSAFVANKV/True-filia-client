import React from 'react';
import './SongCard.css'
import AlbumInfo from './AlbumInfo';
import AlbumImg from './AlbumImg';

function SongCard({album}) {
  return (
    <div className='songCard-body'>
      <AlbumImg url={album?.images[0]?.url}/>
      <AlbumInfo album={album}/>
    </div>
  )
}

export default SongCard