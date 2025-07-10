import React, { useState } from 'react';

interface AudioTaskProps {
    audioSrc: string;
}

const AudioTask: React.FC<AudioTaskProps> = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div>
            <button 
                onClick={handlePlay} 
                disabled={isPlaying} 
                style={{
                    backgroundColor: isPlaying ? '#ccc' : '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: isPlaying ? 'not-allowed' : 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s ease'
                }}
            >
                {isPlaying ? 'Playing...' : 'Play'}
            </button>
            <audio ref={audioRef} src={audioSrc} />
        </div>
    );
};

export default AudioTask;