import Layout from '../../components/Layout';
import { Calculator, BarChart3, Users, Shield, CheckCircle, ArrowRight, Cloud, Zap, FileText, TrendingUp, Clock, Award, Star, DollarSign, Settings, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FreshBooks() {
  const features = [
    {
      icon: Calculator,
      title: 'Intuitive Accounting Dashboard',
      description: 'User-friendly interface designed for non-accountants with simple navigation and clear financial overviews for easy business management.'
    },
    {
      icon: BarChart3,
      title: 'Professional Invoicing & Quotes',
      description: 'Create professional invoices and quotes with automated payment reminders, online payment options, and customizable templates.'
    },
    {
      icon: Users,
      title: 'Time Tracking & Project Management',
      description: 'Built-in time tracking with team collaboration, project profitability analysis, and seamless billing integration.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Flexibility',
      description: 'Access your financial data anywhere with automatic backups, real-time synchronization, and mobile app functionality.'
    },
    {
      icon: Shield,
      title: 'Secure Financial Management',
      description: 'Bank-level security with encrypted data transmission, secure payment processing, and compliance with financial regulations.'
    },
    {
      icon: Zap,
      title: 'Smart Automation Features',
      description: 'Automated expense categorization, recurring billing, late payment reminders, and financial reporting capabilities.'
    }
  ];

  const services = [
    'FreshBooks Account Setup & Configuration',
    'Business Profile & Branding Setup',
    'Chart of Accounts Customization',
    'Bank & Credit Card Integration',
    'Customer & Client Database Setup',
    'Invoice Templates & Payment Setup',
    'Expense Tracking Configuration',
    'Project & Time Tracking Setup',
    'Tax Settings & GST Configuration',
    'Report Customization & Automation',
    'Team Member Access & Permissions',
    'Third-Party App Integrations',
    'Comprehensive User Training',
    'Ongoing Support & Optimization',
    'Mobile App Setup & Training',
    'Data Migration & Import Services'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save 16+ Hours Monthly',
      description: 'Automated invoicing, expense tracking, and time management features significantly reduce administrative workload.',
      metric: '70% time savings'
    },
    {
      icon: TrendingUp,
      title: 'Faster Payment Collection',
      description: 'Professional invoicing with online payment options and automated reminders improve cash flow by 35%.',
      metric: '35% faster payments'
    },
    {
      icon: BarChart3,
      title: 'Better Project Profitability',
      description: 'Integrated time tracking and project management provide clear insights into project costs and profitability.',
      metric: 'Real-time profitability'
    },
    {
      icon: DollarSign,
      title: 'Reduced Accounting Costs',
      description: 'Simple accounting processes and automated features reduce the need for extensive bookkeeping services.',
      metric: '50% cost reduction'
    },
    {
      icon: Users,
      title: 'Enhanced Team Collaboration',
      description: 'Multi-user access with role-based permissions enables seamless collaboration across your business team.',
      metric: 'Unlimited collaboration'
    },
    {
      icon: Award,
      title: 'Professional Business Image',
      description: 'Custom-branded invoices and professional communication enhance your business credibility and image.',
      metric: 'Enhanced branding'
    }
  ];

  const freshbooksPlans = [
    {
      title: 'FreshBooks Lite',
      description: 'Perfect for freelancers and solopreneurs just starting out with basic invoicing and expense tracking needs.',
      price: 'From $6/month',
      features: [
        'Up to 5 billable clients',
        'Unlimited invoices & estimates',
        'Expense tracking',
        'Basic reporting',
        'Mobile app access',
        'Email support',
        'Accept credit card payments'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900',
      borderColor: 'border-green-200'
    },
    {
      title: 'FreshBooks Plus',
      description: 'Ideal for growing businesses with multiple clients, projects, and team members requiring advanced features.',
      price: 'From $10/month',
      features: [
        'Up to 50 billable clients',
        'Everything in Lite',
        'Time tracking',
        'Project management',
        'Advanced reporting',
        'Recurring billing',
        'Team time tracking'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900',
      borderColor: 'border-blue-200',
      popular: true
    },
    {
      title: 'FreshBooks Premium',
      description: 'Comprehensive solution for established businesses with complex project management and reporting requirements.',
      price: 'From $20/month',
      features: [
        'Up to 500 billable clients',
        'Everything in Plus',
        'Project profitability',
        'Team management',
        'Advanced payments',
        'Client retainers',
        'Custom invoice fields'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900',
      borderColor: 'border-purple-200'
    },
    {
      title: 'FreshBooks Select',
      description: 'Enterprise solution for large teams and complex businesses requiring customization and dedicated support.',
      price: 'Custom pricing',
      features: [
        'Unlimited billable clients',
        'Everything in Premium',
        'Dedicated account manager',
        'Customizable features',
        'Advanced integrations',
        'Priority support',
        'Custom onboarding'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900',
      borderColor: 'border-orange-200'
    }
  ];

  const australianFeatures = [
    {
      title: 'GST Calculation & Reporting',
      description: 'Automated GST calculations on invoices and expenses with built-in reporting for Australian tax compliance.',
      icon: Calculator
    },
    {
      title: 'Australian Payment Methods',
      description: 'Support for Australian payment gateways including Stripe, PayPal, and direct bank transfers.',
      icon: DollarSign
    },
    {
      title: 'Multi-Currency Support',
      description: 'Handle international clients with multi-currency invoicing and automatic exchange rate calculations.',
      icon: Globe
    },
    {
      title: 'Professional Services Focus',
      description: 'Designed specifically for service-based businesses common in the Australian market including consultants and agencies.',
      icon: Users
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Business Needs Discovery',
      description: 'Comprehensive assessment of your business requirements, client base, and project management needs to optimize FreshBooks setup.',
      icon: Target
    },
    {
      step: '02',
      title: 'Account Setup & Customization',
      description: 'Professional configuration of FreshBooks with customized invoices, payment methods, and business branding elements.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Integration & Data Import',
      description: 'Seamless integration with existing tools and secure import of client data, projects, and financial information.',
      icon: Cloud
    },
    {
      step: '04',
      title: 'Team Training & Launch',
      description: 'Comprehensive training for your team on FreshBooks features and best practices for optimal productivity.',
      icon: Users
    }
  ];

  const integrations = [
    { name: 'Payment Processors', description: 'Stripe, PayPal, Square, and Australian payment gateways' },
    { name: 'Banking Connections', description: 'Major Australian banks for automated expense tracking' },
    { name: 'Project Management', description: 'Asana, Trello, Monday.com, and workflow management tools' },
    { name: 'CRM Integration', description: 'HubSpot, Salesforce, Pipedrive, and customer management systems' },
    { name: 'Time Tracking Apps', description: 'Toggl, Harvest, RescueTime, and productivity applications' },
    { name: 'Accounting Software', description: 'QuickBooks, Xero, and other accounting platform connections' },
    { name: 'Communication Tools', description: 'Slack, Microsoft Teams, and collaboration platforms' },
    { name: 'E-commerce Platforms', description: 'Shopify, WooCommerce, and online store integrations' }
  ];

  const industryFeatures = [
    {
      industry: 'Creative Agencies',
      features: ['Project-based billing', 'Creative collaboration', 'Client approval workflows', 'Retainer management']
    },
    {
      industry: 'Consulting Services',
      features: ['Time tracking', 'Hourly billing', 'Expense allocation', 'Client communication']
    },
    {
      industry: 'Freelancers',
      features: ['Simple invoicing', 'Payment tracking', 'Expense management', 'Client portal']
    },
    {
      industry: 'Professional Services',
      features: ['Project profitability', 'Team collaboration', 'Advanced reporting', 'Multi-client management']
    }
  ];

  const testimonials = [
    {
      name: 'Sophie Clarke',
      company: 'Clarke Design Studio',
      text: 'FreshBooks transformed how we manage projects and bill clients. The time tracking integration has improved our profitability by 40%.',
      rating: 5
    },
    {
      name: 'Ryan Mitchell',
      company: 'Mitchell Consulting',
      text: 'The professional invoicing and automated payment reminders have reduced our collection time significantly. Clients love the online payment options.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      company: 'Foster Marketing Agency',
      text: 'Perfect solution for our creative agency. Project management and team collaboration features have streamlined our entire workflow.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Freelancers & Solopreneurs',
      description: 'Simple invoicing, expense tracking, and client management for independent professionals.',
      features: ['Professional invoicing', 'Payment tracking', 'Basic reporting', 'Mobile access']
    },
    {
      title: 'Creative Agencies',
      description: 'Project-based billing, team collaboration, and client communication for creative businesses.',
      features: ['Project management', 'Team time tracking', 'Client portals', 'Profit analysis']
    },
    {
      title: 'Consulting Firms',
      description: 'Time tracking, hourly billing, and project profitability for professional service providers.',
      features: ['Advanced time tracking', 'Hourly/project billing', 'Expense allocation', 'Performance reporting']
    },
    {
      title: 'Service-Based Businesses',
      description: 'Comprehensive business management for companies providing professional services.',
      features: ['Multi-client management', 'Recurring billing', 'Advanced reporting', 'Team collaboration']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">FreshBooks Certified Experts</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">FreshBooks</span> Accounting Services
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Expert FreshBooks implementation, training, and support services designed for Australian freelancers, agencies, and service-based businesses.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get FreshBooks Setup
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free FreshBooks Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">16+hrs</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Saved/Month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">35%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Faster Payments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Simple</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Setup</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="FreshBooks accounting software interface"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Time</div>
                    <div className="text-sm">Tracking</div>
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
              Why FreshBooks is Perfect for Australian Service Businesses
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover how FreshBooks' user-friendly features combined with our expert implementation can simplify your accounting and boost your business productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-emerald-500 mb-6" />
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

      {/* Australian Features */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              FreshBooks for Australian Businesses
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Optimized for Australian business requirements with GST handling, local payment methods, and service-focused features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {australianFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-emerald-500 mb-6" />
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

      {/* FreshBooks Plans */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Choose the Right FreshBooks Plan
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              From solo freelancers to growing agencies, we'll help you select and implement the perfect FreshBooks plan for your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {freshbooksPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${plan.popular ? 'border-mavix-blue' : plan.borderColor} dark:border-gray-700 animate-fade-in-up relative`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-mavix-blue text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold ${plan.color} mb-4`}>
                  {plan.title}
                </h3>
                <div className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {plan.price}
                </div>
                <p className="text-mavix-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <div className={`${plan.bgColor} dark:bg-opacity-20 p-4 rounded-lg mb-6`}>
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${plan.color} flex-shrink-0`} />
                        <span className="text-sm text-mavix-gray dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className={`w-full border-2 border-current ${plan.color} hover:bg-current hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Perfect for Every Service Business
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              FreshBooks is designed specifically for service-based businesses with features tailored to different professional industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-3">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-mavix-gray dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
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
                Complete FreshBooks Implementation & Support
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                From initial setup to ongoing optimization, our comprehensive FreshBooks services ensure you get maximum value and productivity from your accounting system.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="FreshBooks implementation and training" 
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
              Transform Your Business with FreshBooks
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, cash flow, and business insights with FreshBooks implementation by our certified experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-emerald-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-lg text-sm font-semibold">
                  {benefit.metric}
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
              Our FreshBooks Implementation Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A streamlined methodology that ensures quick setup and seamless adoption of FreshBooks across your business operations.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
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
                alt="FreshBooks integrations and connectivity" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Seamless Business Integrations
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Connect FreshBooks with your existing business tools and Australian service providers for streamlined operations and enhanced productivity.
              </p>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-emerald-500 bg-opacity-10 p-2 rounded-full flex-shrink-0">
                      <Zap className="h-5 w-5 text-emerald-500" />
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

      {/* Industry Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Industry-Specific FreshBooks Solutions
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Customized FreshBooks configurations for different service industries with specialized features and billing requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryFeatures.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
                  {item.industry}
                </h3>
                <div className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-mavix-gray dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Australian Service Businesses Love FreshBooks
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover how Australian freelancers, agencies, and service providers have transformed their businesses with our FreshBooks expertise.
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
                  <p className="text-emerald-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Simplify with FreshBooks?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let our FreshBooks experts set up and optimize the perfect solution for your Australian service business, enhancing productivity and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your FreshBooks Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule FreshBooks Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
