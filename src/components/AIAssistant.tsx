
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
        prompt = `Hãy gợi ý 5 địa điểm "${itemName}" nổi tiếng, chất lượng và đang được ưa chuộng ở TP.HCM. Với mỗi địa điểm, hãy cung cấp:
- Tên địa điểm chính xác
- Địa chỉ đầy đủ
- Số điện thoại liên hệ (nếu có)
- Giờ hoạt động (nếu có)
- Giá cả tham khảo
- Đặc điểm nổi bật và lý do nên trải nghiệm
- Đánh giá và review từ khách hàng (nếu có)
Chỉ liệt kê tối đa 5 địa điểm phù hợp nhất với hoạt động "${itemName}", sắp xếp theo mức độ phổ biến và chất lượng.`;
      } else {
        prompt = `Hãy gợi ý 5 quán "${itemName}" ngon, nổi tiếng và được đánh giá cao ở ${districtName}, TP.HCM. Với mỗi quán, hãy cung cấp:
- Tên quán đầy đủ
- Địa chỉ chi tiết
- Số điện thoại liên hệ (nếu có)
- Giờ mở cửa (nếu có)
- Khoảng giá
- Các món đặc trưng và best-seller
- Không gian và phong cách phục vụ
- Review và đánh giá từ thực khách (nếu có)
Chỉ liệt kê tối đa 5 quán phù hợp nhất với món "${itemName}" tại ${districtName}, ưu tiên các quán có nhiều review tích cực và được khuyến nghị bởi food blogger.`;
      }

      const result = await getTrendingLocations(prompt);
      setResponse(result);
    } catch (err: any) {
      console.error("Error fetching from OpenAI:", err);
      
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
        {loading ? "Đang tìm kiếm..." : `Gợi ý thêm địa điểm ${type === "activity" ? itemName : itemName + " tại " + districtName} phổ biến`}
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
