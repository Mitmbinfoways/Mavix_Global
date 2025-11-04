import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import {
  Wallet,
  FileSpreadsheet,
  ShieldCheck,
  Medal,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Clock3,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function PayrollOutsourcing() {

  const features = [
    {
      icon: Wallet, // 💰 Payroll / Money
      title: 'Payroll Expertise',
      description:
        'Get access to our in-depth US payroll veteran, ensuring wages, taxes, superannuation, and all entitlements are done correctly.',
    },
    {
      icon: FileSpreadsheet, // 📄 Payroll records, payslips, admin
      title: 'Comprehensive Payroll Administration',
      description:
        'We manage payslip generation, leave calculations, and employee onboarding, while configuring with payroll software for smooth operations.',
    },
    {
      icon: ShieldCheck, // 🛡️ Compliance / Legal protection
      title: 'USA Compliance',
      description:
        'Be compliant with Fair Labor Standards Act (FLSA), FICA, FUTA, and federal income tax rules, and local payroll laws.',
    },
    {
      icon: Clock3,
      title: 'Timely, Accurate Processing',
      description:
        'Our team ensures timely payments and filings, enabling you to avoid errors, underpayments, and regulatory breaches every pay cycle.',
    },
    {
      icon: Medal, // 🏅 Professional quality / Expertise
      title: 'Quality & Professional Experience',
      description:
        'Our qualified payroll specialists unite real-world knowledge with a pledge to accuracy, privacy, and confidentiality for every client.',
    },
    {
      icon: BarChart3, // 📊 Insights / Reporting
      title: 'Business Performance Insights',
      description:
        'Get hold of in-depth payroll reports and analytics to underpin workforce strategy, budgeting, and judicious business decision-making.',
    },
  ];

  const services = [
    'Employee Setup & Onboarding',
    'Salary & Wage Computations',
    'Benefits & Retirement Plan Management (401(k), health plans)',
    'W-2 and 1099 Form Preparation',
    'Paid Leave and Other Leave Management',
    'Allowances & Reimbursement Processing',
    'Payslip Creation & Employee Self-Service Portals',
    'Overtime & Premium Pay Management',
    'Tax Filing & Relevant Compliance',
    'Workers’ Compensation Insurance Administration',
    'Federal, State & Local Tax Withholding & Deductions',
    'Multi-State Payroll Processing',
    'Payroll Tax Management & Reporting',
    'Final Pay & Termination Settlements',
    'Garnishments & Wage Attachments',
    'Payroll Analytics & Reporting',
  ];

  const process = [
    {
      step: '01',
      title: ' Initial Consultation',
      description: 'Understand your business’s challenges and craft a tailored payroll outsourcing solution addressing your companys structure.'
    },
    {
      step: '02',
      title: 'Information Collection & Validation',
      description: 'Gather staff data, pay slabs, and entitlements; cross-check records for accuracy and adherence.'
    },
    {
      step: '03',
      title: 'Payroll Processing & Reporting',
      description: 'Tackle payroll processes, income calculations, tax and benefit deductions, leave handling, and create pay slips and tax filings for federal and state compliance.'
    },
    {
      step: '04',
      title: 'Compliance, Review & Support',
      description: 'Perform regular inspections to ensure legal compliance, supply payroll reports and payslips, and provide support for audits, regulatory changes, and system updates.'
    }
  ];

  const faqs = [
    {
      title: "1. What is payroll outsourcing?",
      description: "It is the process of hiring an agency/company to handle your payroll process for calculations, tax filing, to pay distribution.​​"
    },
    {
      title: "2. How does payroll outsourcing work?",
      description: "At, Mavix Global, we deliver employee data, process payroll, manage deductions, and make sure it is as per standard law."
    },
    {
      title: "3. Why should a business outsource payroll?",
      description: "To keep your budget in check, no cost for in-house hiring, and giving your 100% to your business.​"
    },
    {
      title: "4. Is my payroll data safe with Mavix Global?",
      description: "Yes. We use strict data protection systems and secure technology to keep it confidential and safe.​"
    },
    {
      title: "5. Can you tailor your payroll services to my business needs?",
      description: "Yes. We always create customized payroll solutions as per the needs of our clients that can fit your pay schedules and company size."
    }
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
                  Insightful <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Payroll</span> Outsourcing Services for Every Business
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  A payroll team that emphasizes accuracy, promptness, and compliance, while benefiting from expert oversight and smooth pay cycle reporting.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Call us Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                {/* <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Payroll Audit
                </button> */}
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
              Why Choose Our Payroll Management Services USA?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              We are one of the fastest-growing agencies offering professional payroll management services in the USA. Our qualified team makes it a point to deliver precise, correct payroll solutions, on-time tax withholding, and as per the applicable state regulations.
              We make your life simpler by managing your complex payroll tasks, reducing the possibility of penalties, and giving you enough time to concentrate on your business and take it to the next level.
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

      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Suite of Comprehensive Payroll Management Solutions
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                We deliver end-to-end payroll outsourcing solutions for employee compensation and legal compliance with the USA regulations, ensuring a seamless pay cycle every time.
                With extensive knowledge and experience in U.S. payroll regulations, our services ensure that your employees are paid the proper wages and in compliance every time.
                We manage every section of payroll management, starting from onboarding and tax withholdings to benefits management, wage calculations, and federal/state reporting. We help you cut administrative tasks while remaining within the legal parameters of complex U.S. payroll regulations.
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Bookkeeping services overview"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Our payroll process is engineered to provide a seamless and personalized outsourcing solution for your business. Beginning with a professional consultation, we garner and verify all necessary employee and pay data, then perform payroll calculations, including taxes and benefits.
              We also ensure that the payroll processing is in line with the relevant legal filings and manage regular audits.
              Eventually, we also provide in-depth statements and ongoing support to ensure the payroll process is clean and flawless.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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

      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our accounting outsourcing services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-mavix-neutral-dark dark:text-white">
                      {faq.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-mavix-gray dark:text-gray-300 pt-2">
                      {faq.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Looking to Outsource Payroll Solutions?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let’s help you manage your daily payroll solution and offer ample resources and time for more productive work!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Call our experts
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Get a free Payroll audit
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
