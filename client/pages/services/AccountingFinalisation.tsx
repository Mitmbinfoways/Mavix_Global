import Layout from '../../components/Layout';
import { PiggyBank, FileText, ShieldCheck, Timer, CheckCircle, ArrowRight, Award, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AccountingFinalisation() {

  const features = [
    {
      icon: PiggyBank,
      title: 'Year-End Expertise',
      description:
        'Benefit from our year-end accounting expertise, designed to ensure a proper financial close and complete compliance with US GAAP accounting practices.',
    },
    {
      icon: FileText,
      title: 'Financial Statement Preparation',
      description:
        'We specialize in preparing balance sheets, profit & loss statements, and cash flow reports, ensuring to meet statutory requirements.',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance Adherence',
      description:
        'Our veterans ensure your accounts adhere to SEC guidelines, tax liabilities, and industry-specific practices, reducing compliance risks.',
    },
    {
      icon: BarChart3,
      title: 'Performance Assessment',
      description:
        'Get hold of comprehensive insights into your financial performance for better strategic planning and identifying growth opportunities.',
    },
    {
      icon: Timer,
      title: 'Timely Completion',
      description:
        'Trustworthy and proper handling of your completion process to meet regulatory deadlines and filing requirements on time.',
    },
    {
      icon: Award,
      title: 'High-end Quality',
      description:
        'Our qualified accountants bring professional experience and a passion for offering accurate financial statements consistently.',
    },
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
      title: ' Initial Conversation',
      description: 'Understand your financial accounting condition and offer a tailored finalization strategy accordingly.'
    },
    {
      step: '02',
      title: 'Data Mining & Review',
      description: 'Review financial documents, other files, and also conduct first-hand account tallying to keep it precise and accurate.'
    },
    {
      step: '03',
      title: 'Account Maching & Financial Statement Generation',
      description: 'We ensure your accounts are accurate by verifying asset records, adjusting, and developing financial records.'
    },
    {
      step: '04',
      title: 'Compliance, Final Audit & Continuous Support',
      description: 'We prepare tax returns, submit final reports, and deliver continuous support for audits and regulatory inquiries.'
    }
  ];

  const faqs = [
    {
      title: "1. How does account finalization support tax adherence?",
      description: "Account finalization keeps your financial records accurate and complete before tax filing, making your tax return timely and compliant."
    },
    {
      title: "2. How does account finalization help with business decision-making?",
      description: "We create financial reporting and evaluation to convert your data into actionable insights. We highlight cash flow trends, profitability triggers, and key metrics to help make better strategic decisions."
    },
    {
      title: "3. How fast can you complete the finalization process?",
      description: "The timeframe depends on the number of transactions and complexity. Our streamlined approach, using veteran expertise, brings results efficiently. We offer a viable timeline tailored to your specific business requirements."
    },
    {
      title: "4. Do you manage inventory valuation and stock counts?",
      description: "Yes. We perform stock counts and use advanced valuation methods to ensure accurate inventory value, which affects your cost of goods sold and profit assessment."
    },
    {
      title: "5. Can you help with audit preparation through account finalization?",
      description: "Yes. Account finalization is all about developing audit-ready records. We organize, confirm, and document all back and forth so your records are right, underpinned by evidence, and audit-ready."
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
                  <span className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">Year-End Services</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Accounting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Finalisation Services </span> for Growing Businesses
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Accurate and timely financial account finalization with compliance and transparency, ensuring your accounts are finalized easily.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Call us Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                {/* <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Assessment
                </button> */}
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">ASIC</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Expert</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Team</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Year-end accounting and financial statements"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Year-End</div>
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
              Why Choose Our Accounting Finalization Services?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Mavix Global specializes in accounting finalization services orchestrated to bring precision, compliance, and competence to your financial closing.
              Our consultants  ensure your accounts are well-inspected and streamlined, offering clean and in-depth financial statements.
              Selecting Mavix Global as your accounting partner, you unveil the benefits of expert supervision, smooth workflows, and the confidence to make insightful strategic decisions for fast and cutting-edge growth.
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

      {/* Services Included */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Our Accounting Finalization Services in the USA
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                We engineer our comprehensive financial services to support your business's financial health and compliance.

                Beginning from trial balance generation and ledger review to credit card reconciliation and fixed asset management, our veterans confirm precision and transparency.

                We oversee depreciation, stock valuation, cash flow creation, and in-depth management reporting to businesses to make data-driven business decisions for growth.
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
                alt="Financial statement preparation"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Our accounting finalization services confirm precision, compliance, and clarity in your financial reporting.

              Starting with a short chat to know your specific financial situation and build a strategy that fits your needs. From data collection and review to account reconciliations and year-end amendments, each process is managed articulately to offer clean and reliable financial statements.

              This includes tax compliance, final reviews, and long-term support post-finalization.
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
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Looking to outsource your accounting finalization process?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Associate with Mavix Global’s accounting finalization services to ensure compliant and timely financial closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Complete your books
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
