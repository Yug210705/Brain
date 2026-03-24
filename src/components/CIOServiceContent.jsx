import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Shield, TrendingUp, Layers, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';

const CIOServiceContent = () => {
    return (
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(to right, rgba(52, 141, 240, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 141, 240, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

                {/* AEO / AI Definition Block */}
                <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 font-mono">
                        Executive Summary: CIO as a Service
                    </h3>
                    <p className="text-xl text-slate-900 leading-relaxed font-medium">
                        <strong>CIO as a Service for health plans</strong> is a fractional executive leadership model that provides healthcare organizations with strategic IT direction, governance, and transformation oversight without hiring a full-time CIO. This specialized service fills the leadership gap for payers during transitions, core platform migrations, or periods of rapid growth.
                    </p>
                </div>

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex px-4 py-1.5 text-xs md:text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full mb-6">
                        Fractional CIO Leadership for Healthcare
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        What is CIO as a Service for Health Plans?
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                        Executive-level healthcare IT leadership embedded directly into your payer organization — without the cost, risk, or time commitment of a full-time CIO hire. <Link to="/insights/what-is-cio-as-a-service" className="text-[#348DF0] hover:underline font-semibold">CIO as a service for health plans</Link> delivers strategic direction, vendor accountability, and operational discipline from day one.
                    </p>
                </div>

 <div className="h-20" /> {/* Spacer instead of removed section */}

                {/* What You Get */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
                        What does a Fractional CIO deliver for Health Plans?
                    </h3>
                    <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                        Comprehensive CIO-level leadership across every dimension of healthcare IT management.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Target className="w-6 h-6 text-[#348DF0]" />, title: "IT Strategy & Roadmapping", desc: "Develop and execute a clear IT strategy aligned to your health plan's business objectives, growth plans, and regulatory requirements." },
                            { icon: <Briefcase className="w-6 h-6 text-[#348DF0]" />, title: "Vendor Management & Accountability", desc: "Take control of vendor relationships, contract negotiations, SLA enforcement, and platform migration oversight for payer core systems." },
                            { icon: <Shield className="w-6 h-6 text-[#348DF0]" />, title: "Security & Compliance Governance", desc: "Establish cybersecurity frameworks, HIPAA compliance programs, and risk management practices appropriate to healthcare payer operations." },
                            { icon: <Users className="w-6 h-6 text-[#348DF0]" />, title: "Team Leadership & Culture", desc: "Assess, mentor, and restructure IT teams to build accountability, reduce turnover, and create a culture of operational excellence." },
                            { icon: <Layers className="w-6 h-6 text-[#348DF0]" />, title: "Board & Executive Communication", desc: "Translate complex IT issues into business language for board presentations, CEO reporting, and stakeholder alignment." },
                            { icon: <TrendingUp className="w-6 h-6 text-[#348DF0]" />, title: "Digital Transformation Leadership", desc: "Lead modernization initiatives — from cloud migrations and interoperability to member experience platforms and data analytics." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="w-11 h-11 bg-[#348DF01F] rounded-xl flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CIO vs Staffing vs Consulting */}
                <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        How is CIO as a Service different from IT consulting?
                    </h3>
                    <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
                        <p>
                            Traditional IT consulting firms send junior analysts to collect data and produce shelf-ware reports. IT staffing agencies provide hands to execute tasks. Neither provides the <strong>strategic CIO-level leadership</strong> that health plans actually need.
                        </p>
                        <p>
                            <strong>CIO as a service for health plans</strong> through Wendigo Advisors is fundamentally different. We don't just advise — we lead. <Link to="/about" className="text-[#348DF0] hover:underline font-semibold">Brian Damiani</Link> operates as your fractional CIO, attending board meetings, managing vendor relationships, driving IT strategy, and holding teams accountable. It's the experience and authority of a full-time healthcare CIO executive, deployed on a fractional basis.
                        </p>
                        <p>
                            Our engagement typically begins with an <Link to="/ITservices" className="text-[#348DF0] hover:underline font-semibold">IT health check for health plans</Link> to establish a baseline, followed by the implementation of our <Link to="/cio-operating" className="text-[#348DF0] hover:underline font-semibold">CIO operating model for healthcare</Link> that creates lasting governance, visibility, and strategic alignment.
                        </p>
                    </div>
                </div>

                {/* Outcomes */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Stronger Technology Leadership means Lower Operational Risk.
                    </h3>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                        Our healthcare CIO advisory services deliver measurable results for health plans and payer systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Leadership & Strategy */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100 flex flex-col">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <Target className="w-7 h-7 text-[#348DF0]" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">Leadership & Strategy</h4>
                        <ul className="space-y-4 flex-grow">
                            {[
                                "Technology roadmaps aligned with organizational strategy and objective.",
                                "Leadership for digital transformation and modernization initiatives.",
                                "A culture of accountability and ownership across the IT organization."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
                                    <span className="text-slate-600 font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Risk & Governance */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100 flex flex-col">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <Shield className="w-7 h-7 text-[#348DF0]" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">Risk & Governance</h4>
                        <ul className="space-y-4 flex-grow">
                            {[
                                "Stronger cybersecurity and regulatory compliance posture.",
                                "Improved vendor accountability and contract optimization.",
                                "Stronger IT governance and executive decision frameworks."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
                                    <span className="text-slate-600 font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Operational Strength */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100 flex flex-col">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <TrendingUp className="w-7 h-7 text-[#348DF0]" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">Operational Strength</h4>
                        <ul className="space-y-4 flex-grow">
                            {[
                                "Stabilized IT operations and reduced technical debt.",
                                "Clear executive visibility into IT risks, costs, and capability gap.",
                                "Improved collaboration between business and IT leadership."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#348DF0] mt-1 flex-shrink-0" />
                                    <span className="text-slate-600 font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-slate-600 text-lg mb-6">
                        Ready to bring clarity and accountability to your technology environment?
                    </p>
                    <a
                        href="https://calendly.com/brian_damiani/working-session-30-min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#348DF0] hover:bg-[#267ce0] text-white font-medium py-3.5 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                        Get Strategic Insight
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CIOServiceContent;

