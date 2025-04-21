
import { useDatabase } from "../context/DatabaseContext";
import ActivityCard from "../components/ActivityCard";
import Layout from "../components/Layout";
import { AddLocationDialog } from "../components/AddLocationDialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useSupabase } from "../hooks/use-supabase";

const Index = () => {
  const { activities } = useDatabase();
  const { hasCredentials } = useSupabase();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-screen-xl mx-auto">
          <section className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 animate-fade-in">
                  Khám phá Sài Gòn
                </h1>
                <p className="text-gray-600 text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  Những trải nghiệm thú vị tại thành phố Hồ Chí Minh dành cho bạn
                </p>
              </div>
              
              <AddLocationDialog type="activity" />
            </div>

            {!hasCredentials() && (
              <Alert variant="destructive" className="mb-6 bg-amber-50 border-amber-200 text-amber-800">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Bạn cần tạo bảng "locations" trong Supabase để lưu trữ địa điểm mới. Các địa điểm mới sẽ không được lưu cho đến khi bảng được tạo.
                </AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
