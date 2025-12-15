import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aziza Rahimova",
    role: "Mijoz",
    content: "Juda qulay platforma! Santexnik 20 daqiqada yetib keldi va muammoni tezda hal qildi. Rahmat!",
    rating: 5,
    avatar: "👩",
  },
  {
    id: 2,
    name: "Bobur Kamolov",
    role: "Mijoz",
    content: "Repetitor topish juda oson bo'ldi. Bolam uchun ajoyib o'qituvchi topdik. Tavsiya qilaman!",
    rating: 5,
    avatar: "👨",
  },
  {
    id: 3,
    name: "Malika Yusupova",
    role: "Sartarosh",
    content: "Usta sifatida ro'yxatdan o'tdim va doimiy buyurtmalar olayapman. Ajoyib imkoniyat!",
    rating: 5,
    avatar: "💇‍♀️",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mijozlarimiz fikrlari
          </h2>
          <p className="text-muted-foreground text-lg">
            Platformamizdan foydalanayotgan minglab insonlarning haqiqiy sharhlari
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              variant="elevated"
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
