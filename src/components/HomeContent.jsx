import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, BarChart2, Users, TrendingUp, CheckCircle } from 'lucide-react';

const HomeContent = () => {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(to right, rgba(52, 141, 240, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 141, 240, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-1.5 text-xs md:text-sm font-medium text-blue-500 bg-[#348DF01F] border border-[#348DF080] rounded-full mb-6">
            When Healthcare Leaders turn to Wendigo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            CIO Advisory Services<br className="hidden md:block" />
            <span className="text-[#348DF0]">for Healthcare Organizations</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed mb-10">
            Wendigo Advisors is a specialized <strong>healthcare CIO advisory firm</strong> that delivers executive-level IT leadership exclusively to health plans, managed care organizations, and payer systems across the United States. Our founder, <Link to="/about" className="text-[#348DF0] hover:underline font-semibold">Brian Damiani</Link>, brings 25+ years of hands-on healthcare IT strategy experience to every engagement.
          </p>

          <div className="max-w-4xl mx-auto text-left bg-[#F8FAFC] p-8 rounded-3xl border border-slate-100 mb-16">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Technology leadership challenges begin affecting organizational performance, risk, or strategic progress such as:
            </h3>
            <ul className="space-y-6">
              {[
                {
                  title: "A CIO's departure creates leadership uncertainty",
                  desc: "Organizations need experienced guidance to stabilize operations and maintain momentum across critical technology initiatives"
                },
                {
                  title: "Technology decisions carry significant operational or financial risk",
                  desc: "Executive teams benefit from an independent, CIO-level perspective to guide high-stakes investments and strategic decisions"
                },
                {
                  title: "IT strategy has drifted from business priorities",
                  desc: "Leadership teams need a clear technology roadmap that aligns with organizational goals."
                },
                {
                  title: "Major technology initiatives require stronger oversight",
                  desc: "Large programs such as system upgrades, platform modernizations, or digital initiatives need experienced executive leadership to stay on track."
                },
                {
                  title: "Vendor ecosystems become complex and difficult to manage",
                  desc: "Healthcare organizations need objective guidance to navigate competing vendor priorities and technology investments."
                },
                {
                  title: "Executive teams need a trusted technology advisor",
                  desc: "Leadership teams need a partner who can translate complex IT challenges into clear business decisions."
                },
                {
                  title: "Technology risk is increasing",
                  desc: "Security, operational, and governance risks often emerge when IT leadership structures are unclear or overstretched."
                }
              ].map((item, index) => {
                const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii"];
                return (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#348DF01F] text-[#348DF0] flex items-center justify-center text-xs font-bold mt-1">
                      {romanNumerals[index]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ServicePillar
            icon={<Activity className="w-7 h-7 text-[#348DF0]" />}
            title="Strategic CIO Advisor"
            description="Strategic CIO Advisor services help healthcare leaders make confident technology decisions by providing experienced, independent CIO-level guidance on strategy, risk, and major initiatives."
            link="/#strategic"
            linkText="Learn More →"
          />
          <ServicePillar
            icon={<Users className="w-7 h-7 text-[#348DF0]" />}
            title="Fractional CIO Leadership"
            description="Fractional CIO Leadership provides ongoing CIO-level leadership to help healthcare organizations guide technology strategy, oversee key initiatives, and strengthen IT governance."
            link="/#fractional"
            linkText="Learn More →"
          />
          <ServicePillar
            icon={<BarChart2 className="w-7 h-7 text-[#348DF0]" />}
            title="Interim CIO Leadership"
            description="Interim CIO Leadership provides experienced executive technology guidance during CIO transitions to stabilize operations, guide critical decisions, and maintain momentum across the IT organization."
            link="/#interim"
            linkText="Learn More →"
          />
        </div>



        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Stronger Technology Leadership means Lower Operational Risk.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#348DF01F] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#348DF0]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Leadership & Strategy</h4>
            </div>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#348DF0] flex-shrink-0 mt-0.5" />
                <span>Technology roadmaps aligned with organizational strategy and objective.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#348DF0] flex-shrink-0 mt-0.5" />
                <span>Leadership for digital transformation and modernization initiatives.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#348DF0] flex-shrink-0 mt-0.5" />
                <span>A culture of accountability and ownership across the IT organization.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#348DF01F] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#348DF0]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Risk & Governance</h4>
            </div>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#348DF0] flex-shrink-0 mt-0.5" />
                <span>Stronger cybersecurity and regulatory compliance posture.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#348DF0] flex-shrink-0 mt-0.5" />
                <span>Improved vendor accountability and contract optimization.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#348DF0] flex-shrink-0 mt-0.5" />
                <span>Stronger IT governance and executive decision frameworks.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#348DF01F] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#348DF0]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Operational Strength</h4>
            </div>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#348DF0] flex-shrink-0 mt-0.5" />
                <span>Stabilized IT operations and reduced technical debt.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#348DF0] flex-shrink-0 mt-0.5" />
                <span>Clear executive visibility into IT risks, costs, and capability gap.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#348DF0] flex-shrink-0 mt-0.5" />
                <span>Improved collaboration between business and IT leadership.</span>
              </li>
            </ul>
          </div>
        </div>

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

const ServicePillar = ({ icon, title, description, link, linkText }) => (
  <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
    <div className="w-12 h-12 bg-[#348DF01F] rounded-xl flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-5 flex-grow">{description}</p>
    <Link to={link} className="text-[#348DF0] font-semibold hover:underline text-sm">
      {linkText}
    </Link>
  </div>
);

export default HomeContent;

