import { ArrowRight } from 'lucide-react';

export function FlowSection() {
  const flowSteps = [
    'Salary comes',
    'cash withdrawal',
    'UPI spends',
    'small cash expenses',
    'EMI',
    'group spending',
    'loan returns',
    'goal savings',
    'emergency expenses'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            The KharchaPal Flow
          </h2>
          <p className="text-xl text-gray-700 mb-8">Your Money, Understood</p>
          
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {flowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <span className="bg-orange-100 text-orange-700 px-3 md:px-4 py-2 rounded-lg text-sm md:text-base">
                    {step}
                  </span>
                  {index < flowSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-orange-400 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-gray-600">
              KharchaPal automatically recognizes each step and builds a clear <strong>Money Flow Map</strong>,<br className="hidden md:block" />
              so you never lose track again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
