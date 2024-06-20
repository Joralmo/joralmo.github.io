import * as React from 'react';

export default function VideoPlayer({ src }) {
  return (
    <div className="video-player">
      <video width={'100%'} controls>
        <source src={src} />
      </video>
    </div>
  );
}
