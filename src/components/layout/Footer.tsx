import { Link } from "react-router-dom";
import { Wrench, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-gold">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                Halol<span className="text-primary">Xizmat</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              O'zbekistonda ishonchli xizmat ko'rsatish platformasi. Sifatli va halol xizmat - bizning ustuvorligimiz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2">
              {[
                { path: "/services", label: "Xizmatlar" },
                { path: "/providers", label: "Ustalar" },
                { path: "/how-it-works", label: "Qanday ishlaydi" },
                { path: "/register/provider", label: "Usta bo'lish" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Xizmat turlari</h4>
            <ul className="space-y-2">
              {["Santexnik", "Sartarosh", "Repetitor", "Elektrik"].map((service) => (
                <li key={service}>
                  <Link
                    to={`/services?category=${service.toLowerCase()}`}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Bog'lanish</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 text-primary" />
                +998 90 123 45 67
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 text-primary" />
                info@halolxizmat.uz
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 text-primary" />
                Toshkent, O'zbekiston
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <MessageCircle className="h-4 w-4 text-primary" />
                @halolxizmat_bot
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2024 HalolXizmat. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-background/50 hover:text-primary transition-colors">
              Maxfiylik siyosati
            </Link>
            <Link to="/terms" className="text-sm text-background/50 hover:text-primary transition-colors">
              Foydalanish shartlari
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
