import { ActivityLocation } from '../../types/database';

export const activityLocations: ActivityLocation[] = [
  {
    id: 1,
    activityId: 1,
    name: 'Saigon Mini Golf',
    address: '168 Đ. Phan Huy Ích, Phường 12, Gò Vấp, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1534469650761-fce6cc26ac0d?q=80&w=800',
    phone: '028 3920 0288'
  },
  {
    id: 2,
    activityId: 1,
    name: 'Golf Lab',
    address: '53 Đ. D2, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1500932334442-8761ee4810a7?q=80&w=800',
    phone: '028 3899 3888'
  },
  {
    id: 101,
    activityId: 1,
    name: 'Topgolf Saigon',
    address: '123 Đ. Nguyễn Huệ, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1530631673369-dc4bd71fc1a4?q=80&w=800',
    phone: '028 3822 4567',
    description: 'Trải nghiệm golf hiện đại kết hợp với công nghệ giải trí'
  },
  {
    id: 102,
    activityId: 1,
    name: 'PuttPutt Mini Golf Garden',
    address: '45 Đ. Thảo Điền, Phường Thảo Điền, Quận 2, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=800',
    phone: '090 123 4567',
    description: 'Sân golf mini ngoài trời với nhiều thử thách thú vị'
  },
  
  {
    id: 3,
    activityId: 2,
    name: 'Saigon Baseball Club',
    address: 'Khu Đô Thị Vạn Phúc, Thủ Đức, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800',
    phone: '090 123 4567'
  },
  {
    id: 103,
    activityId: 2,
    name: 'Diamond Park Baseball Center',
    address: '30 Đ. Nguyễn Cơ Thạch, Phường An Lợi Đông, Quận 2, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1508344210624-009b13eae0cf?q=80&w=800',
    phone: '090 456 7890',
    description: 'Sân tập bóng chày hiện đại với các huấn luyện viên chuyên nghiệp'
  },
  
  {
    id: 4,
    activityId: 3,
    name: 'Khu trượt patin Vinhomes Central Park',
    address: 'Vinhomes Central Park, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1590338220690-3a3a1d3e6107?q=80&w=800'
  },
  {
    id: 5,
    activityId: 3,
    name: 'Saigon Skate Shop',
    address: '122 Đ. Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1576093776693-cc8c749905cd?q=80&w=800',
    phone: '028 3925 0588'
  },
  {
    id: 104,
    activityId: 3,
    name: 'RollerWorld Saigon',
    address: '56 Đ. Lê Văn Sỹ, Phường 2, Quận Tân Bình, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1576080795971-2c20fd8b3f83?q=80&w=800',
    phone: '028 3991 2345',
    description: 'Khu trượt patin trong nhà với sàn chuyên nghiệp và an toàn'
  },
  
  {
    id: 6,
    activityId: 4,
    name: 'Art Studio Hoạ Kim Sa',
    address: '184 Đ. Pasteur, Phường 6, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1602090478796-f74e8424626a?q=80&w=800'
  },
  {
    id: 105,
    activityId: 4,
    name: 'Kim Sa Art Center',
    address: '75 Đ. Trần Quốc Thảo, Phường 7, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=800',
    phone: '028 3933 4567',
    description: 'Trung tâm nghệ thuật kim sa với các khóa học cho mọi lứa tuổi'
  },
  
  {
    id: 7,
    activityId: 5,
    name: 'Làng Gốm Bát Tràng Sài Gòn',
    address: '18/10 Đ. Nguyễn Thị Minh Khai, Đa Kao, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1552863016-c96c7972ab4b?q=80&w=800',
    phone: '028 3910 1416'
  },
  {
    id: 106,
    activityId: 5,
    name: 'Sài Gòn Ceramic Studio',
    address: '100 Đ. Trần Não, Phường An Khánh, Quận 2, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800',
    phone: '090 789 0123',
    description: 'Studio gốm hiện đại với các khóa học cho cá nhân và cặp đôi'
  },
  
  {
    id: 8,
    activityId: 6,
    name: 'Cafe Landmark 81 Skyview',
    address: 'Tầng 79, Landmark 81, Vinhomes Central Park, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1608511739036-a2acdea1511d?q=80&w=800',
    phone: '028 3623 1888'
  },
  
  {
    id: 9,
    activityId: 7,
    name: 'Happy Kart Racing',
    address: 'Khu Đô Thị Phú Mỹ Hưng, Quận 7, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1568844538889-fceb811a5ce6?q=80&w=800',
    phone: '028 5412 1919'
  },
  
  {
    id: 10,
    activityId: 8,
    name: 'The Global City',
    address: 'Đ. Đỗ Xuân Hợp, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=800'
  },
  
  {
    id: 11,
    activityId: 9,
    name: 'Game Center Gigamall',
    address: 'Tầng 5, TTTM Gigamall, 240 Phạm Văn Đồng, Thủ Đức, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1588463463625-eac82ede9540?q=80&w=800'
  },
  
  {
    id: 12,
    activityId: 10,
    name: 'Nhà Hát Cải Lương Trần Hữu Trang',
    address: '136 Đ. Trần Hưng Đạo, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1551818176-60579e574b91?q=80&w=800',
    phone: '028 3836 7163'
  },
  
  {
    id: 13,
    activityId: 11,
    name: 'Vincom Ice Rink',
    address: 'Tầng B1, TTTM Vincom Thảo Điền, Quận 2, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1576093777226-9f480c1c2e51?q=80&w=800',
    phone: '028 3620 5678'
  },
  
  {
    id: 14,
    activityId: 12,
    name: 'Shooting Range Vietnam',
    address: '720A Điện Biên Phủ, Phường 22, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1510156761559-d06541bddcab?q=80&w=800',
    phone: '097 120 2727'
  },
  
  {
    id: 15,
    activityId: 13,
    name: 'Saigon Archery',
    address: '91 Đ. Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1511734695403-a8c8c14a85bb?q=80&w=800',
    phone: '090 789 1234'
  },
  
  {
    id: 16,
    activityId: 14,
    name: 'Jump Arena Phú Nhuận',
    address: '428 Đ. Phan Xích Long, Phường 3, Phú Nhuận, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1580250864656-cd501faa9c76?q=80&w=800',
    phone: '028 3995 9888'
  },
  
  {
    id: 17,
    activityId: 15,
    name: 'Xplay Zone',
    address: '1 Đ. Nguyễn Chí Thanh, Phường 16, Quận 10, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800',
    phone: '028 3868 4042'
  },
  
  {
    id: 18,
    activityId: 16,
    name: 'Lost SG Escape Room',
    address: '8 Thép Mới, Phường 12, Tân Bình, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=800',
    phone: '090 994 8884'
  },
  
  {
    id: 19,
    activityId: 17,
    name: 'PlayStation Center',
    address: '115 Đ. Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=800',
    phone: '090 123 7890'
  },
  
  {
    id: 20,
    activityId: 18,
    name: 'Acoustic Bar',
    address: '6E Ngô Thời Nhiệm, Phường 7, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d23e34d?q=80&w=800',
    phone: '028 3933 0603'
  },
  
  {
    id: 107,
    activityId: 19,
    name: 'Aromatic Candle Workshop',
    address: '200 Đ. Nam Kỳ Khởi Nghĩa, Phường 6, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1608181831718-c327bdfb9083?q=80&w=800',
    phone: '028 3933 7890',
    description: 'Workshop hướng dẫn làm nến thơm handmade từ sáp ong tự nhiên'
  },
  {
    id: 108,
    activityId: 19,
    name: 'Candle Light Studio',
    address: '56 Đ. Thảo Điền, Phường Thảo Điền, Quận 2, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1603006939140-53ce19cd9982?q=80&w=800',
    phone: '090 456 1234',
    description: 'Studio chuyên dạy làm nến thơm nghệ thuật với nhiều mùi hương độc đáo'
  },
  
  {
    id: 109,
    activityId: 20,
    name: 'Bake Me Up',
    address: '15 Đ. Nguyễn Thị Minh Khai, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=800',
    phone: '028 3823 4567',
    description: 'Workshop dạy làm bánh ngọt Âu với công thức chuẩn từ chef chuyên nghiệp'
  },
  {
    id: 110,
    activityId: 20,
    name: 'Sweet Baking Studio',
    address: '78 Đ. Trần Quang Diệu, Phường 14, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1608830597604-619220679440?q=80&w=800',
    phone: '028 3930 1234',
    description: 'Studio dạy làm bánh cho cặp đôi với không gian lãng mạn'
  },
  
  {
    id: 111,
    activityId: 21,
    name: 'Music Box Phan Xích Long',
    address: '234 Phan Xích Long, Phường 2, Phú Nhuận, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1574701148212-8518049c7b2c?q=80&w=800',
    phone: '028 3844 5678',
    description: 'Phòng hát ấm cúng giá sinh viên với không gian trẻ trung'
  },
  {
    id: 112,
    activityId: 21,
    name: 'K-Box Music Studio',
    address: '45 Huỳnh Khương An, Phường 5, Gò Vấp, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800',
    phone: '028 3894 3456',
    description: 'Karaoke bình dân với âm thanh chất lượng và giá cả phải chăng'
  },
  
  {
    id: 113,
    activityId: 22,
    name: 'Couple Art Studio',
    address: '45 Đ. Thảo Điền, Phường Thảo Điền, Quận 2, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800',
    phone: '090 123 9876',
    description: 'Studio dạy vẽ tranh dành riêng cho các cặp đôi muốn lưu giữ kỷ niệm'
  },
  {
    id: 114,
    activityId: 22,
    name: 'Love & Art Workshop',
    address: '200 Đ. Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800',
    phone: '028 3925 6789',
    description: 'Workshop vẽ tranh dành cho cặp đôi với không gian lãng mạn'
  }
];
