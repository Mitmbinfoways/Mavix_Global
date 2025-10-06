import Layout from '../../components/Layout';
import { FileSearch, Users, Clock, Shield, CheckCircle, ArrowRight, Award, BarChart3, Eye, Target, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AuditSupport() {
  const features = [
    {
      icon: FileSearch,
      title: 'Audit Preparation',
      description: 'Comprehensive preparation services that ensure your books are audit-ready with all required documentation organized and accessible.'
    },
    {
      icon: Users,
      title: 'Auditor Liaison',
      description: 'Professional liaison with external auditors, managing all communications and providing required information promptly.'
    },
    {
      icon: Eye,
      title: 'Documentation Review',
      description: 'Thorough review of all financial records, supporting documentation, and internal controls to ensure completeness.'
    },
    {
      icon: BarChart3,
      title: 'Working Papers',
      description: 'Preparation of detailed working papers and schedules that support financial statement balances and transactions.'
    },
    {
      icon: Shield,
      title: 'Compliance Verification',
      description: 'Verification of compliance with accounting standards, regulatory requirements, and internal policies.'
    },
    {
      icon: Clock,
      title: 'Efficient Process',
      description: 'Streamlined audit support process that minimizes disruption to your business operations and meets all deadlines.'
    }
  ];

  const services = [
    'Financial Statement Preparation',
    'Trial Balance Reconciliation',
    'Supporting Schedule Creation',
    'Internal Controls Documentation',
    'Audit Trail Preparation',
    'Management Letter Response',
    'Prior Year Adjustments',
    'Analytical Review Support',
    'Substantive Testing Assistance',
    'Cut-off Testing Support',
    'Asset Verification Procedures',
    'Accounts Receivable Confirmations',
    'Inventory Count Support',
    'Related Party Disclosures',
    'Subsequent Events Review',
    'Going Concern Assessment'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Reduced Audit Time',
      description: 'Well-prepared documentation and organized records significantly reduce audit duration and associated costs.'
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'High-quality preparation that meets professional standards and auditor expectations.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Identify and address potential issues before the audit begins, reducing risk of qualification or delays.'
    },
    {
      icon: Target,
      title: 'Improved Outcomes',
      description: 'Better audit outcomes with fewer adjustments and management letter points.'
    },
    {
      icon: Zap,
      title: 'Efficiency Gains',
      description: 'Streamlined processes that improve overall financial reporting efficiency and quality.'
    },
    {
      icon: TrendingUp,
      title: 'Enhanced Controls',
      description: 'Strengthened internal controls and processes through professional review and recommendations.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Pre-Audit Planning',
      description: 'Initial planning meeting to understand audit scope, timeline, and requirements. Development of detailed preparation checklist.'
    },
    {
      step: '02',
      title: 'Documentation Preparation',
      description: 'Systematic preparation of all required documentation including financial statements, schedules, and supporting evidence.'
    },
    {
      step: '03',
      title: 'Internal Review',
      description: 'Comprehensive internal review of all prepared materials to ensure accuracy, completeness, and compliance.'
    },
    {
      step: '04',
      title: 'Audit Coordination',
      description: 'Active coordination with auditors throughout the process, providing support and addressing queries promptly.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-teal-900 dark:to-cyan-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-teal-500/10 dark:bg-teal-400/10 border border-teal-200 dark:border-teal-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-teal-700 dark:text-teal-300 text-sm font-medium">Audit Excellence</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Audit</span> Support
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Comprehensive audit preparation and support services that ensure smooth, efficient audits with optimal outcomes and minimal business disruption.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get Audit Support
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Audit Review
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Time Reduced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Expert</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Prepared</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Professional audit support services"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Audit</div>
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
              Comprehensive Audit Support
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Professional audit support services that ensure your audit runs smoothly and delivers optimal results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-teal-500 mb-6" />
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
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Complete Audit Support Services
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Our comprehensive audit support services cover every aspect of audit preparation and execution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Audit documentation and preparation" 
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
              Benefits of Professional Audit Support
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of professional audit support that delivers efficiency, quality, and optimal outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-teal-500 mb-6" />
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

      {/* Process Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our Audit Support Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures comprehensive audit preparation and seamless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Seamless Audit Support?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let our experts prepare and support your audit process for optimal outcomes and minimal disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Audit Support
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Free Audit Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
