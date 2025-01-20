"use client";

import clsx from "clsx";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ISlider } from "@/types";

import styles from "./slider.module.scss";
import { useRef, useState } from "react";

interface SliderProps {
  className?: string;
  sliderList: ISlider[];
}

export const Slider: React.FC<SliderProps> = ({ className, sliderList }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleClickNext = () => {
    setActiveSlide((activeSlide + 1) % sliderList.length);
  };

  const handleClickPrev = () => {
    setActiveSlide((activeSlide - 1 + sliderList.length) % sliderList.length);
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: TouchEvent) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      handleClickNext();
    } else if (deltaX < -swipeThreshold) {
      handleClickPrev();
    }
  };

  return (
    <>
      <div
        className={clsx(className, styles.slider)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {sliderList.map(({ id, image }, index) => (
          <Image
            className={clsx(
              styles.sliderImage,
              index === activeSlide && styles.active
            )}
            key={id}
            src={image}
            width={1500}
            height={1000}
            alt="slide"
          />
        ))}
      </div>

      <div className={styles.sliderPagination}>
        {Array.from({ length: sliderList.length }, (_, i) => (
          <span
            className={clsx(
              styles.sliderDot,
              i === activeSlide && styles.active
            )}
            key={i}
          ></span>
        ))}
      </div>

      <div className={styles.sliderButtons}>
        <Button className={styles.sliderPrev} onClick={handleClickPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </Button>
        <Button className={styles.sliderNext} onClick={handleClickNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </Button>
      </div>
    </>
  );
};
