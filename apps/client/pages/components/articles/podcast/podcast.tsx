import React from 'react';

import AudioController from './audioController';

interface IPodcast {
    track: { title: string; audioSrc: string; image: string };
}

const Podcast = ({ track }: IPodcast) => {
    const [trackProgress, setTrackProgress] = React.useState<number>(0);
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const [start, setStartTimer] = React.useState<boolean>(false);

    // Destructure for conciseness
    const { title, image, audioSrc } = track;

    // Refs
    const audioRef = React.useRef(new Audio(audioSrc));
    const intervalRef = React.useRef<any>();

    const { duration } = audioRef.current;

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #B30F10), color-stop(${currentPercentage}, #313131))
  `;

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setTrackProgress(audioRef.current.currentTime);
        }, [1000]);
    };

    const onScrub = (e: React.ChangeEvent<{ name: string; value: string }>) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = parseInt(e.target.value);
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };

    React.useEffect(() => {
        startTimer();
    }, [start]);

    React.useEffect(() => {
        if (isPlaying && !start) {
            setStartTimer(true);
        }
        if (isPlaying) {
            audioRef.current.play();
            console.log(trackProgress);
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    React.useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="bg-white rounded-lg grid grid-cols-6 h-[150px]">
            <div className="flex items-center p-[10px]">
                <img src={image} className="rounded-lg" />
            </div>
            <div className="grid place-content-stretch p-[10px] grow col-span-5">
                <AudioController title={title} isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
                <input
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress"
                    onChange={(e) => onScrub(e)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                    style={{ background: trackStyling }}
                />
            </div>
        </div>
    );
};

export default Podcast;
