import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Scissors, GraduationCap, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    id: "santexnik",
    title: "Santexnik",
    description: "Quvur tuzatish, o'rnatish va ta'mirlash xizmatlari",
    icon: Droplets,
    color: "bg-blue-500/10 text-blue-600",
    iconBg: "bg-blue-500/20",
    count: "120+ usta",
  },
  {
    id: "sartarosh",
    title: "Sartarosh",
    description: "Professional sartaroshlik va go'zallik xizmatlari",
    icon: Scissors,
    color: "bg-pink-500/10 text-pink-600",
    iconBg: "bg-pink-500/20",
    count: "85+ usta",
  },
  {
    id: "repetitor",
    title: "Repetitor",
    description: "Matematika, tillar va boshqa fanlardan darslar",
    icon: GraduationCap,
    color: "bg-emerald/10 text-emerald",
    iconBg: "bg-emerald/20",
    count: "200+ o'qituvchi",
  },
  {
    id: "elektrik",
    title: "Elektrik",
    description: "Elektr tarmog'ini o'rnatish va ta'mirlash",
    icon: Zap,
    color: "bg-primary/10 text-primary",
    iconBg: "bg-primary/20",
    count: "95+ usta",
  },
];

const ServiceCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Xizmat turlarini tanlang
          </h2>
          <p className="text-muted-foreground text-lg">
            Kerakli xizmat turini tanlang va eng yaqin tasdiqlangan ustalarni toping
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              key={service.id} 
              to={`/services?category=${service.id}`}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card variant="interactive" className="h-full">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-7 w-7 ${service.color.split(' ')[1]}`} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {service.count}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Barcha xizmatlarni ko'rish
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
