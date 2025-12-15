import { Search, UserCheck, Star, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Xizmat tanlang",
    description: "Kerakli xizmat turini tanlang va muammongizni tasvirlab bering",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    step: 2,
    icon: UserCheck,
    title: "Usta tanlang",
    description: "Tasdiqlangan ustalar ro'yxatidan reyting va sharhlar asosida tanlang",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Ish bajarilsin",
    description: "Usta sizning manzilingizga kelib, ishni sifatli bajaradi",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    step: 4,
    icon: Star,
    title: "Baholang",
    description: "Ish tugagach, usta xizmatini baholang va izoh qoldiring",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Qanday ishlaydi?
          </h2>
          <p className="text-muted-foreground text-lg">
            Faqat 4 ta oddiy qadam orqali sifatli xizmat oling
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div 
              key={item.step} 
              className="relative text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}

              {/* Step Number */}
              <div className="relative z-10 mb-6">
                <div className={`w-24 h-24 mx-auto rounded-3xl ${item.bgColor} flex items-center justify-center shadow-soft`}>
                  <item.icon className={`h-10 w-10 ${item.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-gold flex items-center justify-center shadow-gold">
                  <span className="text-sm font-bold text-primary-foreground">{item.step}</span>
                </div>
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
