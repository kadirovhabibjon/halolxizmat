import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, UserCheck, CheckCircle, Star, Shield, Clock, CreditCard, Headphones, ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Xizmat turini tanlang",
    description: "Santexnik, sartarosh, repetitor yoki elektrik - kerakli xizmat turini tanlang va muammongizni batafsil tasvirlang.",
  },
  {
    step: 2,
    icon: UserCheck,
    title: "Usta tanlang",
    description: "Tasdiqlangan ustalar ro'yxatidan reytinglar va sharhlar asosida o'zingizga mos ustani tanlang.",
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Buyurtma bering",
    description: "Manzil, qulay vaqt va muammo tavsifini kiritib buyurtma yuboring. Usta sizning buyurtmangizni qabul qiladi.",
  },
  {
    step: 4,
    icon: Star,
    title: "Baholang va sharh qoldiring",
    description: "Ish tugagach, ustaning xizmatini baholang. Bu boshqa mijozlarga yordam beradi.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Ishonchli ustalar",
    description: "Barcha ustalar admin tomonidan tekshirilgan va tasdiqlangan",
  },
  {
    icon: Clock,
    title: "Tezkor javob",
    description: "Ustalar 5-15 daqiqa ichida buyurtmangizga javob beradi",
  },
  {
    icon: CreditCard,
    title: "Shaffof narxlar",
    description: "Narxlar oldindan ma'lum, yashirin to'lovlar yo'q",
  },
  {
    icon: Headphones,
    title: "24/7 qo'llab-quvvatlash",
    description: "Har qanday muammo bo'lsa, biz yordam berishga tayyormiz",
  },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Platforma qanday ishlaydi?
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Faqat 4 ta oddiy qadam orqali sifatli xizmat oling. Hech qanday murakkablik yo'q!
            </p>
            <Link to="/services">
              <Button variant="gold" size="xl" className="gap-2">
                Hoziroq boshlang
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {steps.map((item, index) => (
                <div 
                  key={item.step} 
                  className="relative flex gap-8 pb-12 last:pb-0 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-border" />
                  )}
                  
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center shadow-gold">
                      <item.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
                      <span className="text-sm font-bold text-background">{item.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Nima uchun bizni tanlashingiz kerak?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title} 
                  variant="elevated"
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Tayyor boshlashga?
              </h2>
              <p className="text-muted-foreground mb-8">
                Hoziroq ro'yxatdan o'ting va sifatli xizmatdan foydalaning
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    Xizmat buyurtma qilish
                  </Button>
                </Link>
                <Link to="/register/provider">
                  <Button variant="outline-gold" size="lg" className="w-full sm:w-auto">
                    Usta bo'lish
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
