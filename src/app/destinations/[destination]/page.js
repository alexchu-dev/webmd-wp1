import Destination from "./destination"
import { destinations } from "../data.js"

export async function generateMetadata({ params }, parent) {
  const pid = params.destination
  const data = destinations.find((p) => p.slug === pid);
  return {
    title: `${data.name}  | Ports Travel - Best Travel Agency in Portsmouth and Beyond`,
    description: "Explore our exclusive travel packages © Alex Chu 2024",
  }
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    destination: destination.slug,
  }))
}

export default function DestinationPage({ params }) {
  return <Destination slug={params.destination} />
}
