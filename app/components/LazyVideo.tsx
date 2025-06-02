import React, { useRef, useEffect, useState } from 'react';

const LazyVideo = ({ src, poster, className, ...props }: { src: string, poster: string, className: string, props: any }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      width="700"
      height="500"
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      className={className}
      {...props}
    >
      {isLoaded && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default LazyVideo;
