import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Users, Briefcase, ShoppingCart, DollarSign, TrendingUp,
  CheckCircle, XCircle, Clock, Search, Shield, Ban, Eye
} from "lucide-react";
import { toast } from "sonner";

const stats = [
  { label: "Jami buyurtmalar", value: "2,156", change: "+12%", icon: ShoppingCart },
  { label: "Faol ustalar", value: "512", change: "+8%", icon: Briefcase },
  { label: "Foydalanuvchilar", value: "4,890", change: "+15%", icon: Users },
  { label: "Umumiy daromad", value: "45.2M", change: "+22%", icon: DollarSign },
];

const pendingProviders = [
  { id: 1, name: "Sardor Alimov", profession: "Santexnik", phone: "+998 90 111 22 33", date: "2024-01-14" },
  { id: 2, name: "Nilufar Karimova", profession: "Sartarosh", phone: "+998 91 222 33 44", date: "2024-01-15" },
  { id: 3, name: "Jamshid Toshmatov", profession: "Elektrik", phone: "+998 93 333 44 55", date: "2024-01-15" },
];

const allProviders = [
  { id: 1, name: "Akmal Toshmatov", profession: "Santexnik", rating: 4.9, orders: 128, status: "active" },
  { id: 2, name: "Nodira Karimova", profession: "Sartarosh", rating: 4.8, orders: 95, status: "active" },
  { id: 3, name: "Jasur Rahimov", profession: "Elektrik", rating: 4.9, orders: 156, status: "active" },
  { id: 4, name: "Olim Saidov", profession: "Santexnik", rating: 3.5, orders: 23, status: "blocked" },
];

const recentOrders = [
  { id: 1, customer: "Aziza R.", provider: "Akmal T.", service: "Santexnik", amount: "50,000", status: "completed" },
  { id: 2, customer: "Bobur K.", provider: "Jasur R.", service: "Elektrik", amount: "40,000", status: "in_progress" },
  { id: 3, customer: "Kamola T.", provider: "-", service: "Sartarosh", amount: "30,000", status: "pending" },
];

const AdminDashboard = () => {
  const [providers, setProviders] = useState(pendingProviders);
  const [allProvidersList, setAllProvidersList] = useState(allProviders);
  const [searchQuery, setSearchQuery] = useState("");

  const handleApproveProvider = (id: number) => {
    setProviders(providers.filter(p => p.id !== id));
    toast.success("Usta tasdiqlandi!");
  };

  const handleRejectProvider = (id: number) => {
    setProviders(providers.filter(p => p.id !== id));
    toast.info("Ariza rad etildi");
  };

  const handleBlockProvider = (id: number) => {
    setAllProvidersList(allProvidersList.map(p => 
      p.id === id ? { ...p, status: p.status === "blocked" ? "active" : "blocked" } : p
    ));
    toast.success("Usta holati o'zgartirildi");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 bg-muted/30">
        <div className="container">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Admin paneli</h1>
              <p className="text-muted-foreground">Platformani boshqaring</p>
            </div>
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
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <div className="flex items-center gap-1 text-xs font-medium text-accent">
                      <TrendingUp className="h-3 w-3" />
                      {stat.change}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Pending Approvals */}
            <Card variant="elevated">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Tasdiqlanmagan ustalar
                </CardTitle>
                <Badge variant="secondary">{providers.length}</Badge>
              </CardHeader>
              <CardContent>
                {providers.length > 0 ? (
                  <div className="space-y-4">
                    {providers.map((provider) => (
                      <div key={provider.id} className="p-4 border border-border rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-foreground">{provider.name}</h4>
                            <p className="text-sm text-muted-foreground">{provider.profession}</p>
                            <p className="text-sm text-muted-foreground">{provider.phone}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              variant="gold" 
                              size="sm"
                              onClick={() => handleApproveProvider(provider.id)}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Tasdiqlash
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleRejectProvider(provider.id)}
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    Barcha arizalar ko'rib chiqilgan
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  So'nggi buyurtmalar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{order.service}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.customer} → {order.provider}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">{order.amount} so'm</p>
                        <Badge 
                          className={
                            order.status === "completed" 
                              ? "bg-accent/10 text-accent" 
                              : order.status === "in_progress"
                              ? "bg-blue-500/10 text-blue-600"
                              : "bg-yellow-500/10 text-yellow-600"
                          }
                        >
                          {order.status === "completed" ? "Bajarildi" : order.status === "in_progress" ? "Jarayonda" : "Kutilmoqda"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Providers */}
          <Card variant="elevated" className="mt-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Barcha ustalar
              </CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Qidirish..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Ism</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Kasb</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Reyting</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Buyurtmalar</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Holat</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Harakatlar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allProvidersList.map((provider) => (
                      <tr key={provider.id} className="border-b border-border last:border-0">
                        <td className="py-3 px-4 font-medium text-foreground">{provider.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{provider.profession}</td>
                        <td className="py-3 px-4">
                          <span className="flex items-center gap-1">
                            <span className="text-primary">★</span> {provider.rating}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{provider.orders}</td>
                        <td className="py-3 px-4">
                          <Badge 
                            className={
                              provider.status === "active" 
                                ? "bg-accent/10 text-accent" 
                                : "bg-destructive/10 text-destructive"
                            }
                          >
                            {provider.status === "active" ? "Faol" : "Bloklangan"}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleBlockProvider(provider.id)}
                            >
                              <Ban className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
