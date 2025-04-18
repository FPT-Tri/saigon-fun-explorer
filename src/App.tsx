import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DatabaseProvider } from "./context/DatabaseContext";
import Index from "./pages/Index";
import ActivityDetail from "./pages/ActivityDetail";
import DistrictList from "./pages/DistrictList";
import DistrictDetail from "./pages/DistrictDetail";
import FoodDetail from "./pages/FoodDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DatabaseProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/activity/:id" element={<ActivityDetail />} />
            <Route path="/districts" element={<DistrictList />} />
            <Route path="/district/:id" element={<DistrictDetail />} />
            <Route path="/district/:districtId/food/:foodId" element={<FoodDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </DatabaseProvider>
  </QueryClientProvider>
);

export default App;
