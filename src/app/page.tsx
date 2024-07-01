import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";

import FooterComponent from "@/components/FooterComponent";
import Cards from "@/components/Cards";



export default function Home() {
  return (
   <main>
    <div>
    <Navbar />
    <HomePage />
    <Cards />
    {/* <FooterComponent /> */}
    </div>
   </main>
  );
}
