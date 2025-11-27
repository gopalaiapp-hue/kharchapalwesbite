import { ArrowRight, Download } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Download className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl mb-6">
            Download Now — Start Your Money Clarity Journey
          </h2>
          
          <div className="space-y-2 mb-8">
            <p className="text-xl">Track smarter.</p>
            <p className="text-xl">Spend wiser.</p>
            <p className="text-xl">Save confidently.</p>
          </div>
          
          <p className="text-2xl mb-8">
            <strong>KharchaPal — Your Money, Explained.</strong>
          </p>
          
          <button className="group bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-orange-50 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
            Coming soon on Play Store & App Store
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
