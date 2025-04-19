
import { useState } from "react";
import { getTrendingLocations } from "../services/openai";
import { useToast } from "@/hooks/use-toast";

interface AIAssistantProps {
  type: "activity" | "food";
  itemName: string;
  districtName?: string;
}

const AIAssistant = ({ type, itemName, districtName }: AIAssistantProps) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchTrendingPlaces = async () => {
    setLoading(true);
    setError(null);
    try {
      let prompt = "";
      
      if (type === "activity") {
        prompt = `List 5 địa điểm "${itemName}" nổi tiếng và đang hot ở TP.HCM. Hãy cho tôi tên địa điểm cụ thể, địa chỉ chính xác, số điện thoại (nếu có), và một mô tả ngắn về đặc điểm nổi bật của địa điểm. Chỉ liệt kê tối đa 5 địa điểm phù hợp nhất với hoạt động "${itemName}".`;
      } else {
        prompt = `List 5 quán "${itemName}" ngon và nổi tiếng ở ${districtName}, TP.HCM, đặc biệt là khu vực đường Nguyễn Gia Trí (D2) nếu có. Hãy cho tôi tên quán cụ thể, địa chỉ chính xác, số điện thoại (nếu có), và đặc sản hay món nổi bật nhất của quán. Chỉ liệt kê tối đa 5 địa điểm phù hợp nhất với món "${itemName}" tại ${districtName}.`;
      }

      const result = await getTrendingLocations(prompt);
      setResponse(result);
    } catch (err: any) {
      console.error("Error fetching from OpenAI:", err);
      
      // Hiển thị lỗi trong toast
      toast({
        title: "Lỗi khi gọi AI Assistant",
        description: "Hiện tại API gặp vấn đề. Đang hiển thị dữ liệu mẫu thay thế.",
        variant: "destructive"
      });
      
      setError("API OpenAI đã hết quota. Vui lòng sử dụng danh sách có sẵn hoặc thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 bg-gray-50 rounded-lg p-4 border">
      <h3 className="text-lg font-semibold mb-2">AI Trợ lý</h3>
      
      <button
        onClick={fetchTrendingPlaces}
        disabled={loading}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
      >
        {loading ? "Đang tìm kiếm..." : `Tìm địa điểm ${type === "activity" ? itemName : itemName + " tại " + districtName} đang hot`}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {response && (
        <div className="mt-4 p-4 bg-white border rounded-md">
          <h4 className="font-medium mb-2">Kết quả từ AI:</h4>
          <div className="text-gray-700 whitespace-pre-line">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
