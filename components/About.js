import React from "react";
import { TextGenerateEffect } from "./ui/MagicText";
import { Spotlight } from "./ui/Spotlight";
export function About() {
    return (
        (
            <div
                className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pt-40 pb-20">
                <Spotlight className="-top-40 left-10 md:left-60 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 right-80" fill="blue" />
                <Spotlight className="-right-180" fill="blue" />
                <Spotlight className="left-full top-200 w-[50vw] h-[80vh]" fill="purple" />
                <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                    <p
                        className="mt-10 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                        <TextGenerateEffect className="font-mono text-sm md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50" words="Hi, This is Dummu Rohit. A Passionate web developer" />
                    </p>
                    <div className="z-10 flex justify-center relative my-20">
                        <div className="fle flex-col-reverse items-center justify-center max-w-[89vw]">
                            <h1
                                className="text-3xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                                Full Stack <br /> is the new trend.
                            </h1>
                            <h1 className="uppercase tracking-widest text-xs text-center mt-5">Made with Next.JS</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
