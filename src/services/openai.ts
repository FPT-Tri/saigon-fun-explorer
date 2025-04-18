
// OpenAI integration
// Using a mock response for trending locations since the API key has reached its quota
// This avoids API calls and quota issues

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const getTrendingLocations = async (prompt: string): Promise<string> => {
  try {
    // Instead of making an API call, return mock data based on the prompt
    const mockResponses: Record<string, string> = {
      default: `Dưới đây là 5 địa điểm đang hot ở TP.HCM:

1. **Phố Đi Bộ Nguyễn Huệ**
   - Địa chỉ: Đường Nguyễn Huệ, Quận 1, TP.HCM
   - Mô tả: Khu vực đi bộ sầm uất với nhiều hoạt động văn hóa, nghệ thuật và ẩm thực.

2. **The Factory Contemporary Arts Centre**
   - Địa chỉ: 15 Nguyễn Ư Dĩ, Thảo Điền, Quận 2, TP.HCM
   - Số điện thoại: 028 3744 2589
   - Mô tả: Trung tâm nghệ thuật đương đại lớn nhất Việt Nam với các triển lãm thường xuyên.

3. **Landmark 81 Skyview**
   - Địa chỉ: 720A Điện Biên Phủ, Phường 22, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3969 8888
   - Mô tả: Đài quan sát trên tòa nhà cao nhất Việt Nam, mang đến tầm nhìn 360 độ của TP.HCM.

4. **The Box Market**
   - Địa chỉ: 22-24 Lý Tự Trọng, Phường Bến Nghé, Quận 1, TP.HCM
   - Mô tả: Chợ container với nhiều cửa hàng thời trang, phụ kiện và đồ ăn vặt.

5. **Phố Nhật Bản (Little Japan)**
   - Địa chỉ: Khu vực Lê Thánh Tôn, Quận 1, TP.HCM
   - Mô tả: Khu phố với nhiều nhà hàng Nhật Bản, quán bar và cửa hàng đặc sản Nhật.`,
    };

    // Return specific response if it exists, otherwise return the default
    if (prompt.toLowerCase().includes("karaoke")) {
      return `Dưới đây là 5 quán Karaoke Music Box đang hot ở TP.HCM:

1. **Music Box Phan Xích Long**
   - Địa chỉ: 234 Phan Xích Long, Phường 2, Phú Nhuận, TP.HCM
   - Số điện thoại: 028 3844 5678
   - Mô tả: Karaoke hiện đại với phòng cách âm chuẩn, hệ thống âm thanh chất lượng cao và menu đồ ăn đa dạng.

2. **K-Box Music Studio**
   - Địa chỉ: 45 Huỳnh Khương An, Phường 5, Gò Vấp, TP.HCM
   - Số điện thoại: 028 3894 3456
   - Mô tả: Phòng karaoke phong cách Hàn Quốc với giá sinh viên và nhiều chương trình khuyến mãi.

3. **The Voice Karaoke Lounge**
   - Địa chỉ: 123 Nguyễn Đình Chiểu, Phường 5, Quận 3, TP.HCM
   - Số điện thoại: 028 3833 7890
   - Mô tả: Karaoke cao cấp với không gian sang trọng, thích hợp cho các buổi họp mặt và tiệc nhóm.

4. **Melody Box Thảo Điền**
   - Địa chỉ: 47 Thảo Điền, Quận 2, TP.HCM
   - Số điện thoại: 028 3744 9876
   - Mô tả: Karaoke phong cách boutique với các phòng themed độc đáo và hệ thống bài hát cập nhật thường xuyên.

5. **Icool Karaoke D2**
   - Địa chỉ: 188 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 4455
   - Mô tả: Karaoke hiện đại với không gian rộng rãi, giá cả phải chăng và nhân viên thân thiện.`;
    } else if (prompt.toLowerCase().includes("cafe") || prompt.toLowerCase().includes("cà phê")) {
      return `Dưới đây là 5 quán cafe đang hot ở khu vực bạn quan tâm:

1. **The Running Bean D2**
   - Địa chỉ: 156 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 9999
   - Mô tả: Quán cafe phong cách industrial với không gian xanh mát, phù hợp để làm việc và học tập.

2. **Cheese Coffee D2**
   - Địa chỉ: 200 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 6666
   - Mô tả: Cafe phong cách Hàn Quốc với các loại bánh ngọt handmade và đồ uống đặc biệt.

3. **The Coffee House D2**
   - Địa chỉ: 278 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 3333
   - Mô tả: Quán cafe chuỗi quen thuộc với không gian rộng rãi, thích hợp cho làm việc nhóm và gặp gỡ bạn bè.

4. **Oromia Coffee**
   - Địa chỉ: 123 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 8765
   - Mô tả: Quán cafe rang xay tại chỗ với hạt cafe được tuyển chọn từ các vùng nguyên liệu nổi tiếng.

5. **The Hidden Elephant**
   - Địa chỉ: 214 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 7890
   - Mô tả: Quán cafe sân vườn ẩn mình trong con hẻm nhỏ, không gian yên tĩnh lý tưởng để thư giãn.`;
    } else if (prompt.toLowerCase().includes("trà sữa")) {
      return `Dưới đây là 5 quán trà sữa đang hot ở khu vực bạn quan tâm:

1. **Gong Cha D2**
   - Địa chỉ: 45 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 8888
   - Mô tả: Thương hiệu trà sữa Đài Loan nổi tiếng với nhiều topping đa dạng và hương vị đặc trưng.

2. **KOI Thé D2**
   - Địa chỉ: 178 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 7777
   - Mô tả: Trà sữa Đài Loan với trân châu tươi ngon và các loại topping đa dạng.

3. **Tiger Sugar Bình Thạnh**
   - Địa chỉ: 101 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 5432
   - Mô tả: Nổi tiếng với đường nâu sọc hổ đặc trưng, cùng trân châu đường nâu béo ngậy.

4. **Xing Fu Tang D2**
   - Địa chỉ: 235 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 4321
   - Mô tả: Trà sữa với trân châu đường đen được nấu trực tiếp tại quán theo công thức truyền thống.

5. **The Alley D2**
   - Địa chỉ: 154 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 9876
   - Mô tả: Trà sữa cao cấp với trân châu sợi và nhiều loại topping tự làm độc đáo.`;
    }
    
    return mockResponses.default;
  } catch (error) {
    console.error("Error with mock data:", error);
    return "Sorry, I couldn't retrieve the latest trending locations at the moment. Please try again later.";
  }
};
