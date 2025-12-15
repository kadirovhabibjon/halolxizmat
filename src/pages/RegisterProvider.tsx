import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Phone, User, MapPin, Banknote, FileText, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const RegisterProvider = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    profession: "",
    experience: "",
    price: "",
    location: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.profession) {
      toast.error("Iltimos, barcha majburiy maydonlarni to'ldiring");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    toast.success("Arizangiz qabul qilindi! Admin tekshiruvidan so'ng tasdiqlanadi.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 bg-muted/30">
        <div className="container max-w-2xl">
          <Card variant="elevated">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 rounded-2xl gradient-gold mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Usta bo'lib ro'yxatdan o'ting</CardTitle>
              <p className="text-muted-foreground">
                Ma'lumotlaringizni to'ldiring va buyurtmalar qabul qilishni boshlang
              </p>
            </CardHeader>

            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">To'liq ismingiz *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Ismingiz va familiyangiz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon raqam *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Profession */}
                <div className="space-y-2">
                  <Label htmlFor="profession">Kasb *</Label>
                  <Select 
                    value={formData.profession} 
                    onValueChange={(value) => setFormData({ ...formData, profession: value })}
                  >
                    <SelectTrigger>
                      <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Kasbingizni tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="santexnik">Santexnik</SelectItem>
                      <SelectItem value="sartarosh">Sartarosh</SelectItem>
                      <SelectItem value="repetitor">Repetitor</SelectItem>
                      <SelectItem value="elektrik">Elektrik</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience and Price */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Tajriba</Label>
                    <Select 
                      value={formData.experience} 
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 yildan kam</SelectItem>
                        <SelectItem value="1-3">1-3 yil</SelectItem>
                        <SelectItem value="3-5">3-5 yil</SelectItem>
                        <SelectItem value="5-10">5-10 yil</SelectItem>
                        <SelectItem value="10+">10+ yil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Taxminiy narx</Label>
                    <div className="relative">
                      <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="price"
                        placeholder="50,000 so'm"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Manzil</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="Toshkent, Chilonzor"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">O'zingiz haqingizda</Label>
                  <Textarea
                    id="description"
                    placeholder="Tajribangiz va ko'nikmalaringiz haqida qisqacha yozing..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                {/* Info Box */}
                <div className="bg-muted/50 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">Admin tekshiruvi</p>
                    <p>Arizangiz admin tomonidan tekshiriladi va tasdiqlanadi. Bu jarayon 24 soatgacha davom etishi mumkin.</p>
                  </div>
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  variant="gold" 
                  size="lg" 
                  className="w-full gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Yuborilmoqda..." : "Ariza yuborish"}
                  <FileText className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterProvider;
