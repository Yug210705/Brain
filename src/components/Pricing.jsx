import React from 'react';
import { Check, CheckCircle2 } from 'lucide-react';

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
            title: "Strategic Advisor",
            price: "Starting at $5,000 per month",
            frequency: "Approximately 20 hours per month",
            features: [
                "Advisory and Decision Support",
                <React.Fragment>Rapid IT Health Check Assessment (<a href="/ITservices" className="text-[#348DF0] hover:underline">link to IT Health Assessment page</a>)</React.Fragment>,
                "IT Strategy/Roadmap evaluation",
                "System Reviews and Recommendations",
                "Direct Collaboration with the Executive Team"
            ],
            description: "Provides executive level guidance to help leaders understand the strengths and weaknesses of their IT function.",
            outcomes: [
                "Clear understanding of the current state of IT.",
                "Business/IT Strategy Alignment Recommendations.",
                "Improved decision making capabilities related to IT Systems"
            ]
        },
        {
            title: "CIO Advisor",
            price: "Starting at $7,500 per month",
            frequency: "Approximately 30 hours per month",
            features: [
                <React.Fragment><span className="font-semibold text-white">Includes everything in the Strategic Advisor offer plus:</span></React.Fragment>,
                "IT Strategy planning and execution assistance",
                "Monthly Executive Calls",
                "Monthly Working Sessions",
                "Monthly Risk Reports",
                "Quarterly Business Reviews",
                "Annual Board Presentation Support",
                <React.Fragment>Utilizes the CIO Operating System framework (<a href="/cio-operating" className="text-[#348DF0] hover:underline">link to CIO Operating System page</a>)</React.Fragment>
            ],
            description: "Increased involvement for to more effectively monitor risks and ensure IT is helping the organization meet its business objectives.",
            outcomes: [
                "On-going Risk reviews and recommendations",
                "Audit readiness",
                "Reduced operational and regulatory risk"
            ]
        },
        {
            title: "Virtual CIO",
            price: "Starting at $15,000 per month",
            frequency: "Approximately 60 hours per month",
            features: [
                <React.Fragment><span className="font-semibold text-white">Includes everything in Strategic Advisor and CIO Advisor plus:</span></React.Fragment>,
                "Ad hoc advisory hours",
                "Weekly Executive Calls",
                "Mentoring to senior IT resources",
                "Vendor Management framework"
            ],
            description: "Full-scale CIO leadership as part of your executive team. Strategic direction and operational oversight, program execution, board reporting, and long-term transformation.",
            outcomes: [
                <React.Fragment>Documented CIO Operating System Assessment (<a href="/cio-operating" className="text-[#348DF0] hover:underline">link to CIO Operating System page</a>)</React.Fragment>,
                "Improved IT strategy planning and execution",
                "Improved vendor management functions"
            ]
        },
    ];

    return (
        <section className="relative py-10 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans bg-[#F2F9FF]">

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
                        Pricing
                    </span>
                    <h2 className="max-w-5xl mx-auto mb-10 text-2xl sm:text-4xl font-bold leading-[1.2] md:text-5xl text-black">
                        <span className="text-gray-600 font-semibold font-[Inter]">Flexible</span>{" "}
                        <span className="inline-block relative pb-2 mr-2 md:mr-4 group">
                            <span className="relative z-10 font-[Inter]">CIO Leadership</span>
                            <MarkerUnderline />
                        </span>
                        <span>for Healthcare Organizations</span>
                    </h2>
                    <p className="font-tt-hoves font-medium text-[20px] leading-[100%] max-w-3xl mx-auto tracking-[0px] text-[#00000080]">
                        Wendigo provides flexible engagement options designed to give CEOs clarity, stability, and long-term strategic direction.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-16">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            id={plan.title.toLowerCase().split(' ')[0]}
                            className={`relative rounded-none lg:rounded-none xl:rounded-[12px] p-8 flex flex-col justify-start transition-all duration-300 bg-[#1E293B] text-slate-300 border border-slate-700 shadow-xl`}
                        >
                            <div className="mb-6 flex-shrink-0">
                                <h3 className="font-inter font-bold text-[24px] leading-tight text-white mb-2">
                                    {plan.title}
                                </h3>
                                <div className="font-inter font-bold text-[#EAB308] text-[20px] mb-1">
                                    {plan.price}
                                </div>
                                <div className="font-inter font-medium text-sm text-slate-400">
                                    {plan.frequency}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 flex-shrink-0">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 flex-shrink-0"></div>
                                        <span className="font-ttHoves font-medium text-[14px] leading-relaxed text-slate-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mb-8">
                                <p className={`font-ttHoves font-medium text-[14px] leading-relaxed text-slate-400 mb-6 flex-grow`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <h4 className="font-bold text-white text-[15px] mb-3">Outcomes:</h4>
                                <ul className="space-y-3">
                                    {plan.outcomes.map((outcome, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 flex-shrink-0"></div>
                                            <span className="font-ttHoves font-medium text-[14px] leading-relaxed text-slate-300">
                                                {outcome}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Link Component */}
                <div className="text-center pb-10">
                    <a
                        href="https://t.ly/7Jjhw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#348DF0] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_25px_-5px_rgba(59,130,246,0.5)] transition-all duration-200 transform hover:-translate-y-1 active:scale-95"
                    >
                        Meet with us to discuss your needs.
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;