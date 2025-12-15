import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Customers */}
          <div className="relative overflow-hidden rounded-3xl gradient-gold p-8 md:p-12 shadow-gold">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Xizmat kerakmi?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-sm">
                Eng yaqin tasdiqlangan ustalarni toping va bir necha daqiqada buyurtma bering
              </p>
              <Link to="/services">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold gap-2"
                >
                  Buyurtma berish
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* For Providers */}
          <div className="relative overflow-hidden rounded-3xl gradient-teal p-8 md:p-12 shadow-elevated">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
                Usta bo'lib ishlang
              </h3>
              <p className="text-secondary-foreground/80 mb-6 max-w-sm">
                Ro'yxatdan o'ting, buyurtmalar qabul qiling va daromad toping
              </p>
              <Link to="/register/provider">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-secondary hover:bg-white/90 font-semibold gap-2"
                >
                  Ro'yxatdan o'tish
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
