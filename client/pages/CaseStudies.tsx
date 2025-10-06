import Layout from '../components/Layout';
import { TrendingUp, DollarSign, Clock, Users, CheckCircle, ArrowRight, Building, Factory, Briefcase, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Small Business', 'Manufacturing', 'Retail', 'Professional Services', 'Technology'];

  const caseStudies = [
    {
      id: 1,
      title: 'Melbourne Restaurant Chain Streamlines Operations',
      category: 'Retail',
      industry: 'Food & Beverage',
      client: 'Confidential Restaurant Group',
      challenge: 'Manual bookkeeping across 5 locations causing errors and delays',
      solution: 'Implemented Xero with automated bank feeds and integrated POS systems',
      results: [
        '75% reduction in bookkeeping time',
        '99% accuracy in financial reporting',
        'Real-time visibility across all locations',
        '$15,000 annual cost savings'
      ],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
      icon: ShoppingBag,
      color: 'text-emerald-600'
    },
    {
      id: 2,
      title: 'Manufacturing Company Achieves Perfect BAS Compliance',
      category: 'Manufacturing',
      industry: 'Manufacturing',
      client: 'Sydney Steel Works Pty Ltd',
      challenge: 'Recurring BAS penalties and cash flow management issues',
      solution: 'Professional BAS preparation service and cash flow forecasting',
      results: [
        'Zero BAS penalties for 3+ years',
        'Improved cash flow by 30%',
        'Streamlined tax compliance process',
        'Enhanced supplier relationships'
      ],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
      icon: Factory,
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Law Firm Modernizes Financial Operations',
      category: 'Professional Services',
      industry: 'Legal Services',
      client: 'Brisbane Legal Partners',
      challenge: 'Outdated accounting system and complex trust account management',
      solution: 'Migration to cloud-based system with specialized legal accounting features',
      results: [
        'Reduced monthly closing time by 60%',
        'Improved trust account compliance',
        'Enhanced client billing accuracy',
        'Significant cost reduction in IT support'
      ],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
      icon: Briefcase,
      color: 'text-purple-600'
    },
    {
      id: 4,
      title: 'Tech Startup Scales with Professional Payroll',
      category: 'Technology',
      industry: 'Technology',
      client: 'InnovateAI Solutions',
      challenge: 'Rapid growth from 5 to 50 employees overwhelming internal resources',
      solution: 'Complete payroll outsourcing with employee self-service portal',
      results: [
        '100% payroll accuracy maintained',
        'Freed up 20 hours per week for HR',
        'Seamless onboarding process',
        'Reduced payroll processing costs by 40%'
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
      icon: Users,
      color: 'text-orange-600'
    },
    {
      id: 5,
      title: 'Family Business Transitions to Next Generation',
      category: 'Small Business',
      industry: 'Retail',
      client: 'Heritage Hardware Stores',
      challenge: 'Multi-generational business needing modern accounting practices',
      solution: 'Gradual transition to cloud accounting with comprehensive training',
      results: [
        'Smooth generational handover',
        'Improved financial visibility',
        'Modernized inventory management',
        'Enhanced decision-making capabilities'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
      icon: Building,
      color: 'text-indigo-600'
    },
    {
      id: 6,
      title: 'E-commerce Business Achieves Financial Clarity',
      category: 'Technology',
      industry: 'E-commerce',
      client: 'Online Fashion Boutique',
      challenge: 'Complex multi-channel sales requiring accurate financial tracking',
      solution: 'Integrated accounting system connecting all sales channels',
      results: [
        'Real-time profit margin analysis',
        'Automated inventory valuation',
        'Streamlined tax reporting',
        'Improved cash flow forecasting'
      ],
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
      icon: TrendingUp,
      color: 'text-pink-600'
    }
  ];

  const filteredCaseStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Successful Projects', icon: CheckCircle },
    { number: '98%', label: 'Client Satisfaction', icon: Users },
    { number: '$2.5M', label: 'Client Savings Generated', icon: DollarSign },
    { number: '15+', label: 'Years of Excellence', icon: Clock }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-mavix-navy via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide">
                Success Stories
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across Australia transform their financial operations and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-mavix-neutral-light dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <stat.icon className="h-12 w-12 text-mavix-blue mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-mavix-neutral-dark dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-mavix-gray dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Filter by Industry
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-mavix-blue text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-mavix-gray dark:text-gray-300 hover:bg-mavix-blue hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <study.icon className={`h-5 w-5 ${study.color} inline mr-2`} />
                    <span className="text-sm font-semibold text-mavix-neutral-dark">{study.industry}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm text-mavix-blue font-semibold bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-mavix-neutral-dark dark:text-white mb-2">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-mavix-gray dark:text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-mavix-blue hover:bg-mavix-navy text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-mavix-blue to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Join hundreds of successful businesses who have transformed their financial operations with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-mavix-blue hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your Transformation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <Link 
                to="/services/bookkeeping" 
                className="border-2 border-white text-white hover:bg-white hover:text-mavix-blue px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
