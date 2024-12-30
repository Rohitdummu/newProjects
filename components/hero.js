import React from "react";
import OpenResume from "./OpenResume";
import { ShootingStars } from "./ui/Comet";
import { TextGenerateEffect } from "./ui/MagicText";
import { StarsBackground } from "./ui/ShotingStar";
export function GridBackgroundDemo() {
    return (
        <section id="about">
            <div className="w-full relative h-screen flex flex-col items-center justify-center">
                <div className="flex justify-center relative my-20 z-10 gap-5">
                    <div className="flex flex-col gap-5 items-center justify-center max-w-[55vw]">
                        <h4 className="relative flex-col md:flex-row z-10 text-3xl md:text-4xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">Let Me Introduce You to My Self</h4>
                        <p className="text-center font-mono tracking-tight">
                            Basically i'm a Electronics Graduate.But due to lack of oppurtunities i got into IT from then onwards i had a keen intrest on web development.
                        </p>
                        <p className="text-center font-mono tracking-tight">My journey started with mindtree as an intern, from there on my intrest started shifting towards web development</p>
                        <p className="text-center font-mono tracking-tight">
                            My fields of intrest are Web Development, Finance, Doing Nothing
                        </p>
                        <OpenResume />
                    </div>
                </div>
                <ShootingStars />
                <StarsBackground />
            </div>
        </section>
    );
}
