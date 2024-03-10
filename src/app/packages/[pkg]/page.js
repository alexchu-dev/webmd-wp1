import Package from "./package"
import { packages } from "../data.js"

export async function generateMetadata({ params }, parent) {
  const pid = params.pkg
  const data = packages.find((p) => p.id === pid);
  return {
    title: `${data.title}  | Ports Travel - Best Travel Agency in Portsmouth and Beyond`,
    description: "Explore our exclusive travel packages © Alex Chu 2024",
  }
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    pkg: pkg.id,
  }))
}

export default function PackagePage({ params }) {
  return <Package packageId={params.pkg} />
}
