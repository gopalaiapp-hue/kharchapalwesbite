import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    "I finally know where my cash goes.",
    "UPI + cash + bank in one app = game changer.",
    "Family expenses are so clear now.",
    "Goal warning protected my travel savings.",
    "Super fast and clean."
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Loved by College Students, Families & Working Professionals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-orange-100">
                <div className="flex gap-1 mb-4 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
