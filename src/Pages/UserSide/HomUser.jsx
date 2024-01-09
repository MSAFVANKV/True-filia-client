import React, { useState } from 'react';
import Feed from '../../Components/Screens/Feed';

const songs = [
  {
    name: 'Song 1',
    image: 'song1.jpg',
    audio: 'song1.mp3',
  },
  {
    name: 'Song 2',
    image: 'song2.jpg',
    audio: 'song2.mp3',
  },
  // Add more songs as needed
];

function HomeUser() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);

  const currentSong = songs[currentSongIndex];

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setPlaying(true);
  };

  return (
    <>
    <Feed/>
    </>
  );
}

export default HomeUser;
