import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FooterScope, Mask, ResoText } from "./FooterScope";

import { InstagramIcon, YoutubeIcon } from "../icons";
export default function Footer() {
  return (
    <footer
      className={cn(
        "font-tungsten",
        "text-white min-h-[110vh] md:min-h-[150vh] flex flex-col relative"
      )}
    >
      <Image
        src="/footerbg.png"
        alt="bg-footer"
        layout="fill"
        objectFit="cover"
        // objectPosition="center"
        className="absolute -inset-4 md:-inset-8"
      />
      <div className="flex-1 relative z-10 flex flex-col justify-end items-start gap-4 md:gap-8 py-8 md:py-16">
      
        <div className="relative left-[15vw] top-[6vh] sm:left-[12vw] sm:top-[4vh] sm:max-md:top-[10vh] sm:max-md:left-[10vw]">
          <FooterScope className="w-[70vw] h-[50vh] sm:w-[50vw] sm:h-[70vh]" />
        </div>
      </div>

      <div className="relative z-10 w-11/12 mx-auto self-end flex justify-between items-center h-16 text-white mb-4 md:mb-8 flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <Link href={"https://www.instagram.com/resonanznsut/"}>
            <InstagramIcon />
          </Link>
          <Link href={"/"}>
            <YoutubeIcon />
          </Link>
          <Link
            href={"/contact"}
            className="bg-white text-black rounded-md text-2xl font-[400] px-4 py-2"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <p className="text-center text-2xl md:text-2xl px-4 sm:px-6 md:px-0 md:text-right md:max-w-[400px]">
            Netaji Subhas University of Technology, Azad Hind Fauj Marg, Dwarka
            Sector-3, Dwarka, Delhi, 110078
          </p>
        </div>
      </div>
    </footer>
  );
}
