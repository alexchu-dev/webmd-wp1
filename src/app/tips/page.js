import Image from 'next/image'

export const metadata = {
  title: "Travel Tips | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
  description: "Travel Tips for you to get prepared for your trips © Alex Chu 2024",
}

export default function Tips() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-semibold m-2 text-center">Tips</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="text-center font-semibold p-10 items-center justify-center">
        <Image
          src="/img/okinawa/lewis-yin--vAZLOQCVXo-unsplash.jpg"
          alt="Under Construction"
          width={800}
          height={600}
          className="object-cover md:max-h-[600px] mx-auto" />
        Travel Tips for you to get prepared for your trips 
      </div>
    </main>
  )
}