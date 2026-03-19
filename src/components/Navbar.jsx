import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleTestimonialsClick = () => {
    closeMobileMenu();
    navigate("/", { state: { scrollTo: "test" } });
  };

  return (
    <div className="relative z-50 w-full flex justify-center pt-10 px-4">
      <nav className="relative w-full max-w-7xl bg-[#001224] text-white px-6 py-3 flex items-center justify-between shadow-xl border border-slate-800/50 rounded-full">
        <Link to="/" onClick={closeMobileMenu}>
          <div className="flex items-center gap-3 pl-2">
            <img src="/logo.png" alt="Wendigo Advisors - Healthcare CIO Advisory Services by Brian Damiani" className="w-32 sm:w-42 h-8 sm:h-10 object-contain" />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-slate-200 text-sm font-semibold tracking-wide">
          <NavItemWithDropdown label="Services" />
          <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
          <button onClick={handleTestimonialsClick} className="hover:text-white transition-colors">
            Testimonials
          </button>
          <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
          <a href="https://yourhealthcarecio.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blogs</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://t.ly/7Jjhw" target="_blank" rel="noreferrer">
            <button className="hidden sm:block bg-[#338CF0] text-white font-semibold py-3 px-8 rounded-full text-sm">
              Contact Us for Free
            </button>
          </a>

          {!isMobileMenuOpen && (
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-gray-300 hover:text-white">
              <Menu size={28} />
            </button>
          )}
        </div>

        <div
          className={`
            fixed inset-0 w-full h-screen bg-[#001224] transition-all duration-500 ease-in-out
            ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
            lg:hidden z-[100] flex flex-col p-6 overflow-y-auto
          `}
        >
          <div className="flex items-center justify-between w-full px-2">
            <img src="/logo.png" alt="Logo" className="w-32 h-8 object-contain" />
            <button onClick={closeMobileMenu} className="p-2 text-gray-300 hover:text-white">
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 mt-12">
            <Link to="/" onClick={closeMobileMenu} className="text-3xl font-medium hover:text-blue-400">Home</Link>

            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center gap-2 text-3xl font-medium hover:text-blue-400"
              >
                Services <ChevronDown size={24} className={`${isMobileServicesOpen ? "rotate-180" : ""} transition-transform`} />
              </button>

              {isMobileServicesOpen && (
                <div className="flex flex-col items-center gap-4 mt-4 py-4 px-6 bg-slate-800/30 rounded-2xl w-full">
                  <a href="https://t.ly/7Jjhw" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="text-xl text-slate-300 hover:text-white">Free Working Session</a>
                  <Link to="/services#strategic" onClick={closeMobileMenu} className="text-xl text-slate-300 hover:text-white">Strategic Advisor</Link>
                  <Link to="/services#cio" onClick={closeMobileMenu} className="text-xl text-slate-300 hover:text-white">CIO Advisor</Link>
                  <Link to="/services#virtual" onClick={closeMobileMenu} className="text-xl text-slate-300 hover:text-white">Virtual CIO</Link>
                </div>
              )}
            </div>

            <Link to="/about" onClick={closeMobileMenu} className="text-3xl font-medium hover:text-blue-400">About Us</Link>
            <button onClick={handleTestimonialsClick} className="text-3xl font-medium hover:text-blue-400 text-center">Testimonials</button>
            <Link to="/insights" onClick={closeMobileMenu} className="text-3xl font-medium hover:text-blue-400">Insights</Link>
            <a href="https://yourhealthcarecio.com/blog" onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer" className="text-3xl font-medium hover:text-blue-400">Blogs</a>
          </div>

          <div className="mt-auto flex flex-col items-center gap-8 pb-10">
            <a href="https://www.linkedin.com/company/wendigo-advisors/" target="_blank" rel="noopener noreferrer" className="p-3 border border-slate-600 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors bg-slate-900/50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <p className="text-[14px] text-gray-500 uppercase tracking-[0.2em] font-light">
              © 2025 All Rights Reserved.
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

function NavItemWithDropdown({ label }) {
  return (
    <div className="group relative cursor-pointer flex items-center gap-1 hover:text-white transition-colors py-2">
      <span>{label}</span>
      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-[#001224]/95 border border-slate-700/50 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 backdrop-blur-xl overflow-hidden">
        <div className="py-3 flex flex-col">
          <a href="https://t.ly/7Jjhw" target="_blank" rel="noopener noreferrer" className="px-6 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-white text-sm transition-colors">Free Working Session</a>
          <Link to="/services#strategic" className="px-6 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-white text-sm transition-colors">Strategic Advisor</Link>
          <Link to="/services#cio" className="px-6 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-white text-sm transition-colors">CIO Advisor</Link>
          <Link to="/services#virtual" className="px-6 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-white text-sm transition-colors">Virtual CIO</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;