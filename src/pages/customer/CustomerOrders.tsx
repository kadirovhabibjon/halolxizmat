import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CheckCircle, XCircle, Star, MapPin, Phone, Plus, Calendar } from "lucide-react";

const mockOrders = [
  {
    id: 1,
    service: "Santexnik",
    description: "Hammomda quvur oqyapti, tezda tuzatish kerak",
    status: "pending",
    date: "2024-01-15",
    time: "09:00 - 12:00",
    address: "Toshkent, Yunusobod, 4-mavze",
    provider: null,
    price: null,
  },
  {
    id: 2,
    service: "Elektrik",
    description: "Rozetka ishlamayapti, tekshirish va tuzatish kerak",
    status: "accepted",
    date: "2024-01-16",
    time: "15:00 - 18:00",
    address: "Toshkent, Chilonzor, 7-mavze",
    provider: { name: "Jasur Rahimov", phone: "+998 90 123 45 67", avatar: "⚡" },
    price: "40,000 so'm",
  },
  {
    id: 3,
    service: "Sartarosh",
    description: "Erkaklar sochini olish",
    status: "completed",
    date: "2024-01-10",
    time: "12:00 - 15:00",
    address: "Toshkent, Mirobod",
    provider: { name: "Olim Saidov", phone: "+998 91 234 56 78", avatar: "✂️" },
    price: "30,000 so'm",
    rating: 5,
  },
];

const statusConfig = {
  pending: { label: "Kutilmoqda", color: "bg-yellow-500/10 text-yellow-600", icon: Clock },
  accepted: { label: "Qabul qilindi", color: "bg-blue-500/10 text-blue-600", icon: CheckCircle },
  completed: { label: "Bajarildi", color: "bg-accent/10 text-accent", icon: CheckCircle },
  cancelled: { label: "Bekor qilindi", color: "bg-destructive/10 text-destructive", icon: XCircle },
};

const CustomerOrders = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredOrders = mockOrders.filter((order) => {
    if (activeTab === "all") return true;
    return order.status === activeTab;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 bg-muted/30">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Mening buyurtmalarim</h1>
              <p className="text-muted-foreground">Barcha buyurtmalaringizni kuzatib boring</p>
            </div>
            <Link to="/services">
              <Button variant="gold" className="gap-2">
                <Plus className="h-4 w-4" />
                Yangi buyurtma
              </Button>
            </Link>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList>
              <TabsTrigger value="all">Barchasi</TabsTrigger>
              <TabsTrigger value="pending">Kutilmoqda</TabsTrigger>
              <TabsTrigger value="accepted">Qabul qilindi</TabsTrigger>
              <TabsTrigger value="completed">Bajarildi</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Orders List */}
          <div className="space-y-4">
            {filteredOrders.map((order, index) => {
              const status = statusConfig[order.status as keyof typeof statusConfig];
              const StatusIcon = status.icon;

              return (
                <Card 
                  key={order.id} 
                  variant="elevated"
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Main Info */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-lg text-foreground">{order.service}</h3>
                          <Badge className={status.color}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {status.label}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground">{order.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {order.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {order.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {order.address}
                          </span>
                        </div>
                      </div>

                      {/* Provider Info or Actions */}
                      {order.provider ? (
                        <div className="lg:text-right space-y-2">
                          <div className="flex items-center gap-3 lg:justify-end">
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
                              {order.provider.avatar}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{order.provider.name}</p>
                              <p className="text-sm text-muted-foreground">{order.provider.phone}</p>
                            </div>
                          </div>
                          {order.price && (
                            <p className="text-lg font-semibold text-foreground">{order.price}</p>
                          )}
                          {order.status === "completed" && (
                            <div className="flex items-center gap-1 lg:justify-end">
                              {[...Array(order.rating || 0)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                              ))}
                            </div>
                          )}
                          {order.status === "accepted" && (
                            <Button variant="outline" size="sm" className="gap-2">
                              <Phone className="h-4 w-4" />
                              Qo'ng'iroq qilish
                            </Button>
                          )}
                        </div>
                      ) : (
                        <div className="text-sm text-muted-foreground lg:text-right">
                          <p>Usta izlanmoqda...</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredOrders.length === 0 && (
            <Card variant="elevated" className="py-12">
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Bu toifada buyurtmalar yo'q</p>
                <Link to="/services">
                  <Button variant="gold">Buyurtma berish</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerOrders;
