import React from 'react'
import './SongCard.css'


function AlbumInfo({album}) {
    console.log(album,"album");
    const artists = [];
    album?.artists.forEach((element) => {
        artists.push(element.name)
    })
  return (
    <div className='albumIfo-Card'>
        <div className='albumName_Container'>
            <div className="marquee">
                <p>{album?.name + " - " + artists?.join(", ")}</p>
            </div>
        </div>
        <div className="album_info">
            <p>{`${album?.name} is an ${album?.album_type} by ${ artists?.join(", ")} with ${album?.total_tracks} track(s)`}</p>
        </div>
        <div className="album_release">
            <p>{`Release Date : ${album?.release_date}`}</p>
        </div>
    </div>
  )
}

export default AlbumInfo