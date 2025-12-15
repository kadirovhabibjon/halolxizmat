import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, CheckCircle, XCircle, Star, MapPin, Phone, Calendar, 
  DollarSign, TrendingUp, Users, Briefcase, Check, X 
} from "lucide-react";
import { toast } from "sonner";

const mockOrders = [
  {
    id: 1,
    service: "Santexnik",
    description: "Hammomda quvur oqyapti, tezda tuzatish kerak",
    status: "pending",
    date: "2024-01-15",
    time: "09:00 - 12:00",
    address: "Toshkent, Yunusobod, 4-mavze",
    customer: { name: "Aziza Rahimova", phone: "+998 90 111 22 33" },
  },
  {
    id: 2,
    service: "Santexnik",
    description: "Oshxonada kran oqyapti",
    status: "pending",
    date: "2024-01-15",
    time: "15:00 - 18:00",
    address: "Toshkent, Chilonzor, 12-mavze",
    customer: { name: "Bobur Kamolov", phone: "+998 91 222 33 44" },
  },
  {
    id: 3,
    service: "Santexnik",
    description: "Suv isitgich o'rnatish kerak",
    status: "accepted",
    date: "2024-01-16",
    time: "09:00 - 12:00",
    address: "Toshkent, Sergeli, 5-mavze",
    customer: { name: "Kamola Tursunova", phone: "+998 93 333 44 55" },
  },
];

const stats = [
  { label: "Jami buyurtmalar", value: "156", icon: Briefcase, color: "text-primary" },
  { label: "Bu oylik daromad", value: "2.5M", icon: DollarSign, color: "text-accent" },
  { label: "Reyting", value: "4.9", icon: Star, color: "text-primary" },
  { label: "Takroriy mijozlar", value: "45%", icon: TrendingUp, color: "text-secondary" },
];

const statusConfig = {
  pending: { label: "Yangi", color: "bg-yellow-500/10 text-yellow-600", icon: Clock },
  accepted: { label: "Qabul qilindi", color: "bg-blue-500/10 text-blue-600", icon: CheckCircle },
  completed: { label: "Bajarildi", color: "bg-accent/10 text-accent", icon: CheckCircle },
  cancelled: { label: "Bekor qilindi", color: "bg-destructive/10 text-destructive", icon: XCircle },
};

const ProviderDashboard = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [activeTab, setActiveTab] = useState("pending");

  const handleAcceptOrder = (orderId: number) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: "accepted" } : order
    ));
    toast.success("Buyurtma qabul qilindi!");
  };

  const handleRejectOrder = (orderId: number) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: "cancelled" } : order
    ));
    toast.info("Buyurtma rad etildi");
  };

  const handleCompleteOrder = (orderId: number) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: "completed" } : order
    ));
    toast.success("Buyurtma yakunlandi!");
  };

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "all") return true;
    return order.status === activeTab;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 bg-muted/30">
        <div className="container">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Usta paneli</h1>
            <p className="text-muted-foreground">Buyurtmalarni boshqaring va statistikani ko'ring</p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                variant="elevated"
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Orders Section */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Buyurtmalar</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList>
                  <TabsTrigger value="pending" className="gap-2">
                    Yangi
                    <Badge variant="secondary" className="ml-1">
                      {orders.filter(o => o.status === "pending").length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="accepted">Qabul qilingan</TabsTrigger>
                  <TabsTrigger value="completed">Bajarilgan</TabsTrigger>
                  <TabsTrigger value="all">Barchasi</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Orders List */}
              <div className="space-y-4">
                {filteredOrders.map((order, index) => {
                  const status = statusConfig[order.status as keyof typeof statusConfig];
                  const StatusIcon = status.icon;

                  return (
                    <div 
                      key={order.id}
                      className="p-4 border border-border rounded-xl animate-slide-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        {/* Main Info */}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-3">
                            <h3 className="font-semibold text-foreground">{order.service}</h3>
                            <Badge className={status.color}>
                              <StatusIcon className="h-3 w-3 mr-1" />
                              {status.label}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground text-sm">{order.description}</p>
                          
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

                          <div className="flex items-center gap-2 pt-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-foreground">{order.customer.name}</span>
                            <span className="text-sm text-muted-foreground">{order.customer.phone}</span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          {order.status === "pending" && (
                            <>
                              <Button 
                                variant="gold" 
                                size="sm" 
                                className="gap-1"
                                onClick={() => handleAcceptOrder(order.id)}
                              >
                                <Check className="h-4 w-4" />
                                Qabul qilish
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="gap-1"
                                onClick={() => handleRejectOrder(order.id)}
                              >
                                <X className="h-4 w-4" />
                                Rad etish
                              </Button>
                            </>
                          )}
                          {order.status === "accepted" && (
                            <>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="gap-1"
                              >
                                <Phone className="h-4 w-4" />
                                Qo'ng'iroq
                              </Button>
                              <Button 
                                variant="gold" 
                                size="sm"
                                onClick={() => handleCompleteOrder(order.id)}
                              >
                                Yakunlash
                              </Button>
                            </>
                          )}
                          {order.status === "completed" && (
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredOrders.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Bu toifada buyurtmalar yo'q</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProviderDashboard;
