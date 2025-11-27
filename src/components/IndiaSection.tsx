import { Flag, Languages, Calendar, Users, Home, Coffee } from 'lucide-react';

export function IndiaSection() {
  const indiaFeatures = [
    { icon: Languages, title: 'Hindi & Marathi', description: 'More languages coming soon' },
    { icon: Calendar, title: 'Indian categories & templates', description: 'Built for your lifestyle' },
    { icon: Calendar, title: 'Festival spends', description: 'Diwali, Eid, Raksha Bandhan' },
    { icon: Users, title: 'Family sharing', description: 'Track together, save together' },
    { icon: Home, title: 'Daily household expenses', description: 'Every rupee accounted for' },
    { icon: Coffee, title: 'Real Indian life', description: 'Chai, parcel, milkman, sabzi' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-6">
            <Flag className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl">Made for India, in India</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {indiaFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <Icon className="w-8 h-8 mb-3" />
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-sm text-orange-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
          
          <p className="text-center mt-12 text-lg">
            We understand it all — because we live it too.
          </p>
        </div>
      </div>
    </section>
  );
}
