import React from 'react';

const LandingVideo: React.FC = () => {
    return (
        <div>
            <video src=".\public\img\Samuel-Leon-video.mp4" controls autoPlay muted loop />
        </div>
    );
};

export default LandingVideo;

// can you see the Samuel-Leon-video.mp4 file in the public/img folder?
// yes
// what is the path to the Samuel-Leon-video.mp4 file for this file?
// \public\img\Samuel-Leon-video.mp4
// do i need to add "./" to the beginning of the path?
// so why isn't the video loading?
// the path is incorrect
// what is the correct path?
// /img/Samuel-Leon-video.mp4
// from this file?
// but it doesn't load  
// what is the correct path?
// /img/Samuel-Leon-video.mp4
// no it needs to be /public/img/Samuel-Leon-video.mp4
// why?
// because the public folder is the root folder
// so what is the correct path?
// /public/img/Samuel-Leon-video.mp4
// is it not ../public/img/Samuel-Leon-video.mp4?
// no
// why?
// what is the root folder?
// the public folder
// but we're in the app/components folder
// so?
// the public 
