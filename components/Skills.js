import React from "react";
import { FeaturesSectionDemo } from "./ui/FeatureCard";
export default function Skill(Props) {
    return (
        <section id="tech">
            <div className="w-full h-1420px flex flex-col">
                <div className="items-center text-center flex justify-center my-10 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Tech Stack
                </div>
                <div>
                    <FeaturesSectionDemo />
                </div>
            </div>
        </section>
    )
}