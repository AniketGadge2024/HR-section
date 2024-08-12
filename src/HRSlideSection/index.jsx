import React, { useRef, useState } from 'react';
import './index.css'
import video1 from '../video/vid.mp4'
import video2 from '../video/vide.mp4'
import video3 from '../video/video.mp4'


    

const HRSlideSection = () => {

    const videoData = [
        { id: 1, src: video1, name:'Hiteshwari', discription:'Attended HR Workshop, 2019' },
        { id: 2, src: video2, name:'Aniket', discription:'Attended HR Workshop, 2021' },
        { id: 3, src: video3, name:'Harsha', discription:'Attended HR Workshop, 2023' },
        { id: 4, src: video1, name:'Hiteshwari', discription:'Attended HR Workshop, 2019' },
        { id: 5, src: video2, name:'Aniket', discription:'Attended HR Workshop, 2021' },
        { id: 6, src: video3, name:'Harsha', discription:'Attended HR Workshop, 2023' },
        { id: 7, src: video1, name:'Hiteshwari', discription:'Attended HR Workshop, 2019' },
        { id: 8, src: video2, name:'Aniket', discription:'Attended HR Workshop, 2021' },
        { id: 9, src: video3, name:'Harsha', discription:'Attended HR Workshop, 2023' },
       
      ];
  
      const videoRefs = videoData.map(() => useRef(null));
      const [playingVideo, setPlayingVideo] = useState(null);
  
      const togglePlayPause = (index) => {
          const currentVideo = videoRefs[index].current;
      
          if (playingVideo === index) {
            currentVideo.pause();
            setPlayingVideo(null);
          } else {
            if (playingVideo !== null) {
              videoRefs[playingVideo].current.pause();
            }
            currentVideo.play();
            setPlayingVideo(index);
          }
        };


        function Headercontain(){
            return(
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ maxWidth: '559px', minHeight: '68px', fontWeight: 'bold', fontSize: '42px', margin: '0 auto' }}>
                    Don’t just take <span style={{ color: '#4A3AFF' }}>our words</span>
                  </h2>
                  <p style={{ maxWidth: '559px', minHeight: '58px', fontWeight: '300', fontSize: '24px', margin: '0 auto' }}>
                    People who have taken the same path as you, discover and learn from the community
                  </p>
                </div>
            )
        }
        
        
        function Footercontain(){
            return(
                <div className='footer-div'><a className='footer-anchor' href="">See all reviews by our customers  </a>   </div>
            )
        }


  return (
    <div className='container-body'>
        <Headercontain></Headercontain>
    <div class="container">
    <div class="container-slide">

        {videoData.map((each, index)=>(
           <div className='items' key={each.id}>
            <video ref={videoRefs[index]} width="316" height="568" >
              <source src={each.src} type="video/mp4" />
            </video> 




            <div className='video-info-cont'>
                <div className='name-video-info'>
            <h4>{each.name}</h4>
            <span className='content-heading'>{each.discription}</span>
                </div>

            <button className='video-button-play' onClick={() => togglePlayPause(index)}>
              {playingVideo === index ? < i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}
            </button>
            </div>




          </div>
        ))}
      
    </div>


    {/* <div class="container-slide">

        {videoData.map(each=><div className='items'>{each.id}</div>)}
      
    </div> */}

    
  </div>

  <Footercontain></Footercontain>
  </div>
  )
}

export default HRSlideSection
