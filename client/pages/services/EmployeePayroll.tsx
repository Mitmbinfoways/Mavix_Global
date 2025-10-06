import Layout from '../../components/Layout';
import { Users, Calendar, Calculator, Shield, CheckCircle, ArrowRight, Clock, Award, BarChart3, FileText, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmployeePayroll() {
  const features = [
    {
      icon: Users,
      title: 'Complete Employee Management',
      description: 'Comprehensive employee onboarding, record maintenance, and lifecycle management from hire to termination.'
    },
    {
      icon: Calculator,
      title: 'Accurate Payroll Calculations',
      description: 'Precise calculation of wages, salaries, overtime, allowances, deductions, and tax withholdings.'
    },
    {
      icon: Calendar,
      title: 'Flexible Pay Schedules',
      description: 'Support for weekly, fortnightly, monthly, and custom pay periods to match your business requirements.'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensure compliance with Fair Work Act, ATO requirements, superannuation obligations, and award interpretations.'
    },
    {
      icon: FileText,
      title: 'Comprehensive Reporting',
      description: 'Detailed payroll reports, payment summaries, and analytics for workforce cost management and planning.'
    },
    {
      icon: Zap,
      title: 'Automated Processing',
      description: 'Streamlined workflows with automated calculations, deductions, and integration with time tracking systems.'
    }
  ];

  const services = [
    'New Employee Setup & Onboarding',
    'Salary & Wage Processing',
    'Overtime & Penalty Rate Calculations',
    'Commission & Bonus Processing',
    'Leave Entitlement Management',
    'PAYG Tax Calculations',
    'Superannuation Processing',
    'Workers Compensation Calculations',
    'Payslip Generation & Distribution',
    'Payment Summary Preparation',
    'Single Touch Payroll (STP) Reporting',
    'ATO Compliance & Lodgments',
    'Award Interpretation & Application',
    'Employee Self-Service Portal',
    'Termination & Final Pay Processing',
    'Payroll Tax Compliance'
  ];

  const complianceAreas = [
    {
      title: 'Fair Work Compliance',
      description: 'Ensure adherence to minimum wage rates, penalty rates, overtime provisions, and leave entitlements.',
      icon: Shield,
      color: 'text-blue-600'
    },
    {
      title: 'Tax Obligations',
      description: 'Accurate PAYG withholding, fringe benefits tax calculations, and timely ATO reporting.',
      icon: Calculator,
      color: 'text-emerald-600'
    },
    {
      title: 'Superannuation Guarantee',
      description: 'Timely superannuation contributions and compliance with SG obligations and choice of fund requirements.',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Record Keeping',
      description: 'Maintain comprehensive employment records as required by Australian employment law.',
      icon: FileText,
      color: 'text-orange-600'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save 10-15 hours per week',
      description: 'Eliminate manual payroll processing time, allowing focus on strategic HR activities and business growth.'
    },
    {
      icon: Shield,
      title: 'Reduce compliance risks',
      description: 'Professional expertise ensures compliance with complex employment laws and tax regulations.'
    },
    {
      icon: Calculator,
      title: '99.9% accuracy guarantee',
      description: 'Precision in all calculations with quality review processes and error correction protocols.'
    },
    {
      icon: Award,
      title: 'Professional expertise',
      description: 'Access to qualified payroll specialists and employment law experts without hiring costs.'
    },
    {
      icon: BarChart3,
      title: 'Enhanced reporting',
      description: 'Comprehensive payroll analytics and reporting for better workforce cost management and budgeting.'
    },
    {
      icon: Users,
      title: 'Employee satisfaction',
      description: 'Reliable, timely pay processing and accurate payslips improve employee satisfaction and trust.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Employee Setup',
      description: 'Complete employee onboarding including personal details, tax file numbers, superannuation details, and employment terms.'
    },
    {
      step: '02',
      title: 'Data Collection',
      description: 'Systematic collection of timesheets, leave applications, expense claims, and other payroll-related information.'
    },
    {
      step: '03',
      title: 'Processing & Review',
      description: 'Calculate gross pay, deductions, net pay, and superannuation with comprehensive quality review procedures.'
    },
    {
      step: '04',
      title: 'Payment & Reporting',
      description: 'Process payments, distribute payslips, and provide detailed payroll reports and compliance documentation.'
    }
  ];

  const payrollComponents = [
    'Base salary/wages calculation',
    'Overtime and penalty rates',
    'Allowances and reimbursements',
    'Commission and bonus payments',
    'Annual leave loading',
    'PAYG tax withholding',
    'Superannuation contributions',
    'Child support deductions',
    'Salary sacrifice arrangements',
    'Workers compensation premiums'
  ];

  const reportingFeatures = [
    'Individual payslips with detailed breakdowns',
    'Payroll register summaries',
    'Department/cost center reporting',
    'Leave liability reports',
    'Superannuation contribution summaries',
    'PAYG withholding reports',
    'Workers compensation reporting',
    'Year-to-date earnings summaries',
    'Award compliance reports',
    'Budget vs actual analysis'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 dark:from-gray-900 dark:via-orange-900 dark:to-red-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-red-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-orange-500/10 dark:bg-orange-400/10 border border-orange-200 dark:border-orange-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-orange-700 dark:text-orange-300 text-sm font-medium">Payroll Excellence</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Employee <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Payroll</span> Processing
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Comprehensive employee payroll processing services that ensure accurate, compliant, and timely payment of your workforce while reducing administrative burden.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Start Payroll Service
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Payroll Assessment
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">15hrs</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Compliant</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Employee payroll processing services"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">STP</div>
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
              Complete Employee Payroll Solution
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Professional payroll processing that handles every aspect of employee compensation with precision and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-orange-500 mb-6" />
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
                Our employee payroll processing covers every aspect of workforce compensation and compliance management.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Payroll processing and employee management" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Compliance & Regulatory Management
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Stay compliant with all Australian employment and tax obligations through our expert compliance management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-orange-50 dark:bg-orange-900 dark:bg-opacity-20 p-8 rounded-2xl border-2 border-orange-100 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 animate-fade-in-up"
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

      {/* Benefits Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Benefits of Professional Payroll Processing
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of professional payroll processing that delivers efficiency, accuracy, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-orange-500 mb-6" />
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
              Our Payroll Processing Workflow
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures accurate and timely payroll processing for all employees.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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

      {/* Payroll Components & Reporting */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Payroll Components
              </h2>
              <div className="space-y-4">
                {payrollComponents.map((component, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Calculator className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{component}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Reporting & Analytics
              </h2>
              <div className="space-y-4">
                {reportingFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <BarChart3 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Streamline Your Employee Payroll?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let our payroll experts handle your employee compensation while you focus on growing your business and managing your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Payroll Processing
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Free Payroll Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
