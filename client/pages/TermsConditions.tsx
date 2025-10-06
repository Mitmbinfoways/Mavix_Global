import Layout from '../components/Layout';
import { FileText, Scale, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsConditions() {
  const keyPoints = [
    {
      icon: FileText,
      title: 'Service Agreement',
      description: 'Clear terms outlining our professional accounting and bookkeeping services.'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'All services comply with Australian accounting standards and regulations.'
    },
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Comprehensive protection of your business and financial information.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Professional standards and quality guarantees for all our services.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-mavix-navy via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Scale className="h-20 w-20 text-purple-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Professional service terms that ensure quality, compliance, and mutual understanding in our business relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Service Agreement Overview
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Our terms ensure transparent, professional, and compliant service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <point.icon className="h-12 w-12 text-purple-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {point.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 p-12 rounded-2xl shadow-xl animate-fade-in-up">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-mavix-neutral-dark dark:text-white mb-8">Terms & Conditions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">1. Service Agreement</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    By engaging Mavix Global for accounting, bookkeeping, or related services, you agree to these terms and conditions. 
                    Our services are provided in accordance with Australian accounting standards, tax regulations, and professional guidelines.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">2. Scope of Services</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-4">
                    Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside text-mavix-gray dark:text-gray-300 space-y-2">
                    <li>Bookkeeping and financial record maintenance</li>
                    <li>BAS preparation and lodgment</li>
                    <li>Financial statement preparation</li>
                    <li>Tax compliance and planning</li>
                    <li>Payroll processing and management</li>
                    <li>Software setup and training</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">3. Client Responsibilities</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-4">
                    Clients are responsible for:
                  </p>
                  <ul className="list-disc list-inside text-mavix-gray dark:text-gray-300 space-y-2">
                    <li>Providing accurate and complete financial information</li>
                    <li>Timely submission of required documents and data</li>
                    <li>Maintaining proper business records</li>
                    <li>Payment of fees in accordance with agreed terms</li>
                    <li>Notifying us of any changes to business circumstances</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">4. Professional Standards</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    We maintain the highest professional standards and comply with all relevant Australian accounting bodies' 
                    codes of conduct. Our services are provided with professional care and competence, and we maintain 
                    appropriate professional indemnity insurance.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">5. Confidentiality</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    We maintain strict confidentiality regarding all client information and comply with professional 
                    privacy obligations. Client information will not be disclosed to third parties without consent, 
                    except as required by law or professional standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">6. Fees and Payment</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    Fees are based on time, complexity, and scope of services. Payment terms are Net 30 days unless 
                    otherwise agreed. Interest may be charged on overdue accounts. We reserve the right to suspend 
                    services for non-payment.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">7. Limitation of Liability</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    Our liability is limited to the fees paid for the specific service giving rise to the claim. 
                    We are not liable for consequential damages, lost profits, or penalties arising from third-party actions.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">8. Termination</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    Either party may terminate services with 30 days written notice. Upon termination, all outstanding 
                    fees become immediately due, and client records will be returned or destroyed as requested.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">9. Governing Law</h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                    These terms are governed by Australian law and the jurisdiction of Australian courts. 
                    Any disputes will be resolved through professional mediation before litigation.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900 dark:bg-opacity-20 p-6 rounded-lg">
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    <strong>Last Updated:</strong> January 2024. These terms may be updated periodically with notice to clients. 
                    Continued use of our services constitutes acceptance of any updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Contact us to discuss your accounting needs and begin our professional service relationship.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Contact Us Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
