import { Zap, Mic, Upload, ArrowLeftRight, Wallet, Users, HandshakeIcon, Target, BarChart3, Camera } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Quick Add (Fastest in India)',
      description: 'Add expenses in 1 tap. No typing. No friction.'
    },
    {
      icon: Mic,
      title: 'Voice Add (Coming Soon)',
      description: 'Say: "Milk ₹40" or "Auto ₹60". KharchaPal saves it instantly.'
    },
    {
      icon: Upload,
      title: 'UPI / PDF / CSV Import',
      description: 'Import any statement: UPI, bank, wallet, Paytm, PhonePe, Google Pay. Automatically organized with date, category, payment mode, and accurate total.'
    },
    {
      icon: ArrowLeftRight,
      title: 'Cash Withdrawals = Transfers',
      description: 'KharchaPal understands: Bank → Cash is NOT an expense. It updates balances correctly.'
    },
    {
      icon: Wallet,
      title: 'Cash + UPI + Bank Tracking',
      description: 'Track every rupee — no matter how you spend it.'
    },
    {
      icon: Users,
      title: 'Split Expenses',
      description: 'For roommates, friends, sets, travel groups, families. Track who paid and who owes what.'
    },
    {
      icon: HandshakeIcon,
      title: 'Borrow / Lend (IOU Log)',
      description: 'Record all personal loans between friends & family. Never forget who owes whom.'
    },
    {
      icon: Target,
      title: 'Goal-Safe Savings',
      description: 'Set goals (marriage, car, travel, education). KharchaPal warns you before you break them. With inflation-adjusted insights.'
    },
    {
      icon: BarChart3,
      title: 'Weekly Insights',
      description: 'Overspending alerts, category analysis, savings recommendations, spending pace vs. salary, festival overrun alerts.'
    },
    {
      icon: Camera,
      title: 'Receipt Upload',
      description: 'Attach bills, photos, receipts to your expenses.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-orange-600 mb-4">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Key Features</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
