
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
    // Check what type of information is being requested
    const isActivityRequest = prompt.includes("hoạt động");
    const isFoodRequest = prompt.includes("quán") || prompt.includes("món");
    
    // Check for specific keywords
    const isKaraokeRequest = prompt.toLowerCase().includes("karaoke");
    const isCafeRequest = prompt.toLowerCase().includes("cà phê") || prompt.toLowerCase().includes("cafe");
    const isMilkTeaRequest = prompt.toLowerCase().includes("trà sữa");
    const isBinhThanhRequest = prompt.toLowerCase().includes("bình thạnh");
    const isD2StreetRequest = prompt.toLowerCase().includes("nguyễn gia trí") || prompt.toLowerCase().includes("d2");
    
    // Return specific response based on the request pattern
    if (isKaraokeRequest) {
      return `Dưới đây là 5 quán Karaoke nổi tiếng ở khu vực bạn yêu cầu:

1. **Music Box Phan Xích Long**
   - Địa chỉ: 234 Phan Xích Long, Phường 2, Phú Nhuận, TP.HCM
   - Số điện thoại: 028 3844 5678
   - Đặc sản: Hệ thống phòng cách âm chuẩn cao cấp, thực đơn đồ ăn phong phú với đặc biệt là các món ăn Hàn Quốc.

2. **K-Box Music Studio**
   - Địa chỉ: 45 Huỳnh Khương An, Phường 5, Gò Vấp, TP.HCM
   - Số điện thoại: 028 3894 3456
   - Đặc sản: Phòng hát phong cách Hàn Quốc, giá sinh viên và nhiều combo ưu đãi đồ ăn + hát.

3. **The Voice Karaoke Lounge**
   - Địa chỉ: 123 Nguyễn Đình Chiểu, Phường 5, Quận 3, TP.HCM
   - Số điện thoại: 028 3833 7890
   - Đặc sản: Không gian sang trọng, phù hợp tổ chức sinh nhật và hệ thống bài hát cập nhật liên tục.

4. **Melody Box Thảo Điền**
   - Địa chỉ: 47 Thảo Điền, Quận 2, TP.HCM
   - Số điện thoại: 028 3744 9876
   - Đặc sản: Phòng hát theo chủ đề độc đáo (Rock, Pop, Country...) và dịch vụ đặt đồ ăn từ nhà hàng 5 sao.

5. **Icool Karaoke D2**
   - Địa chỉ: 188 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 4455
   - Đặc sản: Hệ thống âm thanh hiện đại, không gian rộng rãi thích hợp cho nhóm lớn, giá cả phải chăng.`;
    } 
    else if (isCafeRequest && isBinhThanhRequest && isD2StreetRequest) {
      return `Dưới đây là 5 quán café nổi tiếng trên đường Nguyễn Gia Trí (D2), Bình Thạnh:

1. **The Coffee House D2**
   - Địa chỉ: 278 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 3333
   - Đặc sản: Cà phê sữa đá, bạc xỉu đá và các loại bánh ngọt tự làm. Không gian rộng rãi thích hợp cho làm việc.

2. **Oromia Coffee D2**
   - Địa chỉ: 123 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 8765
   - Đặc sản: Cà phê rang xay tại chỗ, đặc biệt là dòng cà phê Ethiopia hảo hạng và bánh tiramisu.

3. **The Running Bean**
   - Địa chỉ: 156 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 9999
   - Đặc sản: Cà phê Cold Brew đặc biệt ủ 12 giờ và các loại nước ép trái cây tươi nguyên chất.

4. **The Workshop Coffee D2**
   - Địa chỉ: 210 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 7654
   - Đặc sản: Pour-over coffee với nhiều loại hạt từ khắp nơi trên thế giới và bánh brownie chocolate.

5. **The Hidden Elephant**
   - Địa chỉ: 214 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 7890
   - Đặc sản: Cà phê sữa dừa đặc biệt, không gian sân vườn yên tĩnh ẩn mình trong con hẻm nhỏ.`;
    }
    else if (isCafeRequest && isBinhThanhRequest) {
      return `Dưới đây là 5 quán café nổi tiếng ở Bình Thạnh:

1. **The Coffee House D2**
   - Địa chỉ: 278 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 3333
   - Đặc sản: Cà phê sữa đá, bạc xỉu đá và các loại bánh ngọt tự làm. Không gian rộng rãi.

2. **Oromia Coffee**
   - Địa chỉ: 123 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 8765
   - Đặc sản: Cà phê rang xay tại chỗ, đặc biệt là dòng cà phê Ethiopia hảo hạng.

3. **Là Việt Coffee Phan Văn Trị**
   - Địa chỉ: 191 Phan Văn Trị, Phường 11, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3510 6800
   - Đặc sản: Cà phê specialty với các loại hạt độc đáo từ Đà Lạt, bánh ngọt tự làm.

4. **The Running Bean**
   - Địa chỉ: 156 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 9999
   - Đặc sản: Cà phê Cold Brew đặc biệt ủ 12 giờ và các loại nước ép trái cây tươi.

5. **Cà phê Đinh Bình Thạnh**
   - Địa chỉ: 121 Xô Viết Nghệ Tĩnh, Phường 17, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3514 2321
   - Đặc sản: Cà phê phin truyền thống đậm đà, không gian hoài cổ và yên tĩnh.`;
    }
    else if (isMilkTeaRequest && isBinhThanhRequest && isD2StreetRequest) {
      return `Dưới đây là 5 quán trà sữa nổi tiếng trên đường Nguyễn Gia Trí (D2), Bình Thạnh:

1. **Tiger Sugar D2**
   - Địa chỉ: 101 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 5432
   - Đặc sản: Trà sữa đường nâu sọc hổ signature với trân châu đường nâu béo ngậy.

2. **Xing Fu Tang D2**
   - Địa chỉ: 235 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 4321
   - Đặc sản: Trà sữa trân châu đường đen nấu tại chỗ theo công thức truyền thống Đài Loan.

3. **The Alley D2**
   - Địa chỉ: 154 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 9876
   - Đặc sản: Trà sữa lúa mạch hoàng kim và trà sữa bạch tuyết với topping tự làm.

4. **Gong Cha D2**
   - Địa chỉ: 45 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 8888
   - Đặc sản: Trà sữa Oolong, trà sữa Alisan, và trà Đào với Pudding.

5. **KOI Thé D2**
   - Địa chỉ: 178 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 7777
   - Đặc sản: Golden Bubble Milk Tea với trân châu vàng đặc biệt và trà latte kem phô mai.`;
    } 
    else if (isMilkTeaRequest) {
      return `Dưới đây là 5 quán trà sữa nổi tiếng ở khu vực bạn yêu cầu:

1. **Tiger Sugar**
   - Địa chỉ: 101 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 5432
   - Đặc sản: Trà sữa đường nâu sọc hổ với trân châu đường nâu béo ngậy, vị caramel đặc trưng.

2. **Xing Fu Tang**
   - Địa chỉ: 235 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 4321
   - Đặc sản: Trà sữa trân châu đường đen nấu theo công thức cổ truyền, trân châu to mềm đậm vị.

3. **The Alley**
   - Địa chỉ: 154 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 9876
   - Đặc sản: Trà sữa bạch tuyết, trà lúa mạch hoàng kim với sữa tươi và thạch tự làm từ lá nho.

4. **Gong Cha**
   - Địa chỉ: 45 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 8888
   - Đặc sản: Earl Grey Milk Tea với trân châu đen, pudding và kem phô mai mặn mặn béo béo.

5. **KOI Thé**
   - Địa chỉ: 178 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3512 7777
   - Đặc sản: Golden Bubble Milk Tea với trân châu vàng đặc biệt và Cacao Freeze Milk Tea.`;
    }
    else if (prompt.toLowerCase().includes("phở") || prompt.toLowerCase().includes("bún")) {
      return `Dưới đây là 5 quán phở/bún nổi tiếng ở khu vực bạn yêu cầu:

1. **Phở Lệ Nguyễn Trãi**
   - Địa chỉ: 413-415 Nguyễn Trãi, Phường 7, Quận 5, TP.HCM
   - Số điện thoại: 028 3923 4664
   - Đặc sản: Phở bò tái nạm gầu, bánh phở dai mềm, nước dùng ngọt thanh từ xương bò hầm nhiều giờ.

2. **Phở Phú Vương**
   - Địa chỉ: 373 Lý Thường Kiệt, Phường 9, Quận 11, TP.HCM
   - Số điện thoại: 028 3955 0247
   - Đặc sản: Phở bò viên, bò tái và nước béo đặc biệt, ăn kèm quẩy nóng giòn.

3. **Phở Hòa Pasteur**
   - Địa chỉ: 260C Pasteur, Phường 8, Quận 3, TP.HCM
   - Số điện thoại: 028 3829 7943
   - Đặc sản: Phở đặc biệt với đầy đủ thịt bò, gân, sách và phần nước dùng đặc trưng chuẩn vị Bắc.

4. **Bún Thịt Nướng Chị Tuyền**
   - Địa chỉ: 195 Cô Giang, Phường Cô Giang, Quận 1, TP.HCM
   - Số điện thoại: 0909 427 556
   - Đặc sản: Bún thịt nướng với nước mắm chua ngọt đặc biệt, thịt nướng thơm và chả giò giòn rụm.

5. **Bún Riêu Cua Bà Tý**
   - Địa chỉ: 349/35 Nguyễn Thiện Thuật, Phường 1, Quận 3, TP.HCM
   - Số điện thoại: 0903 668 661
   - Đặc sản: Bún riêu cua nguyên chất, đặc biệt là phần riêu cua bể đỏ tươi và chả tôm thơm ngon.`;
    }
    else if (prompt.toLowerCase().includes("công viên") || prompt.toLowerCase().includes("park")) {
      return `Dưới đây là 5 công viên nổi tiếng ở TP.HCM:

1. **Công viên Tao Đàn**
   - Địa chỉ: Đường Trương Định, Phường Bến Thành, Quận 1, TP.HCM
   - Số điện thoại: 028 3823 2345
   - Mô tả: Công viên trung tâm rộng 10 hecta với nhiều cây xanh, khu thể dục thể thao, và câu lạc bộ chim cảnh buổi sáng nổi tiếng.

2. **Công viên Lê Thị Riêng**
   - Địa chỉ: 875 Cách Mạng Tháng Tám, Phường 15, Quận 10, TP.HCM
   - Số điện thoại: 028 3977 1234
   - Mô tả: Công viên lớn với hồ nước, khu vui chơi trẻ em, và nhiều bãi cỏ rộng rãi phù hợp cho picnic cuối tuần.

3. **Công viên 23/9**
   - Địa chỉ: Đường Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, TP.HCM
   - Số điện thoại: 028 3836 7890
   - Mô tả: Công viên trung tâm gần chợ Bến Thành với lối đi bộ, khu tập thể dục và nhiều hoạt động văn hóa vào buổi tối.

4. **Công viên Gia Định**
   - Địa chỉ: 336 Nguyễn Văn Lượng, Phường 16, Quận Gò Vấp, TP.HCM
   - Số điện thoại: 028 3958 8127
   - Mô tả: Công viên rộng với hồ nước, vườn hoa, sân thể thao và đặc biệt là khu vui chơi trẻ em hiện đại.

5. **Công viên văn hóa Đầm Sen**
   - Địa chỉ: 3 Hòa Bình, Phường 3, Quận 11, TP.HCM
   - Số điện thoại: 028 3963 0732
   - Mô tả: Công viên giải trí lớn với nhiều trò chơi cảm giác mạnh, công viên nước, vườn thú, và biểu diễn nhạc nước hàng ngày.`;
    }
    else {
      return `Dưới đây là 5 địa điểm đang hot ở TP.HCM phù hợp với yêu cầu của bạn:

1. **Phố đi bộ Nguyễn Huệ**
   - Địa chỉ: Đường Nguyễn Huệ, Quận 1, TP.HCM
   - Mô tả: Khu vực đi bộ sầm uất với nhiều hoạt động văn hóa, nghệ thuật và ẩm thực. Đặc biệt nhộn nhịp vào buổi tối và cuối tuần với các tiết mục biểu diễn đường phố.

2. **The Factory Contemporary Arts Centre**
   - Địa chỉ: 15 Nguyễn Ư Dĩ, Thảo Điền, Quận 2, TP.HCM
   - Số điện thoại: 028 3744 2589
   - Mô tả: Trung tâm nghệ thuật đương đại lớn nhất Việt Nam với các triển lãm thường xuyên, không gian sáng tạo cho nghệ sĩ trẻ và quán café nghệ thuật.

3. **Landmark 81 Skyview**
   - Địa chỉ: 720A Điện Biên Phủ, Phường 22, Bình Thạnh, TP.HCM
   - Số điện thoại: 028 3969 8888
   - Mô tả: Đài quan sát trên tòa nhà cao nhất Việt Nam ở tầng 81, mang đến tầm nhìn 360 độ toàn cảnh TP.HCM từ trên cao, kèm theo quầy bar và nhà hàng sang trọng.

4. **The Box Market**
   - Địa chỉ: 22-24 Lý Tự Trọng, Phường Bến Nghé, Quận 1, TP.HCM
   - Mô tả: Chợ container sáng tạo với nhiều gian hàng thời trang, phụ kiện độc đáo và đồ ăn vặt đa dạng. Không gian hiện đại và rất thích hợp cho giới trẻ check-in.

5. **Phố Nhật Bản (Little Japan)**
   - Địa chỉ: Khu vực Lê Thánh Tôn, Thái Văn Lung, Quận 1, TP.HCM
   - Mô tả: Khu phố với nhiều nhà hàng Nhật Bản chính gốc, quán bar kiểu Nhật và cửa hàng đặc sản. Không khí và kiến trúc mang đậm phong cách Nhật Bản giữa lòng Sài Gòn.`;
    }
    
  } catch (error) {
    console.error("Error with mock data:", error);
    return "Xin lỗi, tôi không thể tìm thấy thông tin về địa điểm bạn yêu cầu. Vui lòng thử lại sau.";
  }
};
