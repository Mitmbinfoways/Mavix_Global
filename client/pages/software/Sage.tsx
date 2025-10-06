import Layout from '../../components/Layout';
import { Calculator, BarChart3, Users, Shield, CheckCircle, ArrowRight, Cloud, Zap, FileText, TrendingUp, Clock, Award, Star, DollarSign, Settings, Target, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sage() {
  const features = [
    {
      icon: Calculator,
      title: 'Comprehensive Accounting Suite',
      description: 'Complete financial management solution with advanced accounting, invoicing, inventory management, and reporting capabilities.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Business Intelligence',
      description: 'Advanced reporting and analytics with customizable dashboards providing insights into business performance and financial health.'
    },
    {
      icon: Users,
      title: 'Multi-User Environment',
      description: 'Collaborative platform allowing multiple users with role-based access controls and real-time data synchronization across teams.'
    },
    {
      icon: Cloud,
      title: 'Cloud & On-Premise Flexibility',
      description: 'Choose between cloud-based or on-premise deployment options to suit your business infrastructure and security requirements.'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Advanced security features including data encryption, audit trails, and compliance with international data protection standards.'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automated workflows for invoicing, payment processing, bank reconciliation, and financial reporting to streamline operations.'
    }
  ];

  const services = [
    'Sage Software Selection & Configuration',
    'System Setup & Implementation',
    'Data Migration from Legacy Systems',
    'Chart of Accounts Customization',
    'Banking & Payment Integration',
    'Customer & Supplier Management Setup',
    'Inventory Management Configuration',
    'Multi-Currency & Tax Setup',
    'Custom Report Development',
    'User Access & Security Configuration',
    'Third-Party Integration Setup',
    'Comprehensive User Training',
    'Ongoing Support & Maintenance',
    'System Optimization & Updates',
    'Backup & Disaster Recovery',
    'Performance Monitoring & Tuning'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Reduce Processing Time by 60%',
      description: 'Automated processes and streamlined workflows significantly reduce manual data entry and administrative overhead.',
      metric: '60% time savings'
    },
    {
      icon: TrendingUp,
      title: 'Enhanced Financial Control',
      description: 'Real-time visibility into financial performance with comprehensive reporting and advanced analytics capabilities.',
      metric: 'Real-time insights'
    },
    {
      icon: BarChart3,
      title: 'Improved Decision Making',
      description: 'Access to detailed financial reports and business intelligence tools for informed strategic decision-making.',
      metric: 'Data-driven decisions'
    },
    {
      icon: DollarSign,
      title: 'Accelerated Cash Flow',
      description: 'Faster invoicing, automated payment reminders, and integrated payment processing improve cash flow by 35%.',
      metric: '35% faster payments'
    },
    {
      icon: Users,
      title: 'Seamless Team Collaboration',
      description: 'Multi-user access with role-based permissions enables efficient collaboration across accounting and finance teams.',
      metric: 'Enhanced collaboration'
    },
    {
      icon: Award,
      title: 'Regulatory Compliance',
      description: 'Built-in compliance features ensure adherence to Australian accounting standards and tax regulations.',
      metric: '100% compliance'
    }
  ];

  const sageProducts = [
    {
      title: 'Sage Business Cloud Accounting',
      description: 'Cloud-based accounting solution perfect for small to medium businesses with essential accounting features.',
      price: 'From $25/month',
      features: [
        'Online invoicing & quotes',
        'Bank reconciliation',
        'Expense management',
        'VAT/GST management',
        'Basic reporting',
        'Mobile app access'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900',
      borderColor: 'border-green-200'
    },
    {
      title: 'Sage 50cloud',
      description: 'Desktop accounting software with cloud connectivity, ideal for established businesses requiring advanced features.',
      price: 'From $99/month',
      features: [
        'Advanced inventory management',
        'Job costing & project tracking',
        'Multi-company management',
        'Advanced reporting suite',
        'Payment processing',
        'Document management'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900',
      borderColor: 'border-blue-200',
      popular: true
    },
    {
      title: 'Sage Intacct',
      description: 'Enterprise-level cloud financial management solution for complex organizations and multi-entity businesses.',
      price: 'Custom pricing',
      features: [
        'Multi-entity consolidation',
        'Advanced workflow automation',
        'Dimensional reporting',
        'Revenue recognition',
        'Budget planning & forecasting',
        'API integrations'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Sage X3',
      description: 'Comprehensive ERP solution for large enterprises with complex business processes and global operations.',
      price: 'Enterprise pricing',
      features: [
        'Full ERP functionality',
        'Manufacturing management',
        'Supply chain optimization',
        'Global financial management',
        'Business intelligence suite',
        'Scalable architecture'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900',
      borderColor: 'border-orange-200'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Business Analysis & Product Selection',
      description: 'Comprehensive evaluation of your business requirements to determine the optimal Sage solution for your organization.',
      icon: Target
    },
    {
      step: '02',
      title: 'System Design & Configuration',
      description: 'Custom configuration of Sage software including chart of accounts, workflows, and business-specific settings.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Data Migration & Integration',
      description: 'Secure migration of existing data and integration with current business systems and third-party applications.',
      icon: Cloud
    },
    {
      step: '04',
      title: 'Training & Deployment',
      description: 'Comprehensive user training, documentation, and go-live support to ensure successful adoption and utilization.',
      icon: Users
    }
  ];

  const integrations = [
    { name: 'Banking Platforms', description: 'Direct integration with major Australian banks for automated feeds' },
    { name: 'Payment Gateways', description: 'PayPal, Stripe, Square, and other payment processing systems' },
    { name: 'E-commerce Systems', description: 'Shopify, WooCommerce, Magento, and online store platforms' },
    { name: 'CRM Solutions', description: 'Salesforce, Microsoft Dynamics, and customer management systems' },
    { name: 'Payroll Systems', description: 'Integration with Australian payroll and HR management platforms' },
    { name: 'Document Management', description: 'SharePoint, Box, Dropbox, and cloud storage solutions' },
    { name: 'Reporting Tools', description: 'Power BI, Tableau, and advanced business intelligence platforms' },
    { name: 'Inventory Management', description: 'Warehouse management and inventory tracking systems' }
  ];

  const industryFeatures = [
    {
      industry: 'Manufacturing',
      features: ['Production planning', 'Inventory control', 'Quality management', 'Supply chain optimization']
    },
    {
      industry: 'Distribution',
      features: ['Multi-location inventory', 'Order management', 'Logistics tracking', 'Supplier management']
    },
    {
      industry: 'Professional Services',
      features: ['Project accounting', 'Time & billing', 'Resource management', 'Client profitability']
    },
    {
      industry: 'Not-for-Profit',
      features: ['Fund accounting', 'Grant management', 'Donor tracking', 'Compliance reporting']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Roberts',
      company: 'Roberts Manufacturing',
      text: 'Sage 50cloud implementation by Mavix Global revolutionized our inventory management. We now have real-time visibility across all our operations.',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      company: 'Anderson Consulting Group',
      text: 'The transition to Sage Intacct was seamless. The team\'s expertise in multi-entity accounting saved us months of implementation time.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Wilson Distribution',
      text: 'Outstanding support throughout the entire process. Sage X3 has given us the scalability we needed for our growing business.',
      rating: 5
    }
  ];

  const complianceFeatures = [
    'Australian Taxation Office (ATO) compliance',
    'Goods and Services Tax (GST) management',
    'Business Activity Statement (BAS) preparation',
    'Single Touch Payroll (STP) reporting',
    'Australian Accounting Standards (AASB) compliance',
    'Superannuation Guarantee (SG) calculations',
    'Fair Work Act compliance reporting',
    'PAYG withholding management'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/10 dark:bg-purple-400/10 border border-purple-200 dark:border-purple-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Sage Certified Partners</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Sage</span> Accounting Services
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Expert Sage implementation, training, and support services designed to optimize your financial management and drive business growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get Sage Implementation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Sage Consultation
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">60%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Grade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Global</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Scale</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="Sage accounting software dashboard"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">ERP</div>
                    <div className="text-sm">Ready</div>
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
              Why Choose Sage for Your Business?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover how Sage's powerful features combined with our expert implementation can transform your financial management and business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-purple-500 mb-6" />
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

      {/* Sage Products */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Choose the Right Sage Solution
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              From small businesses to large enterprises, we'll help you select and implement the perfect Sage solution for your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sageProducts.map((product, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${product.popular ? 'border-mavix-blue' : product.borderColor} dark:border-gray-700 animate-fade-in-up relative`}
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
                  Learn More
                </button>
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
                Complete Sage Implementation & Support
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                From initial consultation to ongoing optimization, our comprehensive Sage services ensure maximum return on investment and seamless business operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Sage implementation and training" 
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
              Transform Your Business with Sage
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, accuracy, and business insights with Sage implementation by our certified experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-purple-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-lg text-sm font-semibold">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Australian Compliance Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Australian compliance and regulations" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Australian Compliance Made Easy
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Our Sage implementations include comprehensive Australian compliance features to ensure your business meets all regulatory requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {complianceFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Features */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Industry-Specific Sage Solutions
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Tailored Sage configurations for different industries with specialized features and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryFeatures.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Briefcase className="h-12 w-12 text-purple-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
                  {item.industry}
                </h3>
                <div className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
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
              Our Sage Implementation Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful Sage implementation with minimal business disruption and maximum user adoption.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
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
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Seamless Third-Party Integrations
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Connect Sage with your existing business ecosystem for streamlined operations and enhanced productivity across all departments.
              </p>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-purple-500 bg-opacity-10 p-2 rounded-full flex-shrink-0">
                      <Zap className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mavix-neutral-dark dark:text-white">{integration.name}</h4>
                      <p className="text-mavix-gray dark:text-gray-300">{integration.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Sage integrations and connectivity" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Success Stories from Our Clients
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover how Australian businesses have transformed their operations with our Sage expertise and implementation services.
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
                  <p className="text-purple-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform with Sage?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let our Sage certified experts design and implement the perfect solution for your business needs and drive your digital transformation forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your Sage Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule Sage Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
