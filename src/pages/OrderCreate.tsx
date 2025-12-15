import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Image, ArrowLeft, Send, Droplets, Scissors, GraduationCap, Zap } from "lucide-react";
import { toast } from "sonner";

const serviceIcons: Record<string, typeof Droplets> = {
  santexnik: Droplets,
  sartarosh: Scissors,
  repetitor: GraduationCap,
  elektrik: Zap,
};

const serviceNames: Record<string, string> = {
  santexnik: "Santexnik",
  sartarosh: "Sartarosh",
  repetitor: "Repetitor",
  elektrik: "Elektrik",
};

const OrderCreate = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceType = searchParams.get("service") || "santexnik";
  
  const [formData, setFormData] = useState({
    description: "",
    address: "",
    date: "",
    time: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ServiceIcon = serviceIcons[serviceType] || Droplets;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.description || !formData.address || !formData.phone) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Buyurtmangiz muvaffaqiyatli yuborildi!");
    navigate("/customer/orders");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 bg-muted/30">
        <div className="container max-w-2xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-6 gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Orqaga
          </Button>

          <Card variant="elevated">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 rounded-2xl gradient-gold mx-auto mb-4 flex items-center justify-center">
                <ServiceIcon className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">
                {serviceNames[serviceType]} buyurtmasi
              </CardTitle>
              <p className="text-muted-foreground">
                Muammongizni tasvirlab, manzil va vaqtni kiriting
              </p>
            </CardHeader>

            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Muammo tavsifi *</Label>
                  <Textarea
                    id="description"
                    placeholder="Muammongizni batafsil tasvirlab bering..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="resize-none"
                  />
                </div>

                {/* Image Upload Placeholder */}
                <div className="space-y-2">
                  <Label>Rasm (ixtiyoriy)</Label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Image className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Rasm yuklash uchun bosing yoki tortib tashlang
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address">Manzil *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="address"
                      placeholder="To'liq manzilingizni kiriting"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Sana</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Vaqt</Label>
                    <Select 
                      value={formData.time} 
                      onValueChange={(value) => setFormData({ ...formData, time: value })}
                    >
                      <SelectTrigger>
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 - 12:00</SelectItem>
                        <SelectItem value="12:00">12:00 - 15:00</SelectItem>
                        <SelectItem value="15:00">15:00 - 18:00</SelectItem>
                        <SelectItem value="18:00">18:00 - 21:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon raqam *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  variant="gold" 
                  size="lg" 
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Yuborilmoqda..."
                  ) : (
                    <>
                      Buyurtmani yuborish
                      <Send className="h-4 w-4" />
                    </>
                  )}
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

export default OrderCreate;
