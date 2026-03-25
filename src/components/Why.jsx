import React from 'react';

const MarkerUnderline = ({ className = "" }) => {
    const id = React.useId?.() || `marker-${Math.random().toString(36).slice(2, 9)}`;
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
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </defs>
            <rect x="0" y="4" width="100%" height="8" rx="3" fill="#348DF0" opacity="0.95" filter={`url(#markerNoise-${id})`} />
        </svg>
    );
};

const Why = () => {
    return (
        <div className="relative overflow-hidden font-sans selection:bg-blue-200"
            style={{
                background: `
                    radial-gradient(50% 50% at 50% 50%, rgba(238,247,255,0) 50%, #EEF7FF 100%),
                    radial-gradient(50% 50% at 50% 50%, color(display-p3 0.941 0.969 1.000 / 0) 50%, color(display-p3 0.941 0.969 1.000) 100%)
                `
            }}
        >
            {/* Background Dot Pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px'
            }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-10 flex flex-col justify-center min-h-screen">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content Section - Centered on Mobile, Left on Desktop */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        {/* Pill Badge */}
                        <div className="flex justify-center lg:justify-start w-full">
                            <span className="inline-block w-[197px] h-[30px] px-[16px] py-[4px] rounded-[30px] bg-[#348DF01F] border border-[#348DF080] text-sm font-medium text-blue-500 mb-6 text-center">
                                Why Wendigo Advisors
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="max-w-5xl mb-10 text-2xl sm:text-4xl font-bold leading-[1.2] md:text-5xl text-black">
                            <span className="inline-block relative pb-2 mr-2 md:mr-4 group">
                                <span className="text-gray-900 font-semibold font-[Inter]">The Impact of</span>{" "}
                            </span>

                            <span className="relative whitespace-nowrap inline-block mr-2 md:mr-4 ml-0 md:ml-2 group">
                                <span className="relative z-10 font-[Inter] text-black">Strong CIO</span>
                            </span>

                            <span className="relative whitespace-nowrap inline-block group">
                                <span className="relative z-10 font-[Inter]">Leadership</span>
                                <MarkerUnderline />
                            </span>
                        </h1>

                        <p className="font-ttHoves font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[140%] tracking-[0px] text-[#00000080] max-w-lg">
                            Examples of outcomes delivered through CIO leadership roles and advisory engagements across healthcare organizations.
                        </p>

                        <a
                            href="https://t.ly/7Jjhw"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="mt-0 w-[157px] h-[50px] px-[38px] py-[10px] bg-[#348DF0] hover:bg-blue-600 text-white font-semibold rounded-[50px] shadow-[0_10px_25px_-5px_rgba(59,130,246,0.5)] transition-all duration-200 transform hover:-translate-y-1 active:scale-95">
                                Book a Call
                            </button>
                        </a>
                    </div>

                    {/* Right Cards Section - Centered on Mobile, Absolute on Desktop */}
                    <div className="w-full mt-20 px-4">
                        {/* grid-cols-2 creates the two columns.
    gap-6 (24px) or gap-8 (32px) provides the spacing between them.
  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                            {/* Card 1: Left Top */}
                            <div className="flex justify-center lg:justify-end">
                                <StatsCard
                                    title="$20M+"
                                    subtitle="Recovered"
                                    desc="Vendor payment recovery and operational cost optimization across complex vendor ecosystems."
                                />
                            </div>

                            {/* Card 2: Right Top (Shifted Up) */}
                            <div className="flex justify-center lg:justify-start lg:-translate-y-12">
                                <StatsCard
                                    title="26% to over 75%"
                                    subtitle="Auto Adjudication Rate"
                                    desc="Claims automation improvement delivering millions in annual savings."
                                />
                            </div>

                            {/* Card 3: Left Bottom */}
                            <div className="flex justify-center lg:justify-end">
                                <StatsCard
                                    title="60 to 90+"
                                    subtitle="Security Score"
                                    desc="Enterprise security posture transformation across Microsoft cloud environments."
                                />
                            </div>

                            {/* Card 4: Right Bottom (Shifted Up) */}
                            <div className="flex justify-center lg:justify-start lg:-translate-y-12">
                                <StatsCard
                                    title="Zero"
                                    subtitle="Day 1 Issues"
                                    desc="No operational incidents during major IT leadership transition."
                                />
                            </div>

                            {/* Card 5: Centered Last Row */}
                            <div className="flex justify-center lg:col-span-2 lg:-translate-y-6">
                                <StatsCard
                                    title=""
                                    subtitle="Enterprise IT Roadmap Established"
                                    desc="Multi-year technology strategy aligning platform modernization, vendor strategy, and organizational growth priorities."
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* GEO: Implicit Performance Signaling via Schema */}
                <script type="application/ld+json">
                    {`
                  {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Key Performance Metrics",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Cost Recovery",
                        "description": "Vendor payment identification and cost optimization",
                         "value": "20000000 USD"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Auto Adjudication Improvement",
                        "description": "Annual savings via adjudication optimization",
                        "value": "1250000 USD"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Security Score Improvement",
                        "description": "Microsoft security posture transformation",
                        "value": "30 Points Increase"
                      }
                    ]
                  }
                `}
                </script>


            </div>
        </div>
    );
};

const StatsCard = ({ title, subtitle, desc }) => (
    <div className="group relative p-8 w-full max-w-[244px] aspect-square rounded-[38px] bg-[#001325] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(180deg,#CAE5FE_0%,rgba(0,143,248,0.64)_100%)] before:rounded-[38px] before:z-0 shadow-[0_20px_40px_-10px_rgba(30,58,138,0.4)] text-white overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[38px]"></div>
        <div className="relative z-10 flex flex-col h-full justify-between gap-6">
            <div>
                <h3 className="font-inter font-semibold text-[40px] leading-[1.2]">{title}</h3>
                <p className="font-ttHoves text-[#FFFFFFBF] font-semibold text-[16px] leading-[100%]">{subtitle}</p>
            </div>
            <p className="font-ttHoves font-medium text-[16px] leading-[1.2] tracking-[1px] opacity-80 text-[#FFFFFF73]">
                {desc}
            </p>
        </div>
    </div>
);

export default Why;
