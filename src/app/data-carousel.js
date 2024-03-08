/* Method one, import the image as an object. */
/* Pro - Receives the attribute of the image which also helps Next Image to manage them better */
/* Con - Will have to import every single image */
// import slide1 from "../../../../public/img/maldives/beach-666122_1920.jpg"
// import slide2 from "../../../../public/img//tokyo/shibuya-crossing-923000_1920.jpg"
// import slide3 from "../../../../public/img/paris/bird-2590901_1920.jpg"

export const homeSliderData = [
  {
    image: "/img/maldives/beach-666122_1920.jpg",
    title: "Dive into Maldives",
    desc: "Escape to Paradise",
    link: "/destinations/maldives",
  },
  {
    image: "/img/tokyo/shibuya-crossing-923000_1920.jpg",
    title: "Shibuya しぶや",
    desc: "Find Your 五条 Sensei!",
    link: "/destinations/tokyo",
  },
  {
    image: "/img/paris/bird-2590901_1920.jpg",
    title: "Je t'aime Paris",
    desc: "Enjoy the City of Love!",
    link: "/destinations/paris",
  },
]
