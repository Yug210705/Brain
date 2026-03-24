import React from 'react';
import { Check, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarkerUnderline = ({ className = "" }) => {
    const id =
        React.useId?.() || `marker-${Math.random().toString(36).slice(2, 9)}`;

    return (
        <svg
            width="100%"
            viewBox="0 0 200 18"
            preserveAspectRatio="none"
            aria-hidden="true"
            className={`absolute left-0 right-0 bottom-0 h-[14px] ${className} z-0 pointer-events-none`}
        >
            <defs>
                <filter id={`markerNoise-${id}`}>
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                        result="noise"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="10"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </defs>

            <rect
                x="0"
                y="4"
                width="100%"
                height="8"
                rx="3"
                fill="#348DF0"
                opacity="0.95"
                filter={`url(#markerNoise-${id})`}
            />
        </svg>
    );
};

const Pricing = () => {
    const plans = [
        {
            title: "Strategic CIO Advisor",
            price: "$5,000 per month",
            description: "Executive guidance for critical technology decisions",
            bestFor: "Best for organizations that need experienced CIO perspective to guide strategy, investments, and leadership discussions.",
            engagement: [
                "Monthly or periodic advisory support",
                "Participation in executive leadership discussions",
                "Strategic guidance on technology initiatives",
                "Independent perspective on vendors and investments"
            ],
            outcomes: [
                "Clear technology strategy and priorities",
                "Stronger business–IT alignment",
                "More confident executive decision-making",
                "Independent guidance on major technology investments"
            ],
            isPopular: false
        },
        {
            title: "Fractional CIO Leadership",
            price: "$7,500 per month",
            description: "Ongoing CIO leadership without hiring a full-time executive",
            bestFor: "Best for organizations that need consistent CIO-level leadership but do not require a full-time role.",
            engagement: [
                "One or more days per week of CIO leadership",
                "Oversight of IT leadership and major initiatives",
                "Technology roadmap development and execution",
                "Vendor and partner strategy"
            ],
            outcomes: [
                "Consistent executive technology leadership",
                "Stronger IT governance and accountability",
                "Technology initiatives moving forward with clear oversight",
                "IT strategy translated into operational execution"
            ],
            isPopular: true
        },
        {
            title: "Interim CIO Leadership",
            price: "$15,000 per month",
            description: "Full-time CIO leadership during executive transitions",
            bestFor: "Best for organizations navigating a sudden CIO departure or major leadership transition.",
            engagement: [
                "Immediate executive leadership for the IT organization",
                "Stabilization of operations and key initiatives",
                "Leadership of the CIO search or transition process",
                "Strategic and operational oversight during the transition period"
            ],
            outcomes: [
                "Stable IT leadership during a critical transition",
                "Reduced operational and technology risk",
                "Continuity across projects, vendors, and teams",
                "A stronger foundation for the incoming CIO"
            ],
            isPopular: false
        },
    ];

    return (
        <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans bg-[#F2F9FF]">

            {/* BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: 'radial-gradient(#348DF033 2px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}></div>
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#348DF0] opacity-[0.08] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4"></div>
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#348DF0] opacity-[0.08] rounded-full blur-[120px] translate-x-1/2 translate-y-1/4"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2F9FF]/40 to-[#F2F9FF]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center">
                        Our Services
                    </span>
                    <h2 className="max-w-5xl mx-auto mb-10 text-3xl sm:text-4xl font-bold leading-[1.2] md:text-5xl text-black">
                        Flexible CIO Leadership for Healthcare Organizations
                    </h2>
                    <p className="font-tt-hoves font-medium text-[20px] leading-relaxed max-w-3xl mx-auto text-[#00000080]">
                        Wendigo provides flexible engagement options designed to give CEOs clarity, stability, and long-term strategic direction.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-10">
                    {plans.map((plan, index) => {
                        const planIds = ["strategic", "fractional", "interim"];
                        return (
                        <div
                            key={index}
                            id={planIds[index]}
                            className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                                plan.isPopular 
                                ? 'bg-[#001E3D] ring-4 ring-blue-500/30 scale-105 shadow-2xl z-20' 
                                : 'bg-[#001325] border border-slate-800 shadow-xl'
                            } text-slate-300 h-full`}
                        >
                            {/* Removed Most Popular Labels per instructions */}

                            <div className="mb-6">
                                <h3 className="font-inter font-bold text-[24px] leading-tight text-white mb-1">
                                    {plan.title}
                                </h3>
                                <div className="text-blue-400 font-bold text-lg mb-3">
                                    {plan.price}
                                </div>
                                <p className="text-slate-400 font-medium text-sm mb-4 leading-snug italic">
                                    {plan.description}
                                </p>
                                <div className="pt-4 border-t border-slate-800">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Best For:</p>
                                    <p className="text-sm leading-relaxed text-slate-300">
                                        {plan.bestFor}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Typical Engagement:</h4>
                                <ul className="space-y-3">
                                    {plan.engagement.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                            <span className="text-sm leading-relaxed text-slate-300 font-medium">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Outcomes:</h4>
                                <ul className="space-y-3">
                                    {plan.outcomes.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm leading-relaxed text-slate-300 font-medium">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto pt-6">
                                <a
                                    href="https://t.ly/7Jjhw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-200 ${
                                        plan.isPopular 
                                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                                    }`}
                                >
                                    Get Started Now
                                </a>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;