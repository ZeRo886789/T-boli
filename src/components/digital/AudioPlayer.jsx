import { useState, useRef } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AudioPlayer = ({ src, title, artist, emptyMessage }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const hasAudio = Boolean(src && src.trim() && src !== '/audio/music/sample.mp3');

  const handlePlay = () => {
    if (!audioRef.current || !hasAudio) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      setCurrentTime(audioRef.current.currentTime);
      const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percent || 0);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current && hasAudio) {
      const percent = e.nativeEvent.offsetX / e.target.offsetWidth;
      audioRef.current.currentTime = percent * audioRef.current.duration;
    }
  };

  const formatTime = (seconds) => {
    if (!seconds || Number.isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <section className="audio-player-section" ref={ref}>
      <div className={`audio-player ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
        <div className="audio-player-info">
          <h3 className="h3">{title || 'Audio archive'}</h3>
          {artist && <p className="audio-player-artist">{artist}</p>}
        </div>

        {hasAudio ? (
          <div className="audio-player-controls">
            <audio
              ref={audioRef}
              src={src}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
              preload="metadata"
            />

            <button
              className={`play-button ${isPlaying ? 'playing' : ''}`}
              onClick={handlePlay}
              aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            >
              {isPlaying ? '❚❚' : '▶'}
            </button>

            <div
              className="progress-bar-container"
              onClick={handleSeek}
              role="slider"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>

            <div className="time-display">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        ) : (
          <p className="audio-empty-state">
            {emptyMessage || 'No public audio recording is currently attached to this archive entry.'}
          </p>
        )}
      </div>
    </section>
  );
};

export default AudioPlayer;
