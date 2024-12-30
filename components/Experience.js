import Image from "next/image";
import React from "react";
import { ShootingStars } from "./ui/Comet";
import { StarsBackground } from "./ui/ShotingStar";
import { Timeline } from "./ui/Timeline";
export default function Experience(props) {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I have started my journey with wipro as a web developer.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <img
                            src="https://wipro.com/content/dam/wipro/social-icons/wipro_new_logo.svg"
                            alt="wipro logo"
                            width="250"
                            height="250"
                            className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            )
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I have started my journey with wipro as a web developer.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <img
                            src="https://www.wipro.com/content/dam/nexus/en/brand/images/secondary-logo-400x276.png"
                            alt="wipro logo"
                            width="250"
                            height="250"
                            className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            )
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I have started my journey as an Intern at Mindtree now as LTIMindtree.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        {/* <img
                            src="https://www.wipro.com/content/dam/nexus/en/brand/images/secondary-logo-400x276.png"
                            alt="wipro logo"
                            width="500"
                            height="500"
                            className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        /> */}
                        <img
                            src="https://logodix.com/logo/600647.jpg"
                            alt="mindtree logo"
                            width="250"
                            height="250"
                            className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            )
        }
    ]
    return (
        <section id="exp">
            <div className="w-full h-auto">
                {/* <div className="items-center text-center flex justify-center my-5 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Timeline
                </div> */}
                <Timeline
                    data={data}
                />
            </div>
        </section>
    )
}