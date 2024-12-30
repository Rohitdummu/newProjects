"use client";
import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "React JS",
            description:
                "Built for engineers, developers, dreamers, thinkers and doers.",
            icon: "https://admin.mridul.tech/wp-content/uploads/2023/02/react-js.png",
        },
        {
            title: "Node.JS",
            description:
                "Our prices are best in the market. No cap, no lock, no credit card required.",
            icon: "https://e7.pngegg.com/pngimages/56/223/png-clipart-node-js-javascript-computer-icons-github-angle-text.png",
        },
        {
            title: "MongoDB",
            description: "We just cannot be taken down by anyone.",
            icon: "https://cdn.freebiesupply.com/logos/large/2x/mongodb-logo-png-transparent.png",
        },
        {
            title: "Express JS",
            description: "You can simply share passwords instead of buying new seats",
            icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        },
        {
            title: "Post Man",
            description:
                "We are available a 100% of the time. Atleast our AI Agents are.",
            icon: "https://logos-download.com/wp-content/uploads/2020/06/Postman_Logo-700x259.png",
        },
        {
            title: "Material UI",
            description:
                "If you donot like EveryAI, we will convince you to like us.",
            icon: "https://logowik.com/content/uploads/images/mui-material-ui9415.logowik.com.webp",
        },
        {
            title: "Tailwind CSS",
            description: "I just ran out of copy ideas. Accept my sincere apologies",
            icon: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*nEqMdXoOMbrGZhHmHvmqUA.png",
        },
        {
            title: "Bootstrap CSS",
            description: "I just ran out of copy ideas. Accept my sincere apologies",
            icon: "https://e7.pngegg.com/pngimages/391/430/png-clipart-bootstrap-full-logo-tech-companies.png",
        },
        {
            title: "Git & GitHub",
            description: "I just ran out of copy ideas. Accept my sincere apologies",
            icon: "https://www.vhv.rs/dpng/d/579-5795435_github-logo-png-github-logo-text-png-transparent.png",
        },
    ];
    return (
        (<div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>)
    );
}

const Feature = ({
    title,
    description,
    icon,
    index
}) => {
    return (
        (<div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}>
            {index < 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div
                className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                <img
                    src={icon}
                    alt="test"
                    width="150"
                    height="150"
                    className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span
                    className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p
                className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>)
    );
};
