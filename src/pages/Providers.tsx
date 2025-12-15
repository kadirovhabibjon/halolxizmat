import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, CheckCircle, Search, Filter, SlidersHorizontal } from "lucide-react";

const allProviders = [
  {
    id: 1,
    name: "Akmal Toshmatov",
    profession: "santexnik",
    professionLabel: "Santexnik",
    rating: 4.9,
    reviews: 128,
    experience: "8 yil",
    location: "Toshkent, Yunusobod",
    price: "50,000",
    verified: true,
    avatar: "👨‍🔧",
    description: "Professional santexnik xizmatlari. Tez va sifatli ish kafolatlanadi.",
  },
  {
    id: 2,
    name: "Nodira Karimova",
    profession: "sartarosh",
    professionLabel: "Sartarosh",
    rating: 4.8,
    reviews: 95,
    experience: "5 yil",
    location: "Toshkent, Chilonzor",
    price: "30,000",
    verified: true,
    avatar: "💇‍♀️",
    description: "Zamonaviy soch turmak usullari va professional yondashuv.",
  },
  {
    id: 3,
    name: "Jasur Rahimov",
    profession: "elektrik",
    professionLabel: "Elektrik",
    rating: 4.9,
    reviews: 156,
    experience: "10 yil",
    location: "Toshkent, Mirobod",
    price: "40,000",
    verified: true,
    avatar: "⚡",
    description: "Barcha turdagi elektr ishlari. Xavfsizlik birinchi o'rinda.",
  },
  {
    id: 4,
    name: "Dilnoza Umarova",
    profession: "repetitor",
    professionLabel: "Repetitor",
    rating: 5.0,
    reviews: 72,
    experience: "6 yil",
    location: "Toshkent, Sergeli",
    price: "80,000",
    verified: true,
    avatar: "📚",
    description: "Matematika va fizika bo'yicha tajribali o'qituvchi.",
  },
  {
    id: 5,
    name: "Sardor Alimov",
    profession: "santexnik",
    professionLabel: "Santexnik",
    rating: 4.7,
    reviews: 89,
    experience: "6 yil",
    location: "Toshkent, Yakkasaroy",
    price: "45,000",
    verified: true,
    avatar: "🔧",
    description: "Quvur va kran ta'mirlash bo'yicha mutaxassis.",
  },
  {
    id: 6,
    name: "Gulnora Tursunova",
    profession: "sartarosh",
    professionLabel: "Sartarosh",
    rating: 4.9,
    reviews: 112,
    experience: "8 yil",
    location: "Toshkent, Shayxontohur",
    price: "35,000",
    verified: true,
    avatar: "✨",
    description: "To'y va bayramlar uchun maxsus soch turmaklash.",
  },
];

const Providers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const filteredProviders = allProviders
    .filter((provider) => {
      const matchesSearch =
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.professionLabel.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === "all" || provider.profession === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      if (sortBy === "price") return parseInt(a.price.replace(/,/g, "")) - parseInt(b.price.replace(/,/g, ""));
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 bg-muted/30">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Barcha ustalar
            </h1>
            <p className="text-muted-foreground text-lg">
              Tasdiqlangan va tajribali ustalarni toping
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Usta qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Kategoriya" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha kategoriyalar</SelectItem>
                <SelectItem value="santexnik">Santexnik</SelectItem>
                <SelectItem value="sartarosh">Sartarosh</SelectItem>
                <SelectItem value="repetitor">Repetitor</SelectItem>
                <SelectItem value="elektrik">Elektrik</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Saralash" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Reyting bo'yicha</SelectItem>
                <SelectItem value="reviews">Sharhlar soni</SelectItem>
                <SelectItem value="price">Narx bo'yicha</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6 max-w-4xl mx-auto">
            {filteredProviders.length} ta usta topildi
          </p>

          {/* Providers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProviders.map((provider, index) => (
              <Card 
                key={provider.id}
                variant="interactive"
                className="overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-3xl">
                        {provider.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{provider.name}</h3>
                        <p className="text-sm text-primary font-medium">{provider.professionLabel}</p>
                        <p className="text-xs text-muted-foreground">{provider.experience} tajriba</p>
                      </div>
                    </div>
                    {provider.verified && (
                      <div className="flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                        <CheckCircle className="h-3 w-3" />
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {provider.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-primary fill-primary" />
                        <span className="font-semibold text-foreground">{provider.rating}</span>
                        <span className="text-sm text-muted-foreground">({provider.reviews} sharh)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {provider.location}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">Narx: </span>
                      <span className="font-semibold text-foreground">{provider.price} so'm</span>
                    </div>
                    <Link to={`/order?service=${provider.profession}&provider=${provider.id}`}>
                      <Button variant="gold" size="sm">
                        Tanlash
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Hech qanday usta topilmadi
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Providers;
