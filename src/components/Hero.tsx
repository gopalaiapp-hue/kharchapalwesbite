import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">India's Smartest Way to Track Your Money</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Money Made Simple.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-4">
          For You, Your Family, Your Future.
        </p>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Cash. UPI. Bank. Cards. Loans. Goals.<br />
          One app. One clear picture. Zero confusion.
        </p>
        
        <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
          Start for free
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-sm text-gray-500 mt-4">
          No credit card required • Works offline • Privacy first
        </p>
      </div>
    </section>
  );
}
