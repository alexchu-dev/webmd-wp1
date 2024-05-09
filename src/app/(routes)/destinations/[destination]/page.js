import Destination from "./destination"
// import { destinations } from "../data.js"

/* Added generateMetaData for dynamic metadata. */
// export async function generateMetadata({ params }, parent) {
//   const pid = params.destination
//   const data = destinations.find((p) => p.slug === pid);
//   return {
//     title: `${data.name}  | Ports Travel - Best Travel Agency in Portsmouth and Beyond`,
//     description: "Explore our exclusive travel packages © Alex Chu 2024",
//   }
// }

/* The concept of this part is that, the route is app/destinations/[destination]/page.js,
    therefore the return object is { destination: destination.slug }. The object key must be the slug name.
    Note that, it is just the slug, not the full URL. I have been using destinations/[destination] which failed.
*/
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/destinations`)
  const destinations = await res?.json()
  return destinations.map((destination) => ({
    destination: destination.slug,
  }))
}
// Passing the slug as a prop to the Destination component.
export default function DestinationPage({ params }) {
  return <Destination slug={params.destination} />
}
