import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, CheckCircle, ArrowRight } from "lucide-react";

const providers = [
  {
    id: 1,
    name: "Akmal Toshmatov",
    profession: "Santexnik",
    rating: 4.9,
    reviews: 128,
    experience: "8 yil",
    location: "Toshkent, Yunusobod",
    price: "50,000 so'mdan",
    verified: true,
    avatar: "👨‍🔧",
  },
  {
    id: 2,
    name: "Nodira Karimova",
    profession: "Sartarosh",
    rating: 4.8,
    reviews: 95,
    experience: "5 yil",
    location: "Toshkent, Chilonzor",
    price: "30,000 so'mdan",
    verified: true,
    avatar: "💇‍♀️",
  },
  {
    id: 3,
    name: "Jasur Rahimov",
    profession: "Elektrik",
    rating: 4.9,
    reviews: 156,
    experience: "10 yil",
    location: "Toshkent, Mirobod",
    price: "40,000 so'mdan",
    verified: true,
    avatar: "⚡",
  },
  {
    id: 4,
    name: "Dilnoza Umarova",
    profession: "Repetitor",
    rating: 5.0,
    reviews: 72,
    experience: "6 yil",
    location: "Toshkent, Sergeli",
    price: "80,000 so'mdan",
    verified: true,
    avatar: "📚",
  },
];

const FeaturedProviders = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Eng yaxshi ustalar
            </h2>
            <p className="text-muted-foreground text-lg">
              Tasdiqlangan va yuqori reytingli professional ustalar
            </p>
          </div>
          <Link to="/providers">
            <Button variant="outline-gold" className="gap-2">
              Barchasini ko'rish
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Providers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider, index) => (
            <Card 
              key={provider.id} 
              variant="interactive"
              className="overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="relative p-6 pb-4 border-b border-border">
                  {provider.verified && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                        <CheckCircle className="h-3 w-3" />
                        Tasdiqlangan
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-3xl">
                      {provider.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{provider.name}</h3>
                      <p className="text-sm text-primary font-medium">{provider.profession}</p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="font-semibold text-foreground">{provider.rating}</span>
                      <span className="text-sm text-muted-foreground">({provider.reviews})</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{provider.experience}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {provider.location}
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Narx: </span>
                      <span className="font-semibold text-foreground">{provider.price}</span>
                    </p>
                  </div>

                  <Link to={`/providers/${provider.id}`} className="block pt-2">
                    <Button variant="gold" className="w-full">
                      Buyurtma berish
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
