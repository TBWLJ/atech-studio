import Image from "next/image";
import Navbar from "./components/navbar";
import ImageSlider from './components/ImageSlider'
import ImageLayout from "./components/ImageLayout";

export default function Home() {
  return (
    <main>
      <ImageSlider />
      <ImageLayout />
    </main>
  );
}
