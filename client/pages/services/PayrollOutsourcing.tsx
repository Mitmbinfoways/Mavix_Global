import Layout from '../../components/Layout';
import { Users, Clock, Shield, Calculator, CheckCircle, ArrowRight, FileText, DollarSign, TrendingUp, Award, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PayrollOutsourcing() {
  const features = [
    {
      icon: Users,
      title: 'Complete Payroll Management',
      description: 'End-to-end payroll processing including salary calculations, tax deductions, superannuation, and compliance management.'
    },
    {
      icon: Shield,
      title: 'Compliance Guarantee',
      description: 'Stay compliant with ATO requirements, Fair Work Act, and superannuation obligations with expert oversight.'
    },
    {
      icon: Clock,
      title: 'Timely Processing',
      description: 'Accurate and timely payroll runs ensuring employees are paid correctly and on schedule every time.'
    },
    {
      icon: Calculator,
      title: 'Accurate Calculations',
      description: 'Precise calculations for wages, overtime, allowances, deductions, PAYG tax, and superannuation contributions.'
    },
    {
      icon: FileText,
      title: 'Comprehensive Reporting',
      description: 'Detailed payroll reports, payment summaries, and analytics to help manage your workforce costs effectively.'
    },
    {
      icon: Zap,
      title: 'Streamlined Process',
      description: 'Efficient payroll workflows that integrate with your existing HR systems and time tracking solutions.'
    }
  ];

  const services = [
    'Employee Setup & Onboarding',
    'Salary & Wage Calculations',
    'PAYG Tax Calculations & Deductions',
    'Superannuation Processing',
    'Leave Entitlement Management',
    'Overtime & Penalty Rate Calculations',
    'Allowances & Reimbursements',
    'Payslip Generation & Distribution',
    'Payment Summary Preparation',
    'ATO Reporting & Compliance',
    'Workers Compensation Processing',
    'Single Touch Payroll (STP)',
    'Payroll Tax Compliance',
    'Termination & Final Pay Processing',
    'Award Interpretation & Application',
    'Payroll Analytics & Reporting'
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce payroll processing costs by up to 50% compared to in-house operations while improving accuracy.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save 10-15 hours per week on payroll administration, freeing up time for strategic HR activities.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Eliminate compliance risks with expert knowledge of employment law and tax regulations.'
    },
    {
      icon: Award,
      title: 'Professional Expertise',
      description: 'Access to qualified payroll specialists and employment law experts without hiring costs.'
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Easily scale payroll operations as your business grows without additional infrastructure investment.'
    },
    {
      icon: Eye,
      title: 'Enhanced Reporting',
      description: 'Comprehensive payroll analytics and reporting for better workforce cost management and planning.'
    }
  ];

  const complianceAreas = [
    {
      title: 'Fair Work Act Compliance',
      description: 'Ensure compliance with minimum wage requirements, penalty rates, and leave entitlements.',
      icon: Users
    },
    {
      title: 'ATO Tax Obligations',
      description: 'Accurate PAYG withholding, fringe benefits tax, and Single Touch Payroll reporting.',
      icon: Calculator
    },
    {
      title: 'Superannuation Guarantee',
      description: 'Timely superannuation contributions and compliance with SG obligations.',
      icon: Shield
    },
    {
      title: 'Award Interpretation',
      description: 'Correct application of modern awards, enterprise agreements, and industry standards.',
      icon: FileText
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Setup & Configuration',
      description: 'Initial setup of payroll system, employee records, and integration with your existing business systems.'
    },
    {
      step: '02',
      title: 'Data Collection',
      description: 'Gather timesheets, leave applications, and other payroll data through secure, streamlined processes.'
    },
    {
      step: '03',
      title: 'Processing & Review',
      description: 'Calculate pay, process deductions, and conduct thorough quality reviews before finalization.'
    },
    {
      step: '04',
      title: 'Distribution & Reporting',
      description: 'Distribute payslips, process payments, and provide comprehensive payroll reports and analytics.'
    }
  ];

  const industries = [
    'Professional Services',
    'Healthcare & Medical',
    'Retail & Hospitality',
    'Manufacturing',
    'Construction & Trades',
    'Technology & IT',
    'Education & Training',
    'Non-Profit Organizations'
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
                  <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Payroll Solutions</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Payroll</span> Outsourcing
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Comprehensive payroll management services that ensure accurate, compliant, and timely processing while reducing costs and administrative burden.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Start Payroll Service
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Payroll Audit
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">STP</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Expert</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Team</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Professional payroll outsourcing services"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">15hrs</div>
                    <div className="text-sm">Saved/Week</div>
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
              Complete Payroll Management Solution
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Professional payroll services that handle every aspect of employee compensation with accuracy and compliance.
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

      {/* Services Included */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Comprehensive Payroll Services
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Our payroll outsourcing covers every aspect of employee compensation and compliance requirements.
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
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Payroll processing and management" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Comprehensive Compliance Management
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Stay compliant with all Australian employment and tax obligations through our expert compliance management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-purple-50 dark:bg-purple-900 dark:bg-opacity-20 p-8 rounded-2xl border-2 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <area.icon className="h-12 w-12 text-purple-500 mb-6" />
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

      {/* Benefits Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Transform Your Payroll Operations
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional payroll outsourcing that delivers efficiency, accuracy, and peace of mind.
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
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
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
              Our Payroll Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A streamlined, efficient process that ensures accurate and timely payroll processing every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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

      {/* Industries Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Specialized payroll solutions tailored to meet the unique requirements of various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-6 rounded-xl text-center hover:bg-purple-50 dark:hover:bg-purple-900 dark:hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-purple-100 dark:border-purple-800"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-mavix-gray dark:text-gray-300 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Streamline Your Payroll?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let our payroll experts handle your employee compensation while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Payroll Outsourcing
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Free Payroll Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
