import Layout from '../components/Layout';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, User, Building, Calendar, MessageSquare, Star, Award, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    employees: '',
    services: [],
    message: '',
    preferredTime: '',
    hearAboutUs: ''
  });

  const serviceOptions = [
    'Bookkeeping Services',
    'Tax Preparation & Planning',
    'Business Advisory',
    'Payroll Processing',
    'BAS Preparation',
    'Accounting Software Setup',
    'Financial Reporting',
    'Business Registration',
    'Accounting Outsourcing'
  ];

  const industryOptions = [
    'Professional Services',
    'Retail & E-commerce',
    'Manufacturing',
    'Construction',
    'Healthcare',
    'Technology',
    'Real Estate',
    'Hospitality',
    'Not-for-Profit',
    'Other'
  ];

  const employeeOptions = [
    '1-5 employees',
    '6-20 employees',
    '21-50 employees',
    '51-100 employees',
    '100+ employees'
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Free 30-Minute Consultation',
      description: 'Comprehensive assessment of your accounting needs with no obligation or cost.'
    },
    {
      icon: Star,
      title: 'Certified Australian Accountants',
      description: 'Qualified professionals with local expertise in Australian tax and compliance.'
    },
    {
      icon: Award,
      title: 'Customized Solutions',
      description: 'Tailored accounting strategies designed specifically for your business requirements.'
    },
    {
      icon: Shield,
      title: 'Guaranteed Confidentiality',
      description: 'Your business information is protected with the highest security standards.'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Consultation',
      description: 'Speak directly with our accounting experts',
      details: '+61 2 8001 4000',
      available: 'Mon-Fri 9:00 AM - 6:00 PM AEST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      details: 'contact@mavixglobal.com.au',
      available: 'Response within 24 hours'
    },
    {
      icon: Calendar,
      title: 'Video Call Meeting',
      description: 'Face-to-face consultation via video',
      details: 'Schedule online meeting',
      available: 'Flexible scheduling available'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant support during business hours',
      details: 'Chat widget on website',
      available: 'Mon-Fri 9:00 AM - 5:00 PM AEST'
    }
  ];

  const consultationSteps = [
    {
      step: '01',
      title: 'Book Your Free Consultation',
      description: 'Fill out our simple form or call us directly to schedule your no-obligation consultation.',
      icon: Calendar
    },
    {
      step: '02',
      title: 'Business Assessment',
      description: 'Our experts will assess your current accounting processes and identify improvement opportunities.',
      icon: CheckCircle
    },
    {
      step: '03',
      title: 'Customized Proposal',
      description: 'Receive a detailed proposal with tailored solutions and transparent pricing for your business.',
      icon: ArrowRight
    },
    {
      step: '04',
      title: 'Implementation & Support',
      description: 'Start working with our team and experience the difference professional accounting makes.',
      icon: Zap
    }
  ];

  const testimonials = [
    {
      name: 'David Richardson',
      company: 'Richardson Tech Solutions',
      text: 'The free consultation was incredibly valuable. The team identified several areas where we could improve our financial processes and save money.',
      rating: 5
    },
    {
      name: 'Sarah Mitchell',
      company: 'Mitchell Design Studio',
      text: 'Professional, knowledgeable, and genuinely interested in helping our business grow. The consultation exceeded our expectations.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Wilson Manufacturing',
      text: 'They took the time to understand our unique challenges and provided practical solutions we could implement immediately.',
      rating: 5
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-mavix-navy via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-6">
                <span className="bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide">
                  Free Business Consultation
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Book Free Consultation
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Get expert advice on your accounting needs with a complimentary 30-minute consultation. Discover how we can help streamline your finances and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#consultation-form"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="tel:+61280014000"
                  className="border-2 border-white text-white hover:bg-white hover:text-mavix-navy px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center&auto=format&q=80" 
                  alt="Business consultation meeting" 
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Why Book a Free Consultation?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover the value of professional accounting expertise with no commitment. Our free consultation provides actionable insights for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-emerald-500 mb-6" />
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

      {/* Contact Methods */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Choose the most convenient way to connect with our accounting experts and book your free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <method.icon className="h-12 w-12 text-emerald-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {method.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 mb-4 leading-relaxed">
                  {method.description}
                </p>
                <div className="space-y-2">
                  <div className="bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 p-3 rounded-lg">
                    <p className="font-semibold text-sm">{method.details}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-mavix-gray dark:text-gray-400" />
                    <span className="text-sm text-mavix-gray dark:text-gray-400">{method.available}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Book Your Free Consultation
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and our accounting experts will contact you within 24 hours to schedule your complimentary consultation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-6 flex items-center">
                  <User className="h-6 w-6 text-emerald-500 mr-3" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-mavix-neutral-dark dark:text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mavix-neutral-dark dark:text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mavix-neutral-dark dark:text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mavix-neutral-dark dark:text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                      placeholder="+61 4XX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div>
                <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-6 flex items-center">
                  <Building className="h-6 w-6 text-emerald-500 mr-3" />
                  Business Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-mavix-neutral-dark dark:text-white mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mavix-neutral-dark dark:text-white mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                    >
                      <option value="">Select your industry</option>
                      {industryOptions.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mavix-neutral-dark dark:text-white mb-2">
                      Number of Employees
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                    >
                      <option value="">Select company size</option>
                      {employeeOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mavix-neutral-dark dark:text-white mb-2">
                      Preferred Consultation Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                      <option value="evening">Evening (5:00 PM - 7:00 PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Services of Interest */}
              <div>
                <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
                  Services of Interest
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="h-5 w-5 text-emerald-500 focus:ring-emerald-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-mavix-neutral-dark dark:text-white">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 text-emerald-500 mr-3" />
                  Tell Us About Your Needs
                </h3>
                <div>
                  <label className="block text-sm font-semibold text-mavix-neutral-dark dark:text-white mb-2">
                    Describe your current accounting challenges or goals
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                    placeholder="Tell us about your business, current accounting situation, specific challenges you're facing, or goals you want to achieve..."
                  />
                </div>
              </div>

              {/* How did you hear about us */}
              <div>
                <label className="block text-sm font-semibold text-mavix-neutral-dark dark:text-white mb-2">
                  How did you hear about us?
                </label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="referral">Referral from friend/colleague</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="facebook">Facebook</option>
                  <option value="email">Email marketing</option>
                  <option value="website">Company website</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Book My Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
                <p className="text-center text-sm text-mavix-gray dark:text-gray-400 mt-4">
                  By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              What Happens Next?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Our simple 4-step process ensures you get maximum value from your free consultation and clear next steps for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationSteps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 relative h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-mavix-blue text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
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

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              What Our Clients Say About Their Consultation
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover how our free consultations have helped Australian businesses identify opportunities and solve accounting challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-mavix-neutral-dark dark:text-white">{testimonial.name}</h4>
                  <p className="text-emerald-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Visit Our Sydney Office
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                While we serve clients across Australia remotely, you're welcome to visit our Sydney headquarters for in-person consultations and meetings.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-mavix-neutral-dark dark:text-white">Address</h4>
                    <p className="text-mavix-gray dark:text-gray-300">Level 15, 100 Miller Street<br />North Sydney, NSW 2060<br />Australia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-mavix-neutral-dark dark:text-white">Business Hours</h4>
                    <p className="text-mavix-gray dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM AEST<br />Saturday: 9:00 AM - 1:00 PM AEST<br />Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-mavix-neutral-dark dark:text-white">Contact Details</h4>
                    <p className="text-mavix-gray dark:text-gray-300">Phone: +61 2 8001 4000<br />Email: contact@mavixglobal.com.au</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-white dark:bg-gray-700 p-2 rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center&auto=format&q=80" 
                  alt="Sydney office building" 
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business Finances?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Don't wait to get the accounting expertise your business deserves. Book your free consultation today and discover how we can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#consultation-form"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Book Free Consultation Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
              <a 
                href="tel:+61280014000"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call +61 2 8001 4000
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
