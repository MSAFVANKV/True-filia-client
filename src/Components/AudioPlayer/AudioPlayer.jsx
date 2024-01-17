import React, { useEffect, useRef, useState } from 'react'
import './AudioPlayer.css'
import ProgressCircle from './ProgressCircle'
import WaveAnimation from './WaveAnimation';
import Controls from './Controls';

function AudioPlayer({currentTracks, currecntIndex, setCurrentIndex, total}) {
  const [isPlaying,setIsPlaying] = useState(false);
  const [trackProgress,setTrackProgress] = useState(0);
  
  var audioSrc = total[currecntIndex]?.track.preview_url
  const audioRef = useRef(new Audio(total[0]?.track.preview_url));
  
  const intarvalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = () => {
    clearInterval(intarvalRef.current)

    intarvalRef.current = setInterval(() => {
      if(audioRef.current.ended){
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime)
      }
    }, [1000])
  }

  useEffect(() => {
    if(isPlaying && audioRef.current){
      audioRef.current = new Audio(audioSrc)
      audioRef.current.play()
      startTimer();
    } else {
      clearInterval(intarvalRef.current)
      audioRef.current.pause();
    }
  },[isPlaying])

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc)
    
    setTrackProgress(audioRef.current.currentTime)

    if(isReady.current){
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true
    }
  },[currecntIndex])

  useEffect(() => {
    return ()=>{
      audioRef.current.pause();
      clearInterval(intarvalRef.current)
      };
  })

  const handleNext = () => {
    if (currecntIndex < total.length - 1) {
      setCurrentIndex(currecntIndex + 1);
    } else setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currecntIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currecntIndex - 1);
  };
  
  const artists = [];
  currentTracks?.album?.artists.forEach((artist) => {
    artists.push(artist?.name)
  })

  return (
    <div className='player-body flex'>
      <div className="player-left-body">
      <ProgressCircle 
        percentage ={currentPercentage}
        isPlaying={true}
        image={currentTracks?.album?.images[0]?.url}
        size={300}
        color="#C96850"
        />
      </div>
      {/* ============ #2nd body player */}
      <div className="player-right-body flex">
          <p className='song-title' >{currentTracks?.name}</p>
          <p className='song-artist'>{artists.join(' | ')}</p>
          <div className="player-right-bottom flex">
              <div className="song-duration flex">
              <p className='duration'>0:01</p>
                <WaveAnimation isPlaying={true}/>
                <p className='duration'>0:31</p>
              </div>
            <Controls 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}

            />
          </div>
      </div>

    </div>
  )
}

export default AudioPlayer