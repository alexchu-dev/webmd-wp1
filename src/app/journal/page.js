import Image from "next/image"

export const metadata = {
  title: "Journal | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
  description:
    "The best travel agency in Portsmouth and beyond, providing best options for your next trip since 2024. © Alex Chu 2024",
}

export default function Journal() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-semibold m-2 text-center">Journal</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 items-center justify-center">
          <Image
            src="/img/machupicchu/peru-2774925_1920.jpg"
            alt="Peru trip"
            width={400}
            height={300}
            className="object-cover md:max-h-[300px] rounded-xl mx-auto"
          />
          <div className="text">Molestie at elementum eu facilisis sed odio morbi quis. Pellentesque sit amet porttitor eget dolor morbi non.</div>
        </div>
        <div className="p-4 items-center justify-center">
          <Image
            src="/img/maldives/pexels-asad-photo-maldives-3155657.jpg"
            alt="Maldives"
            width={400}
            height={300}
            className="object-cover md:max-h-[300px] rounded-xl mx-auto"
          />
          <div className="text">Senectus et netus et malesuada fames ac. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna.</div>
        </div>
        <div className="p-4 items-center justify-center">
          <Image
            src="/img/tokyo/gundam-1010971_1920.jpg"
            alt="Tokyo Gundam"
            width={400}
            height={300}
            className="object-cover md:max-h-[300px] rounded-xl mx-auto"
          />
          <div className="text">Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.</div>
        </div>
      </div>
    </main>
  )
}
