/*
Author: Alex Chu up2244885
University of Portsmouth
This component is a carousel component that uses the keen-slider library to create a carousel of images.
The images are imported from the data.js file and the attributes are also imported from the data.js file.
*/
"use client"
import React from "react"
import Link from "next/link.js"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { sliderData } from "./data.js"
import { Button } from "@mui/material"

export default function Carousel(props) {
  const [opacities, setOpacities] = React.useState([])

  const [sliderRef] = useKeenSlider(
    {
      slides: sliderData.length,
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        )
        setOpacities(new_opacities)
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

  return (
    <section id="carousel" className="relative mb-4">
      <div ref={sliderRef} className={`fader ${props.className}`}>
        {sliderData.map((data, idx) => (
          <div
            key={idx}
            className="fader__slide"
            style={{ opacity: opacities[idx] }}
          >
            <img src={data.image} alt={data.desc}/>
            <div className="overlay-content">
              <div className="overlay-text">
                <h2 className="text-5xl font-bold mb-4 drop-shadow-md text-center">
                  {data.title}
                </h2>
                <p className="text-2xl drop-shadow-md">{data.desc}</p>
              </div>
              {/* <Link href={data.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outlined">Details</Button>
            </Link> */}
            </div>
          </div>
        ))}
        <style jsx>{`
          .fader {
            height: 450px;
            position: relative;
            overflow: hidden;
          }

          .fader__slide {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            align-items: center;
            justify-content: center;
            font-size: 50px;
            font-weight: 500;
          }

          .fader__slide img {
            display: block;
            width: 100%;
            height: 450px;
            object-fit: cover;
            object-position: 50% 60%;
          }
          .overlay-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }
          .overlay-text {
            color: #fff;
            padding: 20px;
            background: rgba(100, 100, 100, 0.5);
          }
        `}</style>
      </div>
    </section>
  )
}
