import Image from "next/image"
export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">About</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-10">
        <div>
          <Image
            src="/img/portfolio-avatar.jpg"
            alt="Under Construction"
            width={300}
            height={300}
            className="object-cover md:max-h-[300px] mx-auto rounded-xl"
          />
        </div>
        <div className="text-justify items-center justify-center py-10 px-4">
          Hello, this is Alex Chu, the developer of this site. Ports Travel is
          not a real company and this is just a demo website for my university
          project.
          <br />
          <br />
          Please do not contact me for any travel services. Thank you :-P
        </div>
      </div>
    </section>
  )
}
