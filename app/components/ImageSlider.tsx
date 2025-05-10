import { Geist, Geist_Mono } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function ImageSlider() {
  return (
    <>
      <div className="relative">
        <img src="pexels-shvetsa-3746149.jpg" alt="slider--image" />
      </div>
      <div>
        <div className="absolute bottom-80 md:bottom-64 text-center border-b-2 ml-5 md:ml-20 mr-5 md:mr-20 pb-5">
          <h1 className="text-2xl md:text-6xl lg:text-6xl xl:text-6xl md:ml-28 ml-3 font-extrabold mr-3 md:mr-28 text-green-700">Enter a world of <span className="text-yellow-500">Photography</span> & <span className="text-yellow-500">Cinematography</span></h1>
        </div>
      </div>
        <div className="absolute bottom-60 md:bottom-48 text-center ml-5 mr-5 md:ml-24 md:mr-24">
          <h1 className="text-white ml-5 md:ml-32 mr-5 md:mr-32">Atech Media Studio is a professional photography studio that captures your favourite moment and gives you lovely experience...</h1>
        </div>
    </>
  )
}