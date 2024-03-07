import Link from "next/link"
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between text-center m-2">
      <div className="copyright inline-block">
        &copy; 2024 <a href="https://alexchu.dev">Alexchu.dev</a> (up2244885) |
        All Rights Reserved
      </div>
      <div>
        {" "}
        <Link href="/credits" className="underline">Photo credits</Link>
      </div>
    </div>
  )
}
