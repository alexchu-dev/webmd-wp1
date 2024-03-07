/*
Author: Alex Chu up2244885
University of Portsmouth
*/
import Image from "next/image"
import Link from "next/link"
import Carousel from "./components/Carousel"
import PopularDestinationCard from "./components/PopularDestinationCard"
import DestinationOfWeek from "./components/DestinationOfWeek"
import PopularPackages from "./components/PopularPackages"
import SpecialDeals from "./components/SpecialDeals"
import DiscountsSection from "./components/Discounts"
import Testimonials from "./components/Testimonials"
import ReviewComponent from "./components/Review"
import LatestJournal from "./components/Journal"

export default function Home() {
  return (
    <main className="relative max-w-screen-xl m-auto p-4">
      {/* Hero Carousel Section using Carousel component, className as props to control style. */}
      <Carousel className="rounded-xl" />

      <PopularDestinationCard />

      <DestinationOfWeek />

      <PopularPackages />

      <SpecialDeals />

      <DiscountsSection />

      <Testimonials />

      <ReviewComponent />

      <LatestJournal />
    </main>
  )
}
