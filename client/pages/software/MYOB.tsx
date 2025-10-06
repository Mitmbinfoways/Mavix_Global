import Layout from '../../components/Layout';
import { Calculator, BarChart3, Users, Shield, CheckCircle, ArrowRight, Cloud, Zap, FileText, TrendingUp, Clock, Award, Star, DollarSign, Settings, Target, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MYOB() {
  const features = [
    {
      icon: Calculator,
      title: 'Complete Business Management',
      description: 'All-in-one business management solution combining accounting, payroll, inventory, and CRM functionality in one platform.'
    },
    {
      icon: BarChart3,
      title: 'Australian Tax Compliance',
      description: 'Built-in Australian tax features including GST, BAS reporting, Single Touch Payroll, and ATO compliance requirements.'
    },
    {
      icon: Users,
      title: 'Payroll Excellence',
      description: 'Comprehensive payroll management with superannuation, leave management, and award interpretation for Australian businesses.'
    },
    {
      icon: Cloud,
      title: 'Cloud-First Approach',
      description: 'Modern cloud-based architecture providing real-time access, automatic updates, and seamless collaboration capabilities.'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Advanced security features including data encryption, secure backups, and multi-factor authentication for peace of mind.'
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Intelligent automation features for invoicing, bank feeds, payment processing, and routine accounting tasks.'
    }
  ];

  const services = [
    'MYOB Software Selection & Setup',
    'Business Data Migration & Import',
    'Chart of Accounts Configuration',
    'Bank Feed & Payment Integration',
    'Customer & Supplier Database Setup',
    'Inventory Management Configuration',
    'Payroll Setup & Award Configuration',
    'Single Touch Payroll (STP) Setup',
    'BAS & GST Configuration',
    'Custom Report Development',
    'Multi-User Access & Permissions',
    'Third-Party App Integrations',
    'Comprehensive Staff Training',
    'Ongoing Support & Maintenance',
    'System Updates & Optimization',
    'Data Backup & Recovery Solutions'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated bank feeds, invoicing, and payroll processing significantly reduce manual data entry and administrative overhead.',
      metric: '80% time reduction'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Business Insights',
      description: 'Live dashboards and instant reporting provide up-to-date visibility into business performance and financial position.',
      metric: 'Real-time visibility'
    },
    {
      icon: BarChart3,
      title: 'Simplified Compliance',
      description: 'Automated BAS preparation, STP reporting, and GST calculations ensure seamless compliance with Australian requirements.',
      metric: '100% ATO compliance'
    },
    {
      icon: DollarSign,
      title: 'Improved Cash Flow',
      description: 'Faster invoicing, automated payment reminders, and integrated payment processing accelerate cash flow by 45%.',
      metric: '45% faster payments'
    },
    {
      icon: Users,
      title: 'Streamlined Payroll',
      description: 'Automated payroll processing with award interpretation, superannuation, and leave management reduces payroll errors.',
      metric: '99.9% accuracy'
    },
    {
      icon: Award,
      title: 'Professional Presentation',
      description: 'Customizable invoices, statements, and reports that enhance your business image and brand consistency.',
      metric: 'Enhanced branding'
    }
  ];

  const myobProducts = [
    {
      title: 'MYOB Business',
      description: 'Perfect for small businesses needing essential accounting, invoicing, and basic inventory management features.',
      price: 'From $27/month',
      features: [
        'Online invoicing & quotes',
        'Bank transaction matching',
        'Expense claim management',
        'Basic inventory tracking',
        'GST & BAS reporting',
        'Mobile app access',
        'Email support'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900',
      borderColor: 'border-blue-200'
    },
    {
      title: 'MYOB Essentials',
      description: 'Comprehensive solution for growing businesses with payroll, inventory management, and multi-user access.',
      price: 'From $45/month',
      features: [
        'Everything in Business',
        'Payroll for up to 5 employees',
        'Advanced inventory management',
        'Multi-user access (up to 3)',
        'Time billing & job tracking',
        'Purchase order management',
        'Priority support'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900',
      borderColor: 'border-green-200',
      popular: true
    },
    {
      title: 'MYOB Advanced',
      description: 'Enterprise solution for complex businesses requiring advanced features, unlimited users, and customization.',
      price: 'From $150/month',
      features: [
        'Everything in Essentials',
        'Unlimited users & payroll',
        'Advanced reporting suite',
        'Multi-company management',
        'Custom workflows',
        'API integrations',
        'Dedicated account manager'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900',
      borderColor: 'border-purple-200'
    },
    {
      title: 'MYOB Acumatica',
      description: 'Full ERP solution for large enterprises with complex operations, manufacturing, and multi-location requirements.',
      price: 'Custom pricing',
      features: [
        'Complete ERP functionality',
        'Manufacturing management',
        'Multi-location inventory',
        'Advanced CRM integration',
        'Business intelligence suite',
        'Unlimited customization',
        'Enterprise support'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900',
      borderColor: 'border-orange-200'
    }
  ];

  const australianFeatures = [
    {
      title: 'Single Touch Payroll (STP)',
      description: 'Automated STP reporting to ATO with every payroll run, ensuring compliance and reducing administrative burden.',
      icon: FileText
    },
    {
      title: 'Business Activity Statement (BAS)',
      description: 'Automated BAS preparation and lodgment with built-in GST calculations and quarterly reporting capabilities.',
      icon: BarChart3
    },
    {
      title: 'Superannuation Integration',
      description: 'Seamless superannuation processing with major super funds, automated calculations, and compliance reporting.',
      icon: Shield
    },
    {
      title: 'Award Interpretation',
      description: 'Built-in award rates and conditions for accurate payroll processing according to Australian industrial relations.',
      icon: Users
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Business Assessment & Planning',
      description: 'Comprehensive evaluation of your business needs, current systems, and requirements to design the optimal MYOB solution.',
      icon: Target
    },
    {
      step: '02',
      title: 'System Setup & Configuration',
      description: 'Professional installation and configuration of MYOB with customized settings, tax rules, and business workflows.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Data Migration & Integration',
      description: 'Secure migration of existing data, bank connections, and integration with existing business applications and processes.',
      icon: Cloud
    },
    {
      step: '04',
      title: 'Training & Go-Live Support',
      description: 'Comprehensive user training, documentation, and ongoing support to ensure successful adoption and optimal utilization.',
      icon: Users
    }
  ];

  const integrations = [
    { name: 'Australian Banks', description: 'Direct feeds from major Australian banks including CBA, ANZ, Westpac, NAB' },
    { name: 'Payment Processors', description: 'Stripe, PayPal, Square, Tyro, and other payment gateway integrations' },
    { name: 'E-commerce Platforms', description: 'Shopify, WooCommerce, Magento, and online marketplace connections' },
    { name: 'CRM Systems', description: 'HubSpot, Salesforce, Pipedrive, and customer relationship management tools' },
    { name: 'Inventory Management', description: 'TradeGecko, Unleashed, Cin7, and warehouse management systems' },
    { name: 'Time Tracking', description: 'TimeTagger, Toggl, Harvest, and workforce management applications' },
    { name: 'Document Management', description: 'SharePoint, Google Drive, Dropbox, and cloud storage solutions' },
    { name: 'Superannuation Funds', description: 'Major super funds for automated superannuation processing and reporting' }
  ];

  const industryFeatures = [
    {
      industry: 'Retail & E-commerce',
      features: ['Point of sale integration', 'Multi-channel inventory', 'Customer loyalty programs', 'Sales analytics']
    },
    {
      industry: 'Manufacturing',
      features: ['Bill of materials', 'Production planning', 'Quality control', 'Supply chain management']
    },
    {
      industry: 'Professional Services',
      features: ['Time & billing', 'Project profitability', 'Resource allocation', 'Client management']
    },
    {
      industry: 'Construction',
      features: ['Job costing', 'Progress billing', 'Equipment tracking', 'Contract management']
    }
  ];

  const testimonials = [
    {
      name: 'Rachel Thompson',
      company: 'Thompson Retail Group',
      text: 'MYOB Advanced transformed our multi-location retail operations. The real-time inventory visibility across all stores has been game-changing.',
      rating: 5
    },
    {
      name: 'Mark Stevens',
      company: 'Stevens Construction',
      text: 'The job costing features in MYOB have given us unprecedented visibility into project profitability. Implementation was seamless.',
      rating: 5
    },
    {
      name: 'Jennifer Walsh',
      company: 'Walsh Professional Services',
      text: 'Single Touch Payroll integration saved us hours every week. The Australian compliance features are exactly what we needed.',
      rating: 5
    }
  ];

  const complianceFeatures = [
    'Australian Taxation Office (ATO) integration',
    'Goods and Services Tax (GST) automation',
    'Business Activity Statement (BAS) preparation',
    'Single Touch Payroll (STP) reporting',
    'Payroll Tax calculations and reporting',
    'Superannuation Guarantee compliance',
    'Fair Work Act award interpretation',
    'WorkCover and workers compensation'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-blue-900 dark:to-cyan-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">MYOB Certified Partners</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">MYOB</span> Accounting Services
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Expert MYOB implementation, training, and support services designed specifically for Australian businesses. Streamline your accounting, payroll, and compliance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get MYOB Setup
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free MYOB Assessment
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">20+hrs</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Time Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">ATO Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">STP</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Ready</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="MYOB accounting software interface"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">All-in</div>
                    <div className="text-sm">One</div>
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
              Why MYOB is Perfect for Australian Businesses
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover how MYOB's Australian-built features combined with our expert implementation can transform your business operations and compliance management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-blue-500 mb-6" />
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

      {/* Australian Compliance Features */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-blue-500 mr-3" />
              <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide">
                Built for Australia
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Australian Compliance Made Simple
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              MYOB is designed specifically for Australian businesses with built-in compliance features for tax, payroll, and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {australianFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-blue-500 mb-6" />
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

      {/* MYOB Products */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Choose the Right MYOB Solution
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              From small businesses to large enterprises, we'll help you select and implement the perfect MYOB solution for your specific requirements and growth plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {myobProducts.map((product, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${product.popular ? 'border-mavix-blue' : product.borderColor} dark:border-gray-700 animate-fade-in-up relative`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-mavix-blue text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold ${product.color} mb-4`}>
                  {product.title}
                </h3>
                <div className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {product.price}
                </div>
                <p className="text-mavix-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className={`${product.bgColor} dark:bg-opacity-20 p-4 rounded-lg mb-6`}>
                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${product.color} flex-shrink-0`} />
                        <span className="text-sm text-mavix-gray dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className={`w-full border-2 border-current ${product.color} hover:bg-current hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Complete MYOB Implementation & Support
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                From initial consultation to ongoing optimization, our comprehensive MYOB services ensure you get maximum value from your investment with Australian-specific configurations and compliance features.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="MYOB implementation and training" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Transform Your Business with MYOB
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, compliance, and business insights with MYOB implementation by our certified experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-blue-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Features */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Industry-Specific MYOB Solutions
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Tailored MYOB configurations for different industries with specialized features and Australian compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryFeatures.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
                  {item.industry}
                </h3>
                <div className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-mavix-gray dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our MYOB Implementation Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful MYOB implementation with minimal business disruption and maximum user adoption across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
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
                alt="MYOB integrations and connectivity" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Seamless Australian Business Integrations
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Connect MYOB with your existing Australian business ecosystem for streamlined operations and enhanced productivity across all departments and systems.
              </p>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-blue-500 bg-opacity-10 p-2 rounded-full flex-shrink-0">
                      <Zap className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mavix-neutral-dark dark:text-white">{integration.name}</h4>
                      <p className="text-mavix-gray dark:text-gray-300">{integration.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Comprehensive Australian Compliance
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                MYOB's built-in Australian compliance features ensure your business meets all regulatory requirements with automated reporting and calculations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {complianceFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Australian business compliance" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Australian Businesses Trust Our MYOB Expertise
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover how Australian businesses have transformed their operations with our MYOB implementation and support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up"
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
                  <p className="text-blue-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Streamline with MYOB?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let our MYOB certified experts implement and optimize the perfect solution for your Australian business needs, ensuring compliance and driving growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your MYOB Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule MYOB Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
