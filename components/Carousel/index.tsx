"use client";
import { useState, useEffect, useRef } from "react";

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translate, setTranslate] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    clearAutoSlide();
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setTranslate(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translate > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (translate < -50 && currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }

    setTranslate(0);
    restartAutoSlide();
  };

  useEffect(() => {
    restartAutoSlide();
    return () => clearAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const restartAutoSlide = () => {
    clearAutoSlide();
    autoSlideRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const clearAutoSlide = () => {
    if (autoSlideRef.current) {
      clearTimeout(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  return (
    <div
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      className="relative w-full h-full overflow-hidden rounded-lg"
    >
      <div
        className="flex transition-transform duration-700 ease-in-out cursor-pointer"
        style={{
          transform: `translateX(calc(-${
            currentIndex * 100
          }% + ${translate}px))`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex justify-center items-center flex-shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              restartAutoSlide();
            }}
            className={`w-3 h-3 rounded-full bg-white cursor-pointer ${
              currentIndex === index ? "bg-opacity-100" : "bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
