import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NewComponent from "@/components/NewComponent";
import NewsSection from "@/components/NewsSection";
import Navbar from "@/components/Navbar";
import cover from "../../public/cover.png";
import Image from "next/image";
import Product from "@/components/Product";
import bg from "../asset/background-table.png";
import Staff from "@/components/Staff";
import Contact from "@/components/Contact";
import Bubble from "@/components/Bubble";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 800,
      }}
    >
      <Navbar />
      <Image src={cover} layout={"responsive"} />
      <NewsSection />
      <Product />
      <Staff />
      <Contact />
      <Bubble />
    </div>
  );
}
