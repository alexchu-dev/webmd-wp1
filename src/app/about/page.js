import Image from 'next/image'
export default function About() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-semibold m-2 text-center">About</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="text-center p-20 items-center justify-center">
       <p>Hello, this is Alex Chu. Ports Travel is not a real company and this is just a demo website for my university project.</p><p>Please do not contact me for any travel services. Thank you :-P</p> 
      </div>
    </main>
  )
}