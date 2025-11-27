import { Shield, Lock, Database, Eye, UserX } from 'lucide-react';

export function PrivacySection() {
  const privacyFeatures = [
    { icon: Database, text: '100% data stays on your device' },
    { icon: UserX, text: 'No bank login required' },
    { icon: Lock, text: 'Optional encrypted backup' },
    { icon: Eye, text: 'No data selling' },
    { icon: Shield, text: 'No tracking between apps' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <Shield className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl md:text-4xl">Privacy You Can Trust</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {privacyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <Icon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              );
            })}
          </div>
          
          <p className="text-lg text-gray-300">
            KharchaPal is built <strong>privacy-first</strong> for Indian families.
          </p>
        </div>
      </div>
    </section>
  );
}
