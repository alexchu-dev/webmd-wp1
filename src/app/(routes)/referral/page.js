import Image from 'next/image'

export const metadata = {
  title: "Referral Programme | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
  description:
    "Ports Travel offers referral programme so that you can earn rewards when you refer your friends and family. © Alex Chu 2024",
}

export default function Referral() {
  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">Referral</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="text-center font-semibold p-10 items-center justify-center">
        <Image
          src="/img/maldives/pexels-asad-photo-maldives-3155657.jpg"
          alt="Under Construction"
          width={800}
          height={600}
          className="object-cover md:max-h-[600px] mx-auto" />
       Ports Travel offers referral programme so that you can earn rewards when you refer your friends and family
      </div>
    </section>
  )
}