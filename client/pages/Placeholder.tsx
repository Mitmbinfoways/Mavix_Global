import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import Layout from '../components/Layout';

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-screen bg-mavix-neutral-light flex items-center justify-center px-4 overflow-hidden">
        <div className="text-center max-w-3xl animate-fade-in-up">
          <div className="relative mb-12">
            <Construction className="h-32 w-32 text-mavix-blue mx-auto mb-8 animate-float" />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-mavix-blue rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-400 rounded-full opacity-10 animate-bounce"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-mavix-neutral-dark mb-6 animate-slide-in-left">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-mavix-gray mb-12 leading-relaxed animate-slide-in-right">
            {description}
          </p>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-12 shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in delay-300 hover-lift">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-mavix-blue to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-glow">
                <span className="text-white font-bold text-xl">!</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-mavix-neutral-dark mb-4">
              Custom Development Available
            </h3>
            <p className="text-mavix-gray mb-6 leading-relaxed">
              This section is ready for customization based on your specific requirements. Continue our conversation to build exactly what you envision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-mavix-neutral-light p-4 rounded-lg">
                <div className="font-semibold text-mavix-navy mb-1">Content</div>
                <div className="text-mavix-gray">Custom copy & messaging</div>
              </div>
              <div className="bg-mavix-neutral-light p-4 rounded-lg">
                <div className="font-semibold text-mavix-navy mb-1">Design</div>
                <div className="text-mavix-gray">Tailored visual elements</div>
              </div>
              <div className="bg-mavix-neutral-light p-4 rounded-lg">
                <div className="font-semibold text-mavix-navy mb-1">Features</div>
                <div className="text-mavix-gray">Interactive functionality</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
            <Link
              to="/"
              className="bg-mavix-navy hover:bg-mavix-blue text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-xl"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Homepage
            </Link>
            <button className="border-2 border-mavix-navy text-mavix-navy hover:bg-mavix-navy hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Continue Building This Page
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
