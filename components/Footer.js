import Link from 'next/link';
import React from "react";
import { FaFacebookMessenger, FaGithub, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
export default function Footer(Props) {
    const date = new Date();
    return (
        <div className="w-full h-[35vh] bg-black pt-20">
            <div className="flex flex-col text-center justify-center items-center gap-8">
                <div className="flex flex-row justify-evenly items-center gap-20">
                    <Link href="#">Home</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Skils</Link>
                    <Link href="#">Contact</Link>
                    <Link href="#">Site Map</Link>
                </div>
                <div className="flex flex-row justify-evenly items-center gap-10">
                    <FaFacebookMessenger />
                    <FaInstagram />
                    <FaXTwitter />
                    <FaGithub />
                    <FaYoutube />
                </div>
                <p className="font-mono"> &copy; {date.getFullYear()} Dummu Rohit, Inc. All rights reserved.</p>
            </div>
        </div>
    )
}