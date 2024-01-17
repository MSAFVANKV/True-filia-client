import React, { useEffect, useState } from 'react';
import './Player.css';
import { useLocation } from 'react-router-dom'
import apiClient from '../../../Spotify';
import SongCard from '../../SongCard/SongCard';
import Ques from '../../Ques/Ques';
import AudioPlayer from '../../AudioPlayer/AudioPlayer';

function Player() {
  const location = useLocation();

  const [tracks,setTracks] = useState([]);
  const [currentTracks,setCurrentTracks] = useState([]);
  const [currecntIndex,setCurrentIndex] = useState(0);


  useEffect(() =>{
    if(location.state){
      apiClient.get("playlists/"+location.state?.id+"/tracks")
      .then((res) => {
        setTracks(res.data.items);
        setCurrentTracks(res.data.items[0].track)
      })
    }

  },[location.state])

  useEffect(() =>{
    setCurrentTracks(tracks[currecntIndex]?.track)
  } ,[currecntIndex, tracks])

  return (
    <div className='screen-container flex'>
      <div className="left-player-body">
          <AudioPlayer currentTracks={currentTracks}
          currecntIndex={currecntIndex}
          setCurrentIndex={setCurrentIndex}
          total={tracks}
          />
      </div>
      {/* ========================== */}
      <div className="right-player-body">
        <SongCard album={currentTracks?.album} isPlaying={true}/>
        <Ques tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>

    </div>
  )
}

export default Player