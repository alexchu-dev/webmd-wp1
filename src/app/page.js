/*
Author: Alex Chu up2244885
University of Portsmouth
*/
import Image from "next/image"
import Link from "next/link"
import Carousel from "./_components/Carousel"
import PopularDestinationCard from "./_components/PopularDestinationCard"
import DestinationOfWeek from "./_components/DestinationOfWeek"
import PopularPackages from "./_components/PopularPackages"
import SpecialDeals from "./_components/SpecialDeals"
import DiscountsSection from "./_components/Discounts"
import Testimonials from "./_components/Testimonials"
import ReviewComponent from "./_components/Review"
import LatestJournal from "./_components/Journal"
import ToolsProgramme from "./_components/ToolsProgramme"
import { homeSliderData } from "./data-carousel.js"

export default function Home() {

  return (
    <main className="relative max-w-screen-xl m-auto p-4">
      {/* Hero Carousel Section using Carousel component, className as props to control style. */}
      <Carousel data={homeSliderData} className="rounded-xl" />

      <PopularDestinationCard />

      <DestinationOfWeek />

      <PopularPackages />

      <SpecialDeals />

      <DiscountsSection />

      <Testimonials />

      <ReviewComponent />

      <LatestJournal />

      <ToolsProgramme />
      
    </main>
  )
}
