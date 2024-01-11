import React, { useEffect, useState } from 'react'
import { APIkit } from '../../../Spotify';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./Library.css";

function Library() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Function to fetch user's playlists
    const fetchPlaylists = async () => {
      try {
        const response = await APIkit.getMyPlaylists();
        // console.log(response.data.items,"li");
        const firstTenPlaylists = response.data.items.slice(0, 10);
        setPlaylists(firstTenPlaylists);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    // Call the fetchPlaylists function
    fetchPlaylists();
  }, []);
  
  return (
    <div className="screen-container">
    <div className="library-body">
      {playlists?.map((playlist) => (
        <div
          className="playlist-card"
          key={playlist.id}
          onClick={() => playPlaylist(playlist.id)}
        >
          <img
            src={playlist.images[0].url}
            className="playlist-image"
            alt="Playlist-Art"
          />
          <p className="playlist-title">{playlist.name}</p>
          <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
          <div className="playlist-fade">
            <IconContext.Provider value={{ size: "50px", color: "green" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Library