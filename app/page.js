import { About } from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { GridBackgroundDemo } from "@/components/hero";
import Skill from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { BsStack } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdWork } from "react-icons/md";
export default function Home() {
  return (
    <main className="bg-black-100 mx-auto relative flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
            {
              name: "About",
              link: "#about",
              icon: <FcAbout />,
            },
            {
              name: "Experience",
              link: "#exp",
              icon: <MdWork />,
            },
            {
              name: "Tech",
              link: "#tech",
              icon: <BsStack />,
            }
          ]}
        />
        <About />
        <GridBackgroundDemo />
        <Experience />
        <Skill />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
