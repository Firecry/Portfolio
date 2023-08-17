import React, { useRef } from 'react';

function ImageSlider() {
  const trackRef = useRef(null);
  let mouseDownAt = null;
  let prevPercentage = 0;

  const handleOnDown = e => {
    mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    mouseDownAt = null;
    prevPercentage = parseFloat(trackRef.current.dataset.percentage);
  };

  const handleOnMove = e => {
    if (mouseDownAt === null) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const calculatedPercentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + calculatedPercentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    trackRef.current.dataset.percentage = nextPercentage;

    // Apply CSS transformations and animations here
  };

  return (
    <div
      ref={trackRef}
      id="image-track"
      onMouseDown={handleOnDown}
      onTouchStart={e => handleOnDown(e.touches[0])}
      onMouseUp={handleOnUp}
      onTouchEnd={e => handleOnUp(e.touches[0])}
      onMouseMove={handleOnMove}
      onTouchMove={e => handleOnMove(e.touches[0])}
      style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
    >
      {/* Render your images here */}
    </div>
  );
}

export default ImageSlider;