import Layout from "../components/Layout";
import {
  Check,
  Users,
  Globe,
  Award,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Calculator,
  FileText,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { number: "500+", label: "Clients Served", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Award },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Introductory Standup",
      description:
        "We seek valuable insights into your present accounting status, business goals, and challenges ahead.",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      step: "02",
      title: "Custom Solution Design",
      description:
        "Develop a customized accounting structure aligning with your vision, segment, and growth plan.",
      icon: Calculator,
      color: "text-emerald-600",
    },
    {
      step: "03",
      title: "Implementation & Setup",
      description:
        "Smoothly migrate and roll out your custom accounting systems, minimizing functional interruption.",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      step: "04",
      title: "Ongoing Support",
      description:
        "We regularly track performance reviews and strategic alignment to improve your value every step of your journey.",
      icon: BarChart3,
      color: "text-orange-600",
    },
  ];

  const values = [
    {
      title: "Meticulousness",
      description:
        "We offer clean, flawless accounting to keep your financial health at its best and fully compliant.",
      icon: Shield,
    },
    {
      title: "Cutting-edge Innovation",
      description:
        "Use the most advanced accounting technology/tools to make your processes most effective for better value.",
      icon: CheckCircle,
    },
    {
      title: "100% Transparency",
      description:
        "You get neat, transparent, and honest interaction and real-time insights into your financial well-being.",
      icon: TrendingUp,
    },
    {
      title: "Real Partnership",
      description:
        "We're your bookkeeping partner, saving time, resources, and overhead costs, enabling you to focus on your business.",
      icon: Users,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">
                    About Mavix Global
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Your Associate in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Financial
                  </span>{" "}
                  Journey
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  In-depth accounting, bookkeeping, and financial planning and
                  analysis services in the USA & beyond, converting financial
                  pressure into lasting strategic benefits.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services/bookkeeping"
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Professional accounting team"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-6">
                <span className="bg-mavix-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Shaping Financial Success Since 2009
              </h2>
              <div className="space-y-6 text-lg text-mavix-gray dark:text-gray-300 leading-relaxed">
                <p>
                  At Mavix Global, it all started with a clear cause: to reach
                  out to small and mid-sized businesses with uncompromising
                  excellence in accounting, which was previously available only
                  to big corporations.
                </p>
                <p>
                  We initiated this goal as a vision, but it has now converted
                  to a full-blown financial services agency. Starting from
                  accurate bookkeeping to comprehensive financial audit and
                  strategic alliance, we offer solutions that simplify
                  number-crunching for long-term growth.
                </p>
                <p>
                  Our team of veteran accountants and other financial
                  specialists is here just to manage your balance sheets—we're
                  more devoted to your business success.
                </p>
                <p>
                  We have already served and have a roster of more than 500
                  clients across 25 countries. They all trust our staff members
                  for the overall growth of their business and also the volatile
                  compliance.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Professional accounting team"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-mavix-blue to-purple-600 rounded-full opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="h-12 w-12 text-mavix-blue mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-mavix-neutral-dark dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-mavix-gray dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-mavix-blue to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              How We Collaborate With You
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              We practice an agile four-step process, ensuring smooth
              collaboration and rewarding results every time.
            </p>
            <br />
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Our adjustable, four-step method is the backbone of our
              professional approach, ensuring well-knit and articulate teamwork
              and powerful outcomes.
            </p>
            <br />
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              We stand by you at every stage of your business, offering a
              transparent and exceptional experience tailored to your specific
              requirements. This tested method guarantees not just seamless
              understanding, but also offbeat and consistent results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up group h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                  <div className="text-center flex-grow flex flex-col">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-mavix-blue to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-mavix-neutral-dark dark:bg-white text-white dark:text-mavix-neutral-dark text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-mavix-gray dark:text-gray-300 leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-mavix-blue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              The foundation of our work and the promise we make to every
              client.
            </p>
            <br />
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              At Mavix Global, our ethical values guide every aspect of our
              collaboration with clients. Driven by meticulousness, creativity,
              transparency, and partnership with human touch, we deliver
              exceptional, compliant accounting services to boost financial
              health, trust, and business expansion with every partnership.
            </p>
            <br />
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              You experience immense integrity, bonding, and effectiveness with
              each passing day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-mavix-blue bg-opacity-10 p-3 rounded-xl flex-shrink-0">
                    <value.icon className="h-8 w-8 text-mavix-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-mavix-blue to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide">
                Flexible Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Accounting Outsourcing Solutions for Every Business
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Choose from our three business models, designed to accommodate
              businesses of all sizes with specific business needs.
            </p>
            <br />
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Mavix Global's accounting outsourcing services offer seamless
              financial management tailored for businesses seeking efficiency
              and precision. Our experts handle bookkeeping, tax compliance,
              payroll, and reporting with advanced tools and strict
              confidentiality standards, ensuring your records remain error-free
              and up to date.
            </p>
            <br />
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              By outsourcing to Mavix Global, organizations benefit from reduced
              operational costs, scalable solutions, and more time to focus on
              strategic growth, all while enjoying peace of mind and
              professional support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg mb-6 inline-block">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                Full-Time Equivalent (FTE) Model
              </h3>
              <p className="text-mavix-gray dark:text-gray-300 mb-6">
                One of our accounting veterans manages your business, acting as
                the sole stakeholder of the project.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Certified Accounts Specialist is tagged
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  40 hours/week
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Deep Industry Experience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  24/7 Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Option for in-house hiring
                </li>
              </ul>
              <button className="w-full bg-mavix-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-mavix-navy transition-colors">
                Find More
              </button>
            </div>

            <div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-mavix-blue relative animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-mavix-blue text-white px-6 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-3 rounded-lg mb-6 inline-block">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                Part-Time Equivalent (PTE) Model
              </h3>
              <p className="text-mavix-gray dark:text-gray-300 mb-6">
                It is a viable and scalable setup with fixed work hours every
                week. It is an excellent option for expanding companies.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  10-30 hours/week, customized timings
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Same team member assigned
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Option to scale up and down hours
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Calculated monthly budgeting
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Professional support
                </li>
              </ul>
              <button className="w-full bg-mavix-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-mavix-navy transition-colors">
                Get Started
              </button>
            </div>

            <div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-lg mb-6 inline-block">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                Hourly-Based Outsourcing Model
              </h3>
              <p className="text-mavix-gray dark:text-gray-300 mb-6">
                On-demand accounting services are ideal for additional projects
                or one-off needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Flexible hourly billing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Project-based specialities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  No minimum time commitment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Access to expert guidance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Transparent working time
                </li>
              </ul>
              <button className="w-full bg-mavix-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-mavix-navy transition-colors">
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our Engagement Models
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Choose the engagement model that best fits your business needs and
              operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <Users className="h-12 w-12 text-mavix-blue mb-6" />
              <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                Dedicated Team
              </h3>
              <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                A dedicated team of accounting professionals working exclusively
                on your account with deep understanding of your business.
              </p>
            </div>
            <div
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <TrendingUp className="h-12 w-12 text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                Scalable Support
              </h3>
              <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                Flexible resource allocation that scales up or down based on
                your business needs and seasonal requirements.
              </p>
            </div>
            <div
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <Shield className="h-12 w-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                Hybrid Model
              </h3>
              <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                Combination of dedicated resources for core activities and
                flexible support for peak periods and special projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-mavix-blue to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process ensures quick onboarding and seamless
              integration with your existing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: 1,
                title: "Discovery Call",
                description:
                  "Initial consultation to understand your specific accounting needs and challenges",
                icon: "📞",
                color: "from-blue-500 to-blue-600",
              },
              {
                step: 2,
                title: "Proposal",
                description:
                  "Customized solution and transparent pricing proposal tailored to your business",
                icon: "📋",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                step: 3,
                title: "Onboarding",
                description:
                  "Seamless setup and team introduction with comprehensive handover process",
                icon: "🚀",
                color: "from-purple-500 to-purple-600",
              },
              {
                step: 4,
                title: "Delivery",
                description:
                  "High-quality service delivery begins with dedicated team and clear communication",
                icon: "⚡",
                color: "from-orange-500 to-orange-600",
              },
              {
                step: 5,
                title: "Optimization",
                description:
                  "Continuous improvement and optimization based on performance metrics and feedback",
                icon: "📈",
                color: "from-teal-500 to-teal-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700 group-hover:border-mavix-blue">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-mavix-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4 group-hover:text-mavix-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-mavix-blue opacity-60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg opacity-5"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-mavix-blue to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                Support
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our accounting services and
              processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: "How fast can you start working on our project?",
                answer:
                  "We can start in 48-72 hours after the initial discussion and document supply. We have a flawless onboarding with almost nil disruption to your functions.",
                icon: "⚡",
                color: "from-blue-500 to-blue-600",
              },
              {
                question: "How credible is your data security?",
                answer:
                  "We deploy banking-standard security arrangements. This includes encryption, secure file transfer, robust access controls, and NDA agreements. So, you can trust us for your data security.",
                icon: "💻",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                question: "What accounting tool do you rely upon?",
                answer:
                  "We specialize in advanced software like QuickBooks, Sage, Xero, FreshBooks, etc. We can also help you switch your accounting system to them, if needed.",
                icon: "🔒",
                color: "from-purple-500 to-purple-600",
              },
              {
                question: "Can you manage multi-company and global accounting?",
                answer:
                  "Yes, we manage such situations as well, like managing multi-corporation protocol and global operations, including foreign currency transactions and related tax compliance.",
                icon: "🌍",
                color: "from-orange-500 to-orange-600",
              },
              {
                question: "What is your response time?",
                answer:
                  "Usually, we respond within 4-6 hours during working hours, or else we are here 24/7 for any urgent situation.",
                icon: "⏰",
                color: "from-teal-500 to-teal-600",
              },
              {
                question: "How well do you deliver reports?",
                answer:
                  "We deliver the month-end closing report in 5 business days and the year-end financial statements, along with compliance reports, with full assistance with the audit.",
                icon: "📊",
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`bg-gradient-to-r ${faq.color} text-white p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-xl">{faq.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4 group-hover:text-mavix-blue transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600">
              <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                Need more answers?
              </h3>
              <p className="text-mavix-gray dark:text-gray-300 mb-6">
                Our accounting experts are ready to walk you through the ideal
                solution for your Business.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-mavix-blue to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Call us to know how we can simplify your finances
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Request Quote CTA */}
      <section className="py-24 bg-gradient-to-r from-mavix-navy to-mavix-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Streamline Your Accounting?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Get your free accounting consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-mavix-navy hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Request Free Quote
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <Link
                to="/services/bookkeeping"
                className="border-2 border-white text-white hover:bg-white hover:text-mavix-navy px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
