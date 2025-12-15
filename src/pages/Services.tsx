import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Droplets, Scissors, GraduationCap, Zap, Search, ArrowRight, Filter } from "lucide-react";

const services = [
  {
    id: "santexnik",
    title: "Santexnik",
    description: "Quvur tuzatish, o'rnatish, kran va unitaz ta'mirlash",
    icon: Droplets,
    color: "bg-blue-500/10 text-blue-600",
    iconBg: "bg-blue-500",
    count: 120,
    subServices: ["Quvur tuzatish", "Kran o'rnatish", "Unitaz ta'mirlash", "Suv isitgich o'rnatish"],
  },
  {
    id: "sartarosh",
    title: "Sartarosh",
    description: "Professional soch turmaklash, ranglaash va go'zallik xizmatlari",
    icon: Scissors,
    color: "bg-pink-500/10 text-pink-600",
    iconBg: "bg-pink-500",
    count: 85,
    subServices: ["Erkaklar sochini olish", "Ayollar sochini olish", "Soch bo'yash", "Manikür"],
  },
  {
    id: "repetitor",
    title: "Repetitor",
    description: "Matematika, tillar, fizika va boshqa fanlardan shaxsiy darslar",
    icon: GraduationCap,
    color: "bg-emerald/10 text-emerald",
    iconBg: "bg-emerald",
    count: 200,
    subServices: ["Matematika", "Ingliz tili", "Rus tili", "Fizika", "Kimyo"],
  },
  {
    id: "elektrik",
    title: "Elektrik",
    description: "Elektr simlarini o'rnatish, tuzatish va xavfsizlik tekshiruvi",
    icon: Zap,
    color: "bg-primary/10 text-primary",
    iconBg: "bg-primary",
    count: 95,
    subServices: ["Rozetka o'rnatish", "Simlarni almashtirish", "Chiroq o'rnatish", "Elektr paneli"],
  },
];

const Services = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 bg-muted/30">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Xizmat turlarini tanlang
            </h1>
            <p className="text-muted-foreground text-lg">
              Kerakli xizmat turini tanlang va buyurtma berish sahifasiga o'ting
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Xizmat turini qidiring..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg rounded-xl border-border bg-background"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredServices.map((service, index) => (
              <Card 
                key={service.id}
                variant={selectedCategory === service.id ? "gold" : "interactive"}
                className="overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                        <span className="text-sm text-muted-foreground">{service.count}+ usta</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      {/* Sub-services */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.subServices.map((sub) => (
                          <span
                            key={sub}
                            className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>

                      <Link to={`/order?service=${service.id}`}>
                        <Button variant="gold" className="w-full gap-2">
                          Buyurtma berish
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                "{searchQuery}" bo'yicha hech narsa topilmadi
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
