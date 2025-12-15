import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, ArrowRight, User, Briefcase, Shield } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<"customer" | "provider">("customer");

  const handleSendCode = async () => {
    if (!phone || phone.length < 9) {
      toast.error("To'g'ri telefon raqam kiriting");
      return;
    }
    
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStep("code");
    toast.success("Tasdiqlash kodi yuborildi");
  };

  const handleVerifyCode = async () => {
    if (!code || code.length < 4) {
      toast.error("To'g'ri kodni kiriting");
      return;
    }
    
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    
    toast.success("Muvaffaqiyatli kirdingiz!");
    if (userType === "customer") {
      navigate("/customer/orders");
    } else {
      navigate("/provider/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 bg-muted/30">
        <div className="container max-w-md">
          <Card variant="elevated">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 rounded-2xl gradient-gold mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Tizimga kirish</CardTitle>
              <p className="text-muted-foreground">
                Telefon raqamingiz orqali kiring
              </p>
            </CardHeader>

            <CardContent className="pt-6">
              {/* User Type Selection */}
              <Tabs value={userType} onValueChange={(v) => setUserType(v as "customer" | "provider")} className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="customer" className="gap-2">
                    <User className="h-4 w-4" />
                    Mijoz
                  </TabsTrigger>
                  <TabsTrigger value="provider" className="gap-2">
                    <Briefcase className="h-4 w-4" />
                    Usta
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {step === "phone" ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon raqam</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+998 90 123 45 67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Button 
                    variant="gold" 
                    className="w-full gap-2"
                    onClick={handleSendCode}
                    disabled={isLoading}
                  >
                    {isLoading ? "Yuborilmoqda..." : "Kod yuborish"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="code">Tasdiqlash kodi</Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="1234"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="text-center text-2xl tracking-widest"
                      maxLength={6}
                    />
                    <p className="text-sm text-muted-foreground text-center">
                      {phone} raqamiga yuborilgan kodni kiriting
                    </p>
                  </div>

                  <Button 
                    variant="gold" 
                    className="w-full gap-2"
                    onClick={handleVerifyCode}
                    disabled={isLoading}
                  >
                    {isLoading ? "Tekshirilmoqda..." : "Tasdiqlash"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => setStep("phone")}
                  >
                    Raqamni o'zgartirish
                  </Button>
                </div>
              )}

              {/* Register Link */}
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Hali ro'yxatdan o'tmaganmisiz?
                </p>
                <Link to="/register/provider">
                  <Button variant="outline-gold" className="gap-2">
                    <Briefcase className="h-4 w-4" />
                    Usta sifatida ro'yxatdan o'tish
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
