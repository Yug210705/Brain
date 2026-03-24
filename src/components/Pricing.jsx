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
            title: "Strategic Advisor",
            description: "$5,000 per month (~20 hrs/mo)",
            bestFor: "Executive level guidance to help leaders understand the strengths and weaknesses of their IT function.",
            engagement: [
                "Advisory and Decision Support",
                <Link to="/ITservices" className="hover:text-blue-400 underline">Rapid IT Health Check Assessment</Link>,
                "IT Strategy/Roadmap evaluation",
                "System Reviews and Recommendations",
                "Direct Collaboration with the Executive Team"
            ],
            outcomes: [
                "Clear understanding of the current state of IT",
                "Strategy Alignment Recommendations",
                "Improved decision making capabilities"
            ],
            isPopular: false
        },
        {
            title: "CIO Advisor",
            description: "$7,500 per month (~30 hrs/mo)",
            bestFor: "Healthcare organizations needing structured IT leadership without a full-time hire.",
            engagement: [
                "IT Strategy planning & execution assistance",
                "Monthly Executive Calls & Working Sessions",
                "Monthly Risk Reports & Quarterly Business Reviews",
                "Annual Board Presentation Support",
                <Link to="/cio-operating" className="hover:text-blue-400 underline">CIO Operating System framework</Link>
            ],
            outcomes: [
                "Structured IT Governance & Reporting",
                "Proactive Risk Management",
                "Executive-level board support"
            ],
            isPopular: true
        },
        {
            title: "Virtual CIO",
            description: "$15,000 per month (~60 hrs/mo)",
            bestFor: "Full-scale CIO leadership as part of your executive team. Strategic direction and operational oversight, program execution, board reporting, and long-term transformation.",
            engagement: [
                "Everything in Strategic & CIO Advisor plus:",
                "Ad hoc advisory hours",
                "Weekly Executive Calls",
                "Mentoring to senior IT resources",
                "Vendor Management framework"
            ],
            outcomes: [
                <Link to="/cio-operating" className="hover:text-blue-400 underline">Documented CIO Operating System Assessment</Link>,
                "Improved IT strategy planning and execution",
                "Improved vendor management functions"
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
                        <span className="text-gray-900 font-bold font-[Inter]">Flexible CIO Leadership</span>{" "}
                        <span className="text-gray-500">for Healthcare Organizations</span>
                    </h2>
                    <p className="font-tt-hoves font-medium text-[20px] leading-relaxed max-w-3xl mx-auto text-[#00000080]">
                        Wendigo provides flexible engagement options designed to give CEOs clarity, stability, and long-term strategic direction.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                                plan.isPopular 
                                ? 'bg-[#001E3D] ring-4 ring-blue-500/30 scale-105 shadow-2xl z-20' 
                                : 'bg-[#001325] border border-slate-800 shadow-xl'
                            } text-slate-300 h-full`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                                    Strategic Focus
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="font-inter font-bold text-[24px] leading-tight text-white mb-3">
                                    {plan.title}
                                </h3>
                                <p className="text-blue-400 font-semibold text-sm mb-4 leading-snug">
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
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Core Outcomes:</h4>
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
                                    href="https://calendly.com/brian_damiani/working-session-30-min"
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;