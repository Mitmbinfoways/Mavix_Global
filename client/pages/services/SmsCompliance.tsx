import Layout from '../../components/Layout';
import { Shield, FileText, Eye, TrendingUp, CheckCircle, ArrowRight, Users, Calculator, Award, Clock, BarChart3, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SmsCompliance() {
  const features = [
    {
      icon: Shield,
      title: 'SMSF Compliance Management',
      description: 'Comprehensive compliance monitoring and management to ensure your SMSF meets all ATO and APRA requirements.'
    },
    {
      icon: FileText,
      title: 'Annual Return Preparation',
      description: 'Professional preparation and lodgment of SMSF annual returns with accurate financial statements and compliance certificates.'
    },
    {
      icon: Eye,
      title: 'Independent Audit Services',
      description: 'Independent SMSF audits conducted by qualified SMSF auditors ensuring regulatory compliance and trustee accountability.'
    },
    {
      icon: Calculator,
      title: 'Investment Strategy Review',
      description: 'Regular review and updates of investment strategies to ensure compliance with superannuation law and fund objectives.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Monitoring',
      description: 'Ongoing monitoring of fund performance, asset allocation, and compliance with investment restrictions.'
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Access to qualified SMSF specialists who provide strategic advice and ensure best practice management.'
    }
  ];

  const services = [
    'SMSF Establishment & Setup',
    'Investment Strategy Preparation',
    'Annual Financial Statements',
    'SMSF Annual Return Lodgment',
    'Independent SMSF Audits',
    'Compliance Monitoring & Reporting',
    'Pension Documentation',
    'Contribution Processing & Validation',
    'Asset Valuation Services',
    'Tax Planning & Optimization',
    'Regulatory Change Updates',
    'Trustee Education & Training',
    'Wind-up & Rollover Services',
    'ATO Correspondence Management',
    'Actuarial Certificates',
    'SMSF Deed Reviews & Updates'
  ];

  const complianceAreas = [
    {
      title: 'Sole Purpose Test',
      description: 'Ensure the fund is maintained solely for retirement benefits and meets core purpose requirements.',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      title: 'Investment Restrictions',
      description: 'Monitor compliance with investment rules including related party transactions and asset restrictions.',
      icon: BarChart3,
      color: 'text-emerald-600'
    },
    {
      title: 'Contribution Limits',
      description: 'Manage and monitor contribution caps, concessional and non-concessional limits.',
      icon: Calculator,
      color: 'text-purple-600'
    },
    {
      title: 'Member Benefits',
      description: 'Ensure proper payment of benefits and compliance with preservation and cashing rules.',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  const auditProcess = [
    {
      step: '01',
      title: 'Planning & Risk Assessment',
      description: 'Comprehensive planning phase including risk assessment and audit strategy development based on fund activities.'
    },
    {
      step: '02',
      title: 'Financial Review',
      description: 'Detailed review of financial statements, transactions, and supporting documentation for accuracy and compliance.'
    },
    {
      step: '03',
      title: 'Compliance Testing',
      description: 'Testing of key compliance areas including investment strategy, sole purpose test, and regulatory requirements.'
    },
    {
      step: '04',
      title: 'Reporting & Certification',
      description: 'Preparation of audit report with findings, recommendations, and compliance certification for ATO lodgment.'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce compliance risks and avoid costly penalties through professional oversight and monitoring.'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Save significant time on compliance activities allowing focus on investment decisions and strategy.'
    },
    {
      icon: Award,
      title: 'Expert Knowledge',
      description: 'Access to specialized SMSF expertise and up-to-date knowledge of regulatory changes.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize fund performance through strategic advice and proper compliance management.'
    },
    {
      icon: Eye,
      title: 'Independent Oversight',
      description: 'Independent audit and review processes ensure transparency and trustee accountability.'
    },
    {
      icon: FileText,
      title: 'Professional Documentation',
      description: 'Comprehensive documentation and reporting that meets all regulatory requirements.'
    }
  ];

  const riskAreas = [
    'Related party transactions',
    'Investment strategy compliance',
    'Contribution limit breaches',
    'Prohibited investments',
    'Benefit payment rules',
    'Documentation requirements',
    'Annual return obligations',
    'Audit compliance',
    'Actuarial certificate requirements',
    'Tax compliance obligations'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-200 dark:border-indigo-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-indigo-700 dark:text-indigo-300 text-sm font-medium">SMSF Expertise</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  SMSF <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Compliance</span> & Audit
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Expert Self-Managed Super Fund compliance, audit, and advisory services ensuring your SMSF meets all regulatory requirements while optimizing performance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get SMSF Support
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free SMSF Review
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">ATO</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Expert</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Auditors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Risk</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Mitigated</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="SMSF compliance and audit services"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">SMSF</div>
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
              Comprehensive SMSF Services
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Professional SMSF management services that ensure compliance, optimize performance, and provide peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-indigo-500 mb-6" />
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

      {/* Compliance Areas */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Key Compliance Areas
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              We monitor and manage all critical compliance areas to ensure your SMSF operates within regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <area.icon className={`h-12 w-12 ${area.color} mb-6`} />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {area.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Complete SMSF Service Suite
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                From establishment to ongoing compliance, we provide comprehensive SMSF services tailored to your needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="SMSF compliance management" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our SMSF Audit Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A thorough, professional audit process that ensures compliance and provides valuable insights for fund management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditProcess.map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Benefits of Professional SMSF Management
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of expert SMSF compliance and audit services that protect and optimize your superannuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-indigo-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="SMSF risk management" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                SMSF Risk Management
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                We proactively identify and manage compliance risks to protect your SMSF from penalties and ensure optimal performance.
              </p>
              <div className="space-y-4">
                {riskAreas.map((risk, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-indigo-500 bg-opacity-10 p-2 rounded-full flex-shrink-0">
                      <Shield className="h-5 w-5 text-indigo-500" />
                    </div>
                    <span className="text-mavix-gray dark:text-gray-300 text-lg">{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Secure Your SMSF's Future
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Ensure your SMSF operates compliantly and efficiently with our expert compliance and audit services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start SMSF Service
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Free SMSF Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
