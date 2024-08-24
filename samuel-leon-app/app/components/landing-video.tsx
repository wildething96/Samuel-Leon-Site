import React from 'react';
import "../globals.css";

const LandingVideo: React.FC = () => {
    return (
        <div className="w-full overflow-hidden">
            <video src="/img/Samuel-Leon-video.mp4" autoPlay muted loop className="w-full h-auto" />
        </div>
    );
};

export default LandingVideo;

