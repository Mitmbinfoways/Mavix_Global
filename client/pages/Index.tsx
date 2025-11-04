import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Shield, Zap, TrendingUp, Users, CheckCircle, Star, ChevronLeft, ChevronRight, Play, BarChart3, Clock } from 'lucide-react';
import Layout from '../components/Layout';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterName, setNewsletterName] = useState('');
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Data arrays - declared first to avoid temporal dead zone issues
  const heroSlides = [
    {
      title: "Smart Accounting Outsourcing for Digital Excellence",
      subtitle: "Future-Ready Strategies",
      description: "Get the benefits of technology-powered accounting services and be competitive, profitable, and efficient.",
      bgColor: "from-mavix-navy via-mavix-navy to-mavix-blue",
      buttonText: "Discover Solutions",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
    },
    {
      title: "Bookkeeping Services for Small Businesses",
      subtitle: "Technology Leadership",
      description: "Professional, reachable, and personalized, keeping your books updated to stay compliant and competitive.",
      bgColor: "from-mavix-blue via-purple-800 to-mavix-navy",
      buttonText: "Explore Innovation",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
    },
    {
      title: "Your Finance Partner Who Knows Your Business",
      subtitle: "Operational Excellence",
      description: "Get innovative consulting services that drive growth and give an edge in today's dynamic marketplace.",
      bgColor: "from-teal-800 via-mavix-navy to-mavix-blue",
      buttonText: "Learn More",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
    }
  ];

  const services = [
    {
      icon: TrendingUp,
      title: "Excellence Meant for Results",
      description: "Streamlined strategies, mastered across many industry-driven implementations, leading to consistent performance in every market.",
      link: "/services/strategy",
      color: "text-mavix-blue"
    },
    {
      icon: BarChart3,
      title: "Business Impact, Measurable and Guaranteed",
      description: "Our result-driven approach offers quantifiable results; every move is calculated, tracked, and leads to transparent ROI.",
      link: "/services/data-analytics",
      color: "text-emerald-600"
    },
    {
      icon: Target,
      title: "Your Growth, Our Commitment",
      description: "We’re not just service providers, we’re your comrades, driving sustained growth, consistent innovation, and alliances that matter.",
      link: "/services/cloud-engineering",
      color: "text-purple-600"
    },
    // {
    //   icon: Shield,
    //   title: "Risk Assessment & Compliance",
    //   description: "Comprehensive risk management, regulatory compliance monitoring, and financial governance frameworks.",
    //   link: "/services/risk-compliance",
    //   color: "text-orange-600"
    // }
  ];

  const caseStudies = [
    {
      title: "Enterprise Financial Transformation",
      industry: "Financial Services",
      metric: "300% ROI Increase",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      description: "Comprehensive financial planning overhaul that optimized capital allocation and enhanced profitability metrics.",
      link: "/case-studies/financial-transformation",
      category: "Financial Planning"
    },
    {
      title: "Multi-Entity Budget Optimization",
      industry: "Manufacturing Conglomerate",
      metric: "45% Cost Reduction",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      description: "Advanced financial modeling and analysis that streamlined operations across 12 global subsidiaries.",
      link: "/case-studies/budget-optimization",
      category: "Financial Analysis"
    },
    {
      title: "Investment Portfolio Strategy",
      industry: "Private Equity",
      metric: "150% Portfolio Growth",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      description: "Strategic financial planning and risk assessment that maximized returns while minimizing exposure.",
      link: "/case-studies/portfolio-strategy",
      category: "Investment Planning"
    }
  ];

  const clients = [
    "InnovateTech", "NextGen Solutions", "FutureFlow Systems", "Pinnacle Dynamics", "Quantum Industries", "Apex Ventures"
  ];

  const testimonials = [
    {
      quote: "Mavix Global's innovative approach completely transformed our operational capabilities. Their strategic insights exceeded every expectation.",
      author: "Alexandra Morrison",
      title: "Chief Executive Officer, InnovateTech",
      rating: 5
    },
    {
      quote: "The level of expertise and dedication demonstrated by their team was extraordinary. Our business trajectory changed dramatically.",
      author: "David Chen",
      title: "Managing Director, FutureFlow Systems",
      rating: 5
    },
    {
      quote: "Working with Mavix Global was a game-changer. Their data-driven methodologies delivered results we never thought possible.",
      author: "Sarah Rodriguez",
      title: "VP of Operations, Quantum Industries",
      rating: 5
    }
  ];

  // Initial setup and smooth auto-play functionality
  useEffect(() => {
    setIsVisible(true);

    // Single unified slider interval to prevent conflicts
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    const clientInterval = setInterval(() => {
      setCurrentClientIndex((prev) => (prev + 1) % clients.length);
    }, 2500);

    return () => {
      clearInterval(slideInterval);
      clearInterval(clientInterval);
    };
  }, [heroSlides.length, clients.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', { name: newsletterName, email: newsletterEmail });
    setNewsletterEmail('');
    setNewsletterName('');
    setShowNewsletterModal(false);
  };

  return (
    <Layout>
      {/* Modern Hero Slider */}
      <section className="relative min-h-screen-dynamic mobile-viewport-safe mobile-full-viewport flex items-center overflow-hidden">
        {/* Background with Smooth Transitions */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-100'
                }`}
            >
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-indigo-900/90" />
                {/* Subtle Pattern */}
                <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700 bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_70%)] opacity-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-6 h-[420px] md:h-[380px] flex flex-col justify-center">
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-blue-200 text-sm font-medium transition-all duration-500">
                      {heroSlides[currentSlide].subtitle}
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transition-all duration-500 min-h-[120px] md:min-h-[100px] flex items-center">
                    <span>
                      {heroSlides[currentSlide].title.split(' ').map((word, index) => (
                        <span key={index}>
                          {index === heroSlides[currentSlide].title.split(' ').length - 2 ? (
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                              {word}
                            </span>
                          ) : (
                            word
                          )}
                          {index < heroSlides[currentSlide].title.split(' ').length - 1 && ' '}
                        </span>
                      ))}
                    </span>
                  </h1>

                  <p className="text-xl text-gray-200 leading-relaxed max-w-2xl transition-all duration-500 min-h-[80px] flex items-start">
                    {heroSlides[currentSlide].description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                  >
                    <span className="transition-all duration-500">{heroSlides[currentSlide].buttonText}</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Right Visual Element */}
              <div className="lg:col-span-5 flex justify-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl blur-2xl transform rotate-6" />
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                        <div className="text-3xl font-bold text-white">500+</div>
                        <div className="text-sm text-blue-200">Happy Clients</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                        <div className="text-3xl font-bold text-white">15+</div>
                        <div className="text-sm text-blue-200">Years Experience</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                        <div className="text-3xl font-bold text-white">25+</div>
                        <div className="text-sm text-blue-200">Countries</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                        <div className="text-3xl font-bold text-white">99%</div>
                        <div className="text-sm text-blue-200">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? 'w-8 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 p-3 rounded-full transition-all duration-300 z-20 group"
        >
          <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 p-3 rounded-full transition-all duration-300 z-20 group"
        >
          <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* Animated Services Grid */}
      <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Why Rely on Mavix Global
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced financial modeling, strategic analysis, and data-driven insights that optimize performance and accelerate sustainable growth across all business dimensions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-mavix-blue to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125"></div>
                </div>
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4 group-hover:text-mavix-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-mavix-blue hover:text-mavix-navy font-semibold inline-flex items-center group-hover:translate-x-2 transition-all duration-300"
                >
                  Explore Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions with Animation */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-mavix-blue/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-8">
                <span className="bg-mavix-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-10 leading-tight">
                Why Visionary Leaders Partner With Mavix Global
              </h2>
              <div className="space-y-10">
                <div className="flex items-start space-x-6 animate-fade-in-up group hover:bg-white dark:hover:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1" style={{ animationDelay: '200ms' }}>
                  <div className="bg-mavix-blue/10 p-3 rounded-full group-hover:bg-mavix-blue/20 transition-colors duration-300">
                    <CheckCircle className="h-8 w-8 text-mavix-blue flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-mavix-neutral-dark dark:text-white mb-3 text-xl">Proven Excellence Framework</h3>
                    <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">Proprietary methodologies refined through hundreds of successful implementations across diverse industries and market conditions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 animate-fade-in-up group hover:bg-white dark:hover:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1" style={{ animationDelay: '400ms' }}>
                  <div className="bg-emerald-500/10 p-3 rounded-full group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <CheckCircle className="h-8 w-8 text-emerald-500 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-mavix-neutral-dark dark:text-white mb-3 text-xl">Quantifiable Business Value</h3>
                    <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">Results-oriented approach with transparent metrics, continuous monitoring, and measurable return on investment guarantees.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 animate-fade-in-up group hover:bg-white dark:hover:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1" style={{ animationDelay: '600ms' }}>
                  <div className="bg-purple-500/10 p-3 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300">
                    <CheckCircle className="h-8 w-8 text-purple-500 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-mavix-neutral-dark dark:text-white mb-3 text-xl">Strategic Partnership Commitment</h3>
                    <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">Long-term relationship building focused on sustained growth, continuous innovation, and adaptive strategic evolution.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-mavix-blue to-purple-600 rounded-3xl transform rotate-3 opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                  alt="Strategic partnership collaboration"
                  className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500 z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-mavix-blue to-purple-600 rounded-full opacity-30 animate-float"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-mavix-blue rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Client Showcase */}
      <section className="py-24 bg-gradient-to-br from-white via-mavix-neutral-light to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mavix-blue/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-mavix-blue to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                Trusted Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Trusted by Innovation Leaders Worldwide
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Building lasting partnerships with companies that shape the future across diverse industries and markets.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 transform animate-fade-in-up h-full ${index === currentClientIndex
                    ? 'scale-105 opacity-100'
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-600 hover:border-mavix-blue dark:hover:border-mavix-blue group h-full flex flex-col justify-center">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-mavix-blue to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{client.charAt(0)}</span>
                      </div>
                      <span className="font-bold text-sm text-mavix-neutral-dark dark:text-white group-hover:text-mavix-blue transition-colors duration-300">
                        {client}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Statistics */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="text-4xl font-bold text-mavix-blue mb-2">500+</div>
                <div className="text-mavix-gray dark:text-gray-300 font-medium">Global Clients</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <div className="text-4xl font-bold text-emerald-500 mb-2">25+</div>
                <div className="text-mavix-gray dark:text-gray-300 font-medium">Countries Served</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <div className="text-4xl font-bold text-purple-500 mb-2">99%</div>
                <div className="text-mavix-gray dark:text-gray-300 font-medium">Satisfaction Rate</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '900ms' }}>
                <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-mavix-gray dark:text-gray-300 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark mb-6">
              Voices of Transformation
            </h2>
            <p className="text-xl text-mavix-gray max-w-3xl mx-auto">
              Authentic testimonials from leaders who have experienced the Mavix Global difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-mavix-neutral-light to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border-2 border-transparent hover:border-mavix-blue shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <blockquote className="text-lg text-mavix-neutral-dark dark:text-white mb-8 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                  <div className="font-bold text-mavix-neutral-dark dark:text-white mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-mavix-gray dark:text-gray-300 text-sm">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Accounting CTA */}
      <section className="py-24 bg-gradient-to-br from-mavix-navy via-mavix-blue to-indigo-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
          <div className="w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
          <div className="w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-200 text-sm font-medium">Transform Your Business</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Accounting?</span>
                </h2>

                <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
                  Join thousands of businesses who have revolutionized their financial operations with our expert accounting solutions. Experience the difference professional service makes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => setShowNewsletterModal(true)}
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Network
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-blue-200">Businesses Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-sm text-blue-200">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                      <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">60%</div>
                      <div className="text-sm text-blue-200">Cost Reduction</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                      <Clock className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">50hrs</div>
                      <div className="text-sm text-blue-200">Time Saved Monthly</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                      <Shield className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-sm text-blue-200">Compliance Rate</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                      <CheckCircle className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-sm text-blue-200">Expert Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Modal */}
      {showNewsletterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-10 max-w-md w-full transform animate-scale-in shadow-2xl">
            <h3 className="text-3xl font-bold text-mavix-neutral-dark mb-6 text-center">
              Join Our Network
            </h3>
            <p className="text-mavix-gray mb-8 text-center">
              Get exclusive access to strategic insights and industry intelligence
            </p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="mb-6">
                <label className="block text-mavix-neutral-dark font-semibold mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newsletterName}
                  onChange={(e) => setNewsletterName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-mavix-blue focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-mavix-neutral-dark font-semibold mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-mavix-blue focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-8">
                <label className="flex items-start">
                  <input type="checkbox" className="mr-3 mt-1" required />
                  <span className="text-sm text-mavix-gray leading-relaxed">
                    I consent to receiving strategic insights and industry updates from Mavix Global. Privacy compliant and unsubscribe anytime.
                  </span>
                </label>
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-mavix-navy text-white py-3 rounded-lg font-semibold hover:bg-mavix-blue transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe Now
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewsletterModal(false)}
                  className="flex-1 border-2 border-gray-300 text-mavix-gray py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
