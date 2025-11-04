import Layout from '../../components/Layout';
import { FileSearch, Users, Shield, CheckCircle, ArrowRight, Award, BarChart3, Eye, } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AuditSupport() {
  const features = [
    {
      icon: FileSearch,
      title: 'Accuracy in Every Audit Step',
      description: 'All your compliance needs are met with minimal hassle by organizing your audit processes efficiently.'
    },
    {
      icon: Users,
      title: 'Secure and Organized Business Data',
      description: 'Protect your critical data with well-maintained, organized records for hassle-free audit via expert support.'
    },
    {
      icon: Eye,
      title: 'Timely Documentation Support',
      description: 'Get prompt expert assistance and maintain accurate and systematic documentation with professional support.'
    },
    {
      icon: BarChart3,
      title: 'Expert Guidance',
      description: 'Enjoy peace of mind when experts prepare your business to be fully audit-ready, promoting confidence and reducing risk.'
    },
    {
      icon: Shield,
      title: 'Transparent Audits',
      description: 'Start with free counseling for more straightforward and transparent audit processes tailored to your business needs.'
    },
  ];

  const services = [
    'Financial Statement Generation',
    'Supporting Schedule Creation',
    'Internal Controls Documentation',
    'Audit Trail Development',
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
    'Going Concern Assessment',
  ];


  const process = [
    {
      step: '01',
      title: 'Initial Assessments',
      description: 'Inspect your present financial controls, records, and audit preparedness.'
    },
    {
      step: '02',
      title: 'Audit Planning',
      description: 'Create a customized audit plan to align with legal standards and client needs.'
    },
    {
      step: '03',
      title: 'Documentation Generation',
      description: 'Organize and oversee all financial data and reports to ensure audit readiness.'
    },
    {
      step: '04',
      title: 'Compliance & Control Review',
      description: 'Inspect internal controls and regulatory discrepancies, suggesting improvements.'
    }
  ];

  const faqs = [
    {
      title: "1. What range of audit support do you provide?",
      description: "It is the process of hiring an agency/company to handle your payroll process for calculations, tax filing, to pay distribution.​​"
    },
    {
      title: "2. Do you help with creating answers to management letters?",
      description: "Of course! We help you create a clear and effective response to auditors’ management letters."
    },
    {
      title: "3. Can you assist with asset and inventory counts?",
      description: "Yes, we support confirming assets and recording inventory to ensure everything is added in your audit."
    },
    {
      title: "4. What does your analytical review support service include?",
      description: "We assess your financial patterns and verify if transactions are recorded on time for  accurate records.​"
    },
    {
      title: "5. We assess your financial patterns and verify if transactions are recorded on time for  accurate records. ",
      description: "We verify that all relevant party transactions are accurately disclosed and evaluate any events post-reporting deadline that auditors should be aware of."
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
                  Make your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Audit</span> Stress-Free with Audit Support Services USA
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Audits, when handled professionally, reduce your worries and liberate you for business growth and innovation. Leveraging Mavix Global’s audit support service, every compliance is dealt with diligently, embedding transparency and accountability in your operations. We ensure your records are audit-ready, with the least disruption.
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
              Why Choose Our Audit Support Services
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Mavix Global’s audit support service is committed to making your audit process stress-free.

              You gain access to our expert guidance and professional management of your financial health, with records that are fully compliant and audit-ready.

              We manage and represent your business before auditors, cutting disruptions, and boosting confidence. Thus helping you focus on your clients and enjoy peace of mind.
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
                Extensive Audit Support Services for the USA
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                At Mavix Global, we specialize in offering end-to-end audit support meant for US businesses, ensuring clean audit processes and complete legal compliance.
                From conceptualization to final documentation, our specialists handle documentation, controls, and interaction to ensure a stress-free and clean audit.
                Focus on your business expansion, and we guarantee your audit’s readiness and compliance as per US regulations.
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


      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Process We Follow
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Mavix Global’s audit support services are crafted to simplify and refine the audit process for US businesses.
              We develop a clean and professional path and plan to make your audit process less stressful and flawless.
              Our years of cumulative industry experience have led us to help you avoid delays, accelerate accuracy, and adhere to defined regulatory practices, so that you can devote your precious time to promoting your business uninterrupted.
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Looking to Simplify Your Audits?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Ensure a flawless and compliant audit under professional guidance from Mavix Global.
              Collaborate with our audit support specialists in the USA for an effortless audit
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* <Link
                to="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Audit Support
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link> */}
              <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
