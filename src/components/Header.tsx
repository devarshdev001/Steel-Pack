import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const productsList = [
  'Self Adhesive Tapes',
  'Stereo Mounting Tape',
  'BOPP Tape',
  'Red PVC Tape',
  'HDPE Tape',
  'Tissu Tape',
  'Air Ducting Tape',
  'Aluminium Foil Tape',
  'Masking Tape',
  'Packing Tape',
  'Cotton Fabric Tapes',
  'Paper Self Adhesive Tapes',
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <h1 className="text-cyan-500">Steel Pack</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('hero')} className="text-slate-300 hover:text-cyan-500 transition-colors">
              Home
            </button>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button 
                onClick={() => scrollToSection('products')} 
                className="text-slate-300 hover:text-cyan-500 transition-colors flex items-center gap-1"
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-200 ${
                  productsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-2">
                  {productsList.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        scrollToSection('products');
                        setProductsDropdownOpen(false);
                      }}
                      className="w-full text-left px-6 py-3 text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                    >
                      {product}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-cyan-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('infrastructure')} className="text-slate-300 hover:text-cyan-500 transition-colors">
              Infrastructure
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors">
              Home
            </button>
            
            {/* Mobile Products with Sub-items */}
            <div>
              <button 
                onClick={() => {
                  scrollToSection('products');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors"
              >
                Products
              </button>
              <div className="pl-4 mt-1 space-y-1">
                {productsList.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      scrollToSection('products');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-cyan-400 rounded-lg transition-colors"
                  >
                    {product}
                  </button>
                ))}
              </div>
            </div>
            
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('infrastructure')} className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors">
              Infrastructure
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 bg-cyan-600 text-white hover:bg-cyan-700 rounded-lg transition-colors">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}