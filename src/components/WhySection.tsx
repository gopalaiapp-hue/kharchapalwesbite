import { Brain } from 'lucide-react';

export function WhySection() {
  const features = [
    'Cash + UPI + Bank → in one view',
    'Automatic statement imports',
    'Festival + monthly household planning',
    'Goal-saving with protection',
    'Borrow & lend tracking',
    'Clean category management',
    'Private & offline-first',
    'Built for Indian spending behaviour'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Brain className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl md:text-4xl text-gray-900">Why KharchaPal?</h2>
          </div>
          
          <p className="text-xl text-gray-700 text-center mb-8">
            Because other apps only track <em>transactions</em>.<br />
            KharchaPal tracks <strong>everything that shapes your financial life</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-orange-50 p-4 rounded-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
