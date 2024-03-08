/*
Author: Alex Chu up2244885
University of Portsmouth
Header component
*/
import Nav from "../Navbar"

export default function Header(props) {
  return (
    <header className={`flex flex-col items-center justify-between bg-[#01afd1] ${props.font}`}>
      <Nav />
    </header>
  )
}
