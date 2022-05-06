import React from 'react';
import { BreakSvg, PlaySvg } from '../../../../svg';

interface IAudioController {
    title: string;
    isPlaying: boolean;
    onPlayPauseClick: React.Dispatch<boolean>;
}

const AudioController = ({ title, isPlaying, onPlayPauseClick }: IAudioController) => {
    return (
        <div>
            <div>
                <div className="" onClick={() => onPlayPauseClick(!isPlaying)}>
                    {isPlaying ? <BreakSvg /> : <PlaySvg />}
                </div>
            </div>
            <div>{title} - Ecouter l&apos;article</div>
        </div>
    );
};

export default AudioController;
