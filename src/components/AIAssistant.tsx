
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
        prompt = `List các địa điểm ${itemName} mới và đang hot ở TP.HCM. Hãy cho tôi tên địa điểm, địa chỉ, số điện thoại (nếu có), và một mô tả ngắn. Liệt kê tối đa 5 địa điểm.`;
      } else {
        prompt = `List các quán ${itemName} ngon và đang hot ở ${districtName}, TP.HCM. Hãy cho tôi tên quán, địa chỉ, số điện thoại (nếu có), và đặc sản. Liệt kê tối đa 5 địa điểm.`;
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
