import Layout from '../../components/Layout';
import { Calculator, BarChart3, Users, Shield, CheckCircle, ArrowRight, Cloud, Zap, FileText, TrendingUp, Clock, Award, Star, DollarSign, Settings, Target, Smartphone, Wifi, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CloudAccounting() {
  const features = [
    {
      icon: Cloud,
      title: 'Anytime, Anywhere Access',
      description: 'Access your financial data from any device, anywhere in the world with secure internet connection and real-time synchronization.'
    },
    {
      icon: Zap,
      title: 'Real-Time Collaboration',
      description: 'Multiple users can work simultaneously with instant updates, eliminating version conflicts and improving team productivity.'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption, automated backups, and advanced security protocols protect your sensitive financial information.'
    },
    {
      icon: Database,
      title: 'Automatic Data Backup',
      description: 'Continuous automated backups ensure your data is always safe and recoverable, eliminating the risk of data loss.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Full-featured mobile apps allow complete accounting management from smartphones and tablets on the go.'
    },
    {
      icon: Wifi,
      title: 'Seamless Integration',
      description: 'Connect with banks, payment processors, e-commerce platforms, and business tools for streamlined operations.'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Reduce IT Overhead by 75%',
      description: 'Eliminate server maintenance, software updates, and IT infrastructure costs with cloud-based solutions.',
      metric: '75% cost reduction'
    },
    {
      icon: TrendingUp,
      title: 'Improve Team Productivity',
      description: 'Real-time collaboration and instant access to financial data boost team efficiency and decision-making speed.',
      metric: '60% productivity gain'
    },
    {
      icon: BarChart3,
      title: 'Enhanced Data Security',
      description: 'Cloud providers offer superior security measures compared to on-premise solutions with 99.9% uptime guarantee.',
      metric: '99.9% uptime'
    },
    {
      icon: DollarSign,
      title: 'Scalable Cost Structure',
      description: 'Pay only for what you use with flexible pricing models that scale with your business growth and requirements.',
      metric: 'Flexible scaling'
    },
    {
      icon: Users,
      title: 'Global Team Collaboration',
      description: 'Enable remote work and global team collaboration with synchronized data and multi-user access capabilities.',
      metric: 'Unlimited users'
    },
    {
      icon: Award,
      title: 'Automatic Updates',
      description: 'Always stay current with the latest features, security patches, and compliance updates without manual intervention.',
      metric: 'Always up-to-date'
    }
  ];

  const cloudSolutions = [
    {
      title: 'Small Business Cloud Accounting',
      description: 'Perfect for startups and small businesses needing basic cloud accounting with essential features and affordable pricing.',
      features: [
        'Cloud-based invoicing & quotes',
        'Bank transaction sync',
        'Expense tracking & receipts',
        'Basic financial reporting',
        'Mobile app access',
        'Multi-user collaboration',
        'Automated backups'
      ],
      platforms: ['Xero', 'QuickBooks Online', 'MYOB Business'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900'
    },
    {
      title: 'Enterprise Cloud Solutions',
      description: 'Comprehensive cloud accounting for large organizations requiring advanced features, customization, and enterprise security.',
      features: [
        'Advanced financial management',
        'Multi-entity consolidation',
        'Custom workflow automation',
        'Advanced security controls',
        'API integrations',
        'Dedicated support',
        'Compliance management'
      ],
      platforms: ['Sage Intacct', 'NetSuite', 'SAP Business ByDesign'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900',
      popular: true
    },
    {
      title: 'Industry-Specific Cloud Platforms',
      description: 'Specialized cloud accounting solutions designed for specific industries with tailored features and compliance requirements.',
      features: [
        'Industry-specific features',
        'Regulatory compliance',
        'Specialized reporting',
        'Integration capabilities',
        'Scalable architecture',
        'Expert support',
        'Custom configurations'
      ],
      platforms: ['Construction Software', 'Retail Solutions', 'Manufacturing ERP'],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900'
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Flexible deployment combining cloud benefits with on-premise control for businesses with specific security requirements.',
      features: [
        'Hybrid cloud architecture',
        'Data sovereignty control',
        'Enhanced security options',
        'Flexible deployment',
        'Custom integration',
        'Dedicated infrastructure',
        'Advanced compliance'
      ],
      platforms: ['Microsoft Dynamics', 'Oracle Cloud', 'Custom Solutions'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900'
    }
  ];

  const migrationProcess = [
    {
      step: '01',
      title: 'Cloud Readiness Assessment',
      description: 'Comprehensive evaluation of your current systems, data, and requirements to design the optimal cloud migration strategy.',
      icon: Target
    },
    {
      step: '02',
      title: 'Platform Selection & Planning',
      description: 'Expert guidance in selecting the right cloud accounting platform and developing a detailed migration timeline and plan.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Secure Data Migration',
      description: 'Professional data migration with full security protocols, testing, and validation to ensure data integrity and accuracy.',
      icon: Database
    },
    {
      step: '04',
      title: 'Training & Optimization',
      description: 'Comprehensive team training and system optimization to maximize the benefits of your new cloud accounting solution.',
      icon: Users
    }
  ];

  const securityFeatures = [
    {
      title: 'Multi-Factor Authentication',
      description: 'Advanced authentication requiring multiple verification methods to protect against unauthorized access.',
      icon: Shield
    },
    {
      title: 'Data Encryption',
      description: 'Bank-level 256-bit SSL encryption for data transmission and storage, ensuring maximum security.',
      icon: FileText
    },
    {
      title: 'Regular Security Audits',
      description: 'Continuous security monitoring and regular third-party audits to maintain the highest security standards.',
      icon: Award
    },
    {
      title: 'Automated Backups',
      description: 'Multiple daily backups stored in geographically diverse locations for maximum data protection and recovery.',
      icon: Database
    }
  ];

  const platformComparison = [
    {
      name: 'QuickBooks Online',
      strengths: ['User-friendly interface', 'Strong integration ecosystem', 'Excellent mobile apps', 'Affordable pricing'],
      bestFor: 'Small to medium businesses, freelancers, service-based companies',
      pricing: 'From $15/month'
    },
    {
      name: 'Xero',
      strengths: ['Beautiful interface design', 'Strong bank connectivity', 'Excellent third-party apps', 'Multi-currency support'],
      bestFor: 'Growing businesses, international operations, accountants and bookkeepers',
      pricing: 'From $13/month'
    },
    {
      name: 'MYOB Business',
      strengths: ['Australian-built features', 'GST and STP compliance', 'Payroll integration', 'Local support'],
      bestFor: 'Australian businesses, payroll-heavy companies, compliance-focused organizations',
      pricing: 'From $27/month'
    },
    {
      name: 'Sage Intacct',
      strengths: ['Advanced financial management', 'Dimensional reporting', 'Multi-entity support', 'Workflow automation'],
      bestFor: 'Enterprise organizations, complex financial structures, growing companies',
      pricing: 'Custom pricing'
    }
  ];

  const integrations = [
    { category: 'Banking', tools: 'Major Australian banks, international banks, payment processors' },
    { category: 'E-commerce', tools: 'Shopify, WooCommerce, Amazon, eBay, Magento' },
    { category: 'CRM', tools: 'Salesforce, HubSpot, Pipedrive, Zoho CRM' },
    { category: 'Payroll', tools: 'ADP, BambooHR, Gusto, local payroll providers' },
    { category: 'Inventory', tools: 'TradeGecko, Unleashed, Cin7, warehouse management' },
    { category: 'Project Management', tools: 'Asana, Monday.com, Trello, Microsoft Project' },
    { category: 'Time Tracking', tools: 'Toggl, Harvest, TimeTagger, workforce management' },
    { category: 'Document Management', tools: 'SharePoint, Google Drive, Dropbox, Box' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'Chen Digital Agency',
      text: 'Moving to cloud accounting was the best decision we made. Our team can now collaborate seamlessly from anywhere, and our data is always secure.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'Torres Construction',
      text: 'The cloud migration eliminated our IT headaches and reduced costs by 60%. Real-time project tracking has improved our profitability significantly.',
      rating: 5
    },
    {
      name: 'Emma Williams',
      company: 'Williams Consulting Group',
      text: 'Cloud accounting transformed how we serve our clients. We can access any client\'s data instantly and collaborate with their teams in real-time.',
      rating: 5
    }
  ];

  const services = [
    'Cloud Readiness Assessment & Strategy',
    'Platform Selection & Recommendation',
    'Secure Data Migration & Transfer',
    'Cloud System Configuration & Setup',
    'User Access & Security Configuration',
    'Integration with Existing Systems',
    'Team Training & Change Management',
    'Performance Optimization & Tuning',
    'Ongoing Support & Maintenance',
    'Security Monitoring & Updates',
    'Backup & Disaster Recovery Planning',
    'Compliance & Regulatory Setup',
    'Mobile App Configuration',
    'Custom Workflow Development',
    'Third-Party Integration Setup',
    'Cloud Cost Optimization'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 dark:from-gray-900 dark:via-cyan-900 dark:to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-cyan-700 dark:text-cyan-300 text-sm font-medium">Cloud Accounting Experts</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Cloud</span> Accounting Solutions
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Transform your business with secure, scalable, and accessible cloud accounting solutions. Expert migration, implementation, and ongoing support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Start Cloud Migration
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Cloud Assessment
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Access</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Secure</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cloud</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="Cloud accounting software interface"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Cloud</div>
                    <div className="text-sm">Native</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              The Power of Cloud Accounting
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover how cloud-based accounting solutions can transform your business operations with enhanced accessibility, security, and collaboration capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-cyan-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Cloud Accounting Solutions for Every Business
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              From small startups to large enterprises, we provide tailored cloud accounting solutions that scale with your business needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudSolutions.map((solution, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${solution.popular ? 'border-mavix-blue' : 'border-gray-100 dark:border-gray-600'} animate-fade-in-up relative`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {solution.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-mavix-blue text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold ${solution.color} mb-4`}>
                  {solution.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-mavix-neutral-dark dark:text-white mb-3">Key Features:</h4>
                  <div className={`${solution.bgColor} dark:bg-opacity-20 p-4 rounded-lg`}>
                    <div className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className={`h-4 w-4 ${solution.color} flex-shrink-0`} />
                          <span className="text-sm text-mavix-gray dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-mavix-neutral-dark dark:text-white mb-2">Recommended Platforms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.platforms.map((platform, idx) => (
                      <span key={idx} className={`${solution.color} bg-opacity-10 px-3 py-1 rounded-full text-xs font-medium`}>
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <button className={`w-full border-2 border-current ${solution.color} hover:bg-current hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Popular Cloud Accounting Platforms
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Compare leading cloud accounting platforms to find the perfect fit for your business requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformComparison.map((platform, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white">
                    {platform.name}
                  </h3>
                  <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-semibold">
                    {platform.pricing}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-mavix-neutral-dark dark:text-white mb-3">Key Strengths:</h4>
                  <div className="space-y-2">
                    {platform.strengths.map((strength, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                        <span className="text-mavix-gray dark:text-gray-300 text-sm">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-mavix-neutral-dark dark:text-white mb-2">Best For:</h4>
                  <p className="text-mavix-gray dark:text-gray-300 text-sm">{platform.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Your financial data is protected by the highest security standards and best practices in the cloud computing industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-cyan-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Complete Cloud Migration & Support Services
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                From initial assessment to ongoing optimization, our comprehensive cloud accounting services ensure a seamless transition and maximum value from your cloud investment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Cloud accounting implementation" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Transform Your Business with Cloud Accounting
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, cost savings, and business agility with cloud-based accounting solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-cyan-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="bg-cyan-50 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded-lg text-sm font-semibold">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our Cloud Migration Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures secure, efficient, and successful migration to cloud accounting with minimal business disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationProcess.map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-mavix-blue text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Cloud integrations and connectivity" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Seamless Business Ecosystem Integration
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Connect your cloud accounting solution with hundreds of business applications for streamlined operations and enhanced productivity.
              </p>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-cyan-500 bg-opacity-10 p-2 rounded-full flex-shrink-0">
                      <Zap className="h-5 w-5 text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mavix-neutral-dark dark:text-white">{integration.category}</h4>
                      <p className="text-mavix-gray dark:text-gray-300">{integration.tools}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Success Stories from Cloud Migration
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover how Australian businesses have transformed their operations and achieved significant benefits with cloud accounting solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-mavix-neutral-dark dark:text-white">{testimonial.name}</h4>
                  <p className="text-cyan-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Transform your business with secure, scalable cloud accounting solutions. Our experts will guide you through every step of the migration process.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your Cloud Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule Cloud Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
