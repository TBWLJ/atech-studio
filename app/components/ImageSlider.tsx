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
        <img src="pexels-shvetsa-3746149.jpg" alt="" />
      </div>
      <div className="flex justify-center ">
        <div className="absolute bottom-72 text-center border-b-2 w-10/12">
          <h1 className="text-6xl ml-32 font-extrabold mr-32 text-green-700">Enter a world of <span className="text-yellow-500">Photos</span> & Amazing <span className="text-yellow-500">Awards</span></h1>
        </div>
      </div>
    </>
  )
}