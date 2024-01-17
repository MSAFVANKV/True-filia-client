import React from 'react'
import './Ques.css'
function Ques({setCurrentIndex , tracks}) {
  console.log(tracks,'tracks');
  return (
    <div className='queue-Container flex'> 
      <div className="queue flex">
        <p className='upNext'>Up Next</p>
        <div className="queue-list scrollbar-none select-none">
        {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex "
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ques