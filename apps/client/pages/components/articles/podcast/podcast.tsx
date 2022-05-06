import React from 'react';
import Image from 'next/image';

import AudioController from './audioController';

interface IPodcast {
    track: { title: string; artist: string; audioSrc: string; color: string; image: string };
}

const Podcast = ({ track }: IPodcast) => {
    const [trackIndex, setTrackIndex] = React.useState<number>(0);
    const [trackProgress, setTrackProgress] = React.useState<number>(0);
    const [isPLaying, setIsPlaying] = React.useState<boolean>(false);

    // Destructure for conciseness
    const { title, artist, color, image, audioSrc } = track;

    // Refs
    const audioRef = React.useRef(new Audio(audioSrc));
    const intervalRef = React.useRef();
    const isReady = React.useRef(false);

    const { duration } = audioRef.current;

    return (
        <div>
            <div>
                <div>
                    <Image
                        loader={() => (image as string) ?? '/img/mask-group-326-1@1x.png'}
                        src={image}
                        alt={`small image of ${image}`}
                        layout="fill"
                    />
                </div>
            </div>
            <div>
                <AudioController title={title} isPlaying={isPLaying} onPlayPauseClick={setIsPlaying} />
                <div></div>
            </div>
        </div>
    );
};

export default Podcast;
