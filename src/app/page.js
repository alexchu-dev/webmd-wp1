/*
Author: Alex Chu up2244885
University of Portsmouth
*/
import Image from "next/image"
import Link from "next/link"
import Carousel from "../components/Carousel"
import PopularDestinationCard from "../components/PopularDestinationCard"
import DestinationOfWeek from "../components/DestinationOfWeek"
import PopularPackages from "../components/PopularPackages"
import SpecialDeals from "../components/SpecialDeals"
import DiscountsSection from "../components/Discounts"
import Testimonials from "../components/Testimonials"
import ReviewComponent from "../components/Review"
import LatestJournal from "../components/Journal"
import Programme from "../components/Programme"
import { homeSliderData } from "./data-carousel.js"

export default function Home() {
  return (
    <section>
      {/* Hero Carousel Section using Carousel component, className as props to control style. */}
      <Carousel data={homeSliderData} className="rounded-xl" />

      <PopularDestinationCard />

      <DestinationOfWeek />

      <PopularPackages />

      <SpecialDeals />

      <DiscountsSection />

      <LatestJournal />

      <Testimonials />

      <ReviewComponent />

      <Programme />
    </section>
  )
}
