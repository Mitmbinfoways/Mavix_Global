import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import {
  PiggyBank,
  Briefcase,
  RefreshCcw,
  FileCheck,
  Target,
  Lock,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AccountingOutsourcing() {

  const features = [
    {
      icon: PiggyBank,
      title: 'Cost-efficient Services',
      description: 'Save on expenditure by directing your accounting liabilities to us without needing to have an in-house team.'
    },
    {
      icon: Briefcase,
      title: 'Get hold of Experts',
      description: 'Enjoy help from veteran accountants who’ve an updated understanding of industry rules and guidelines.'
    },
    {
      icon: RefreshCcw,
      title: 'Adjustability and Adaptability',
      description: 'Our accounting experts help you with different modules of projects, like part-time, full-time, or project-driven tasks, as per your needs.'
    },
    {
      icon: FileCheck,
      title: 'Compliance and Perfection',
      description: 'Your financial data will remain fresh, within the bounds of law, and as per the defined standards of accounting practices.'
    },
    {
      icon: Target,
      title: 'Focus on Business Priorities',
      description: 'Outsource your regular accounting tasks to us, and you can focus that time and effort on growing your business.'
    },
    {
      icon: Lock,
      title: 'Locked Down, Stress-Free',
      description: 'Your financials are locked down under the parameters of an advanced system while you focus on your business.'
    }
  ];

  const services = [
    'Financial Statement Preparation and Review',
    'Ledger Management',
    'Tax Submission and Compliance',
    'Bank and Credit Card Integrations',
    'Fixed Asset Accounting and Management',
    'Budgeting and Analysis Support',
    'Cash Flow Analysis and Management',
    'Payroll Management and Compliance',
    'Accounts Payable and Receivable Management',
    'Month-End and Year-End Close Processes',
    'Internal Controls and Risk Management',
    'Audit Support and Liaison',
    'Performance and Variance Analysis',
    'Cost Accounting and Profitability Analysis',
    'CFO Advisory and Strategic Financial Planning',
    'Credit Card and Bank Reconciliation',
    'Receivable Processing',
    'Invoice Processing and Handling',
    'Expense Tracking and Analysis',
    'Monthly Financial Reporting',
    'State and Local Sales Tax Compliance and Reporting',
    'Defined vs. Actual Performance Analysis',
    'Inventory Valuation and Tracking',
  ];

  const process = [
    {
      step: '01',
      title: ' Consultation & Requirement Collection',
      description: 'We study your accounting challenges and generate a tailored outsourcing strategy.'
    },
    {
      step: '02',
      title: 'Orientation and Data Transfer',
      description: 'Safe exchange of data for flawless and easy transition of data and other information.'
    },
    {
      step: '03',
      title: 'Process Deployment',
      description: 'Our experts manage bookkeeping, financial reporting, and compliance tasks as you expect.'
    },
    {
      step: '04',
      title: 'Reporting and Support',
      description: 'Easy and actionable progress reports and financial insights are provided regularly, with regular support.'
    }
  ];

  const faqs = [
    {
      title: "1. How do you keep my financial information safe?",
      description: "We use modern security tools and follow strict rules to keep your sensitive financial data safe and private.​"
    },
    {
      title: "2. Can I change the model of service if my business grows?",
      description: "Absolutely! You can amp up or down anytime as per your business circumstances."
    },
    {
      title: "3. Do you manage all US tax laws and regulations?",
      description: "Yes, our experts are well-aware of all the updates to US tax rules and ensure that your books are up to date."
    },
    {
      title: "4. What kind of reports should I expect?",
      description: "You’ll get simple yet precise reports every day that help you make smart business strategies.​"
    },
    {
      title: "5. Will you help if I am to be audited?",
      description: "We’ll create all the required documents and reports and work with auditors to make the process smooth."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/10 dark:bg-purple-400/10 border border-purple-200 dark:border-purple-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Outsourcing Solutions</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Accounting Outsourcing </span> Solutions in THE USA
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Redesign your finances with expert outsourced accounting help in the USA. Cut costs, save time and resources, and tap into skilled experts.
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
                  Free Assessment
                </button> */}
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">60%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expert Team</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Professional accounting outsourcing services"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">60%</div>
                    <div className="text-sm">Cost Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Why Choose Our Accounting Outsourcing Services?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Selecting Mavix Global is a smart option when you’re searching for a trustworthy accounting partner who is passionate about precision, compliance, and efficiency.

              We offer personalized services to cut costs, offer accuracy, and liberate your minds to do your business better.

              With veterans, updated tools, and scalable options, we ensure your bookkeeping, taxation, and reporting are accurate and compliant.

              Get peace of mind and grow your business towards achieving your goals faster.
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
                Our Accounting Outsourcing Services
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Our customized accounting outsourcing services help companies to benefit from our financial solutions without cutting corners, and give you peace of mind as you get time to focus on your other management strategies.
                Whether it's payroll, tax, or bookkeeping, you get end-to-end accounting services, including the best-of-class reporting as well. Most updated and state-of-the-art software and systems are our best comrade, using which we keep your accounts updated.
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
              Our accounting outsourcing services are professional and focused, which simplifies your financial health.
              From the initial discussion and information transfer to meticulous service deployment and continuous support, we manage every stage with precision and efficiency.
              By fusing industry practices with clean reporting, we help clients achieve quantifiable results and peace of mind.
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
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-mavix-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Looking to Streamline Your Accounting Operations?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Partner with Mavix Global’s accounting services in the USA and free up valuable time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your Accounting Outsourcing
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
