import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import OrderCreate from "./pages/OrderCreate";
import Providers from "./pages/Providers";
import Login from "./pages/Login";
import RegisterProvider from "./pages/RegisterProvider";
import HowItWorks from "./pages/HowItWorks";
import CustomerOrders from "./pages/customer/CustomerOrders";
import ProviderDashboard from "./pages/provider/ProviderDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/order" element={<OrderCreate />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/provider" element={<RegisterProvider />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/customer/orders" element={<CustomerOrders />} />
          <Route path="/provider/dashboard" element={<ProviderDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
