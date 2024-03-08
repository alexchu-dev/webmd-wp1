/*
Author: Alex Chu up2244885
University of Portsmouth
This component is a carousel component that uses the keen-slider library to create a carousel of images.
The images are imported from the data.js file and the attributes are also imported from the data.js file.
*/
"use client"
import React, { useState } from "react"
import Link from "next/link.js"
import Image from "next/image.js"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { sliderData } from "./data.js"
import "./styles.css"

export default function Carousel(props) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slides: sliderData.length,
      loop: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }
  return (
    <section id="carousel" className="relative mb-4">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className={`keen-slider ${props.className}`}>
          {sliderData.map((data, idx) => (
            <div
              key={idx}
              className={`keen-slider__slide number-slide${
                idx + 1
              } fader__slide`}
            >
              <Link href={data.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={data.image}
                  alt={data.desc}
                  width={1280}
                  height={450}
                  style={{ objectFit: "cover", height: "450px" }}
                />
                <div className="overlay-content">
                  <div className="overlay-text">
                    <h2 className="text-5xl font-bold mb-4 drop-shadow-md text-center">
                      {data.title}
                    </h2>
                    <p className="text-2xl drop-shadow-md">{data.desc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      <style jsx>{`
        
      `}</style>
    </section>
  )
}
