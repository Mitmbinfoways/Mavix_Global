import Layout from '../components/Layout';
import { Shield, Eye, Lock, Users, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const principles = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement robust security measures to protect your personal and financial information.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication about how we collect, use, and protect your information.'
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'Your data is encrypted and stored using industry-leading security protocols.'
    },
    {
      icon: Users,
      title: 'Limited Access',
      description: 'Only authorized personnel have access to your information on a need-to-know basis.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-mavix-navy via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Shield className="h-20 w-20 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Your privacy and data security are fundamental to our service. Learn how we protect and manage your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              We are committed to maintaining the highest standards of privacy and data protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <principle.icon className="h-12 w-12 text-blue-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 p-12 rounded-2xl shadow-xl animate-fade-in-up">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-mavix-neutral-dark dark:text-white mb-8">Privacy Policy</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">Information We Collect</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-4">
                    We collect information necessary to provide our accounting and bookkeeping services, including:
                  </p>
                  <ul className="list-disc list-inside text-mavix-gray dark:text-gray-300 space-y-2">
                    <li>Personal identification information (name, email, phone number)</li>
                    <li>Business information (company name, ABN, business address)</li>
                    <li>Financial data required for accounting services</li>
                    <li>Communication records and service preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">How We Use Your Information</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-4">
                    Your information is used exclusively for:
                  </p>
                  <ul className="list-disc list-inside text-mavix-gray dark:text-gray-300 space-y-2">
                    <li>Providing accounting and bookkeeping services</li>
                    <li>Ensuring compliance with tax and regulatory requirements</li>
                    <li>Communicating about your account and services</li>
                    <li>Improving our service quality and efficiency</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">Data Security</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    We implement industry-standard security measures including encryption, secure servers, 
                    and access controls to protect your information. All data is stored in compliance with 
                    Australian Privacy Principles and relevant data protection regulations.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">Information Sharing</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    We do not sell, trade, or share your personal information with third parties except as 
                    required by law or with your explicit consent. We may share information with trusted 
                    service providers who assist in delivering our services, under strict confidentiality agreements.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">Your Rights</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-mavix-gray dark:text-gray-300 space-y-2">
                    <li>Access your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">Contact Information</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    For questions about this privacy policy or to exercise your rights, contact us at:
                  </p>
                  <div className="bg-mavix-neutral-light dark:bg-gray-800 p-6 rounded-lg mt-4">
                    <p className="text-mavix-gray dark:text-gray-300">
                      <strong>Email:</strong> privacy@mavixglobal.com<br />
                      <strong>Phone:</strong> +61 (08) 1234 5678<br />
                      <strong>Address:</strong> 123 Business St, Sydney NSW 2000, Australia
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-6 rounded-lg">
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    <strong>Last Updated:</strong> January 2024. This privacy policy may be updated periodically. 
                    We will notify you of any significant changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              We're here to help you understand how we protect your information and privacy.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
