import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Locations from "./pages/Locations";
import Login from "./pages/Login";
import BookingConfirmation from "./pages/BookingConfirmation";
import UserDashboard from "./pages/UserDashboard";
import ShopDashboard from "./pages/ShopDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/dich-vu" element={<Services />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/dia-diem" element={<Locations />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/dich-vu/:id" element={<ServiceDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/booking-confirmation" element={<BookingConfirmation />} />
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/shop-dashboard" element={<ShopDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;