import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="h-4 w-4" />
              Ishonchli va halol xizmat
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Sifatli xizmat –{" "}
              <span className="text-gradient-gold">bir tugma</span> orqali
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Santexnik, sartarosh, repetitor yoki elektrik kerakmi? Eng yaqin va ishonchli ustalarni toping. 
              Buyurtma bering, baholang va xotirjam bo'ling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Xizmat buyurtma qilish
                  <ArrowRight className="h-5 w-5 ml-1" />
                </Button>
              </Link>
              <Link to="/register/provider">
                <Button variant="outline-gold" size="xl" className="w-full sm:w-auto">
                  Usta bo'lib ishlash
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Faol ustalar</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4.8</p>
                  <p className="text-sm text-muted-foreground">O'rtacha baho</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2000+</p>
                  <p className="text-sm text-muted-foreground">Bajarilgan ishlar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-card rounded-3xl shadow-floating p-8 border border-border/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center">
                        <span className="text-2xl">🔧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Santexnik xizmati</h3>
                        <p className="text-sm text-muted-foreground">5 daqiqada javob</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-3 px-4 bg-muted/50 rounded-xl">
                        <span className="text-sm text-muted-foreground">Usta topildi</span>
                        <span className="text-sm font-medium text-accent">✓ Faol</span>
                      </div>
                      <div className="flex items-center justify-between py-3 px-4 bg-muted/50 rounded-xl">
                        <span className="text-sm text-muted-foreground">Reyting</span>
                        <span className="text-sm font-medium text-primary">★ 4.9</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg text-sm font-medium animate-pulse-slow">
                    Tasdiqlangan ✓
                  </div>

                  {/* Bottom Card */}
                  <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-elevated p-4 border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span>👨‍🔧</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Akmal usta</p>
                        <p className="text-xs text-muted-foreground">Yo'lda • 15 daqiqa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
