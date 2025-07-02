import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Star, Users, Zap, Shield } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized performance that delivers results in milliseconds, ensuring your users never wait.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee. Your data is always protected.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools that bring your team together, no matter where they are.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                <span className="text-blue-500">Nexus</span>Pro
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isScrolled
                        ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-slate-200/50">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Digital Experience
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the next generation of web solutions that combine cutting-edge technology 
            with intuitive design to deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
              Get Started Today
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-slate-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-slate-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-300">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale your applications with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Built for the Future
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our platform combines cutting-edge technology with user-centric design to deliver 
                solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With over a decade of experience in digital innovation, we've helped thousands 
                of businesses transform their operations and achieve unprecedented growth.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">Trusted by 50,000+ customers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl p-8">
                <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                    <p className="text-white/80">Driving the future of technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their business with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
              Start Your Journey
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Nexus</span>Pro
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Empowering businesses with cutting-edge technology solutions that drive growth and innovation.
            </p>
            <div className="flex justify-center space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-slate-500">
              © 2025 NexusPro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;