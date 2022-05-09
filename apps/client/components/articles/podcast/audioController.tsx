import React from 'react';
import { BreakSvg, PlaySvg } from '../../../svg';

interface IAudioController {
    title: string;
    isPlaying: boolean;
    onPlayPauseClick: React.Dispatch<boolean>;
}

const AudioController = ({ title, isPlaying, onPlayPauseClick }: IAudioController) => {
    return (
        <div className="flex items-end">
            <div className="">
                <div
                    className="rounded-full bg-black w-[30px] h-[30px] flex items-center justify-center cursor-pointer"
                    onClick={() => onPlayPauseClick(!isPlaying)}>
                    {isPlaying ? <BreakSvg /> : <PlaySvg />}
                </div>
            </div>
            <div className="flex items-center font-bold px-4 py-1">{title} - Ecouter l&apos;article</div>
        </div>
    );
};

export default AudioController;
