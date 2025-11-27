import { Rocket, Brain, AlertCircle, Mic, Users, TrendingUp, CreditCard, Activity } from 'lucide-react';

export function ComingSoon() {
  const upcomingFeatures = [
    { icon: Brain, text: 'AI weekly digest' },
    { icon: AlertCircle, text: 'Automatic leak detection' },
    { icon: Mic, text: 'Voice-first UI' },
    { icon: Users, text: 'Free/paid family plans' },
    { icon: TrendingUp, text: 'Smart budget for festivals' },
    { icon: Activity, text: 'Auto UPI settlement detection' },
    { icon: CreditCard, text: 'Credit card bill prediction' },
    { icon: Activity, text: 'Monthly pulse score' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <Rocket className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl md:text-4xl text-gray-900">What's Coming Next</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8">
            {upcomingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl">
                  <Icon className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-700">{feature.text}</p>
                </div>
              );
            })}
          </div>
          
          <p className="text-xl text-gray-700">
            KharchaPal is evolving into a <strong>complete Personal Money Assistant</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
