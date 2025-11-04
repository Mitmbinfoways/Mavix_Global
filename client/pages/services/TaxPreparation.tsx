import Layout from '../../components/Layout';
import { PiggyBank, FileText, ShieldCheck, Timer, CheckCircle, ArrowRight, Award, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function TaxPreparation() {

  const features = [
    {
      icon: PiggyBank,
      title: 'Comprehensive Tax Expertise',
      description:
        'Our team stays current on federal and state tax rules for complete accuracy and compliance for individuals and businesses.',
    },
    {
      icon: FileText,
      title: 'Enhance Tax Savings',
      description:
        'We capture every eligible debit and credit, streamlining tax liabilities to eliminate liabilities and enhance cash flow.',
    },
    {
      icon: ShieldCheck,
      title: 'Personalized Tax Planning',
      description:
        'Personalized strategies help handle payments, entity frameworks, and ongoing tax efficiency.',
    },
    {
      icon: BarChart3,
      title: 'Correct filings and Reviews',
      description:
        'Minute document review and use of updated software guarantee submission precision and cut audit threats.',
    },
    {
      icon: Timer,
      title: 'Continuous Client Support',
      description:
        'Expert advisors help with IRS communications, dealing with questions promptly and navigating clients through complexities with clarity.',
    },
    {
      icon: Award,
      title: 'Advanced Technology Integration',
      description:
        'We use advanced tax tools and systems for better processing, accuracy, and fast delivery, leading to more reliable results.',
    },
  ];

  const services = [
    'Individual Tax Return Preparation',
    'Business Tax Return Preparation (Corporation, S-Corp, Partnership, LLC)',
    'Trust & Estate Tax Return Preparation',
    'Small Business Tax Credits & Deductions',
    'Tax Loss Harvesting & Utilization',
    'Fringe Benefits & Compensation Tax Planning',
    'Depreciation & Asset Management',
    'Capital Gains Tax Planning',
    'International Tax Compliance & Planning',
    'IRS Audit Support & Representation',
    'Tax Debt Resolution & Negotiation',
    'Entity Structure & Tax Efficiency Reviews',
    'Estimated Tax Payment Planning',
    'Succession & Estate Tax Planning',
    'Tax Credit & Incentive Consulting',
    'State & Local Tax Compliance',
  ];


  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understand your business and its finances, credit and debit sources, and tax liabilities to create a tailored plan.'
    },
    {
      step: '02',
      title: 'Document Exchange and Overview',
      description: 'Procure and assess all relevant documents, which include income statements, deductions, and credits.'
    },
    {
      step: '03',
      title: 'Preparation & Refinement',
      description: 'Prepare tax returns with mindful application of deductions, income, and strategic tax scheduling.'
    },
    {
      step: '04',
      title: 'Filing & Monitoring',
      description: 'File tax returns precisely and on time; deliver continuous support for audits or queries.'
    }
  ];

  const faqs = [
    {
      title: "1. What kinds of tax returns do you prepare?",
      description: "We manage individual, business (including LLCs, corporations, S-corps, partnerships), trusts, and estate tax returns."
    },
    {
      title: "2. Can you help me maximize tax deductions for my SME?",
      description: "Yes, we have been offering services to SMEs in finding and applying small business tax credits, deductions, and depreciation schedules to optimize your tax savings."
    },
    {
      title: "3. How do you help with tax planning for capital gains and global compliance?",
      description: "We help you manage capital gains tax and complex international tax laws to help you stay on the right side of the law and reduce liabilities."
    },
    {
      title: "4. What support can you offer if I have an IRS audit or tax debt?",
      description: "We represent you during IRS audits and help negotiate or resolve tax debts to cut stress."
    },
    {
      title: "5. Do you deliver advice on tax-saving business structures and succession planning?",
      description: "Yes. We assess your entity framework and help with succession and estate tax planning to elevate tax efficiency and secure your business future."
    }
  ];


  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-teal-50 to-green-100 dark:from-gray-900 dark:via-teal-900 dark:to-green-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-green-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-teal-500/10 dark:bg-teal-400/10 border border-teal-200 dark:border-teal-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-teal-700 dark:text-teal-300 text-sm font-medium">Tax Excellence</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">Tax Preparation </span> and Planning Services in the USA
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Managing taxes is a complicated and time-intensive process. Mavix Global’s specialist consulting and planning support helps your business stay compliant while maximizing tax efficiencies. We promise that every debit and credit is maximized, reducing your tax liabilities and enabling you to grow your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Start Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Consultation
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Max</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tax Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">ATO</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Expert</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Advice</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-green-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Tax preparation and planning services"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-green-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Tax</div>
                    <div className="text-sm">Optimized</div>
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
              Why Choose Our Tax Services
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              We, at Mavix Global, deliver expert tax services customized to increase savings with complete IRS compliance. Utilizing our in-depth knowledge of U.S. tax laws, combined with a commitment to accuracy and efficiency, we alleviate our clients’ stress. Associating with us is just like having access to our strategic planning, problem-free filings, and peace of mind during tax season.
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
                Strategic Tax Planning Solutions
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Mavix Global delivers timely and thorough tax preparation and planning help meant to address different client needs in the USA.
                Our team of experts ensures precise filings, compliance with federal and state tax laws, and judicious tax management to decrease liabilities.
                We associate with individuals and businesses with personalized solutions for excellent financial health and simplified business processes year-round.
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
              Process We Follow
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              We specialize in delivering a neat and professional tax preparation and planning roadmap given your unique financial situation.
              Trusting and using advanced tools and proven trajectories to maximize accuracy, optimize tax savings, and maintain full compliance with IRS regulations is our way of dealing with tax filing.
              From the very first discussion to following up, we know what it takes to stand by your side as your accounting partner.
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
      <section className="py-24 bg-gradient-to-r from-teal-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Taxes Right on Time!
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Team up with Mavix Global’s professional tax planning and preparation services in the USA to optimize filings, maximize savings, and avoid any costly mistakes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Begin Your Tax Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Book a Complimentary Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
