
import { Activity, ActivityLocation } from '../types/database';

export const activities: Activity[] = [
  {
    id: 1,
    name: 'Golf mini',
    image: 'https://images.unsplash.com/photo-1585140802950-c9f65b6911ad?q=80&w=800',
    description: 'Trải nghiệm Golf mini thú vị với người yêu của bạn'
  },
  {
    id: 2,
    name: 'Đánh bóng chày',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=800',
    description: 'Thử sức với môn thể thao đánh bóng chày sôi động'
  },
  {
    id: 3,
    name: 'Trượt patin',
    image: 'https://images.unsplash.com/photo-1572904704766-cbe28458b075?q=80&w=800',
    description: 'Cùng trải nghiệm cảm giác trượt patin tuyệt vời'
  },
  {
    id: 4,
    name: 'Hoạ kim sa',
    image: 'https://images.unsplash.com/photo-1605639743310-cb770c1d7b4e?q=80&w=800',
    description: 'Sáng tạo nghệ thuật với hoạ kim sa độc đáo'
  },
  {
    id: 5,
    name: 'Làm gốm',
    image: 'https://images.unsplash.com/photo-1565104584551-56c5a2b2edea?q=80&w=800',
    description: 'Cùng nhau khám phá nghề làm gốm truyền thống'
  },
  {
    id: 6,
    name: 'Cafe landmark 81',
    image: 'https://images.unsplash.com/photo-1624959539191-c467a857bacd?q=80&w=800',
    description: 'Thưởng thức cà phê với tầm nhìn từ toà nhà cao nhất Việt Nam'
  },
  {
    id: 7,
    name: 'Go cart',
    image: 'https://images.unsplash.com/photo-1518487972862-621e341dd44f?q=80&w=800', 
    description: 'Lái xe Go Cart với tốc độ và sự phấn khích'
  },
  {
    id: 8,
    name: 'Global city',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800',
    description: 'Khám phá không gian vui chơi hiện đại tại Global City'
  },
  {
    id: 9,
    name: 'Game center gigamall',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=800',
    description: 'Thư giãn với các trò chơi thú vị tại Gigamall'
  },
  {
    id: 10,
    name: 'Ca kịch chợ lớn',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=800',
    description: 'Thưởng thức nghệ thuật ca kịch truyền thống tại Chợ Lớn'
  },
  {
    id: 11,
    name: 'Trượt băng',
    image: 'https://images.unsplash.com/photo-1572119752777-3a4cf2d7a138?q=80&w=800',
    description: 'Vui chơi trượt băng trong không gian mát lạnh'
  },
  {
    id: 12,
    name: 'Bắn súng',
    image: 'https://images.unsplash.com/photo-1647963554363-45b31cc611d1?q=80&w=800',
    description: 'Thử thách kỹ năng bắn súng của bạn'
  },
  {
    id: 13,
    name: 'Bắn cung',
    image: 'https://images.unsplash.com/photo-1458639965011-b9f5fac1b478?q=80&w=800',
    description: 'Trải nghiệm môn thể thao bắn cung cổ điển'
  },
  {
    id: 14,
    name: 'Jump arena',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800',
    description: 'Nhảy và vui đùa tại Jump Arena sôi động'
  },
  {
    id: 15,
    name: 'Xplay zone quận 10',
    image: 'https://images.unsplash.com/photo-1501003878151-d3cb87799705?q=80&w=800',
    description: 'Khám phá khu vui chơi Xplay Zone tại Quận 10'
  },
  {
    id: 16,
    name: 'Escape room',
    image: 'https://images.unsplash.com/photo-1569360557316-76028d039014?q=80&w=800',
    description: 'Giải đố và trốn thoát khỏi căn phòng bí ẩn'
  },
  {
    id: 17,
    name: 'Playstation',
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=800',
    description: 'Chơi game Playstation với người yêu của bạn'
  },
  {
    id: 18,
    name: 'Nghe acoutic',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800',
    description: 'Thưởng thức âm nhạc acoustic trong không gian ấm cúng'
  }
];

export const activityLocations: ActivityLocation[] = [
  // Golf mini
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
  
  // Đánh bóng chày
  {
    id: 3,
    activityId: 2,
    name: 'Saigon Baseball Club',
    address: 'Khu Đô Thị Vạn Phúc, Thủ Đức, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800',
    phone: '090 123 4567'
  },
  
  // Trượt patin
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
  
  // Hoạ kim sa
  {
    id: 6,
    activityId: 4,
    name: 'Art Studio Hoạ Kim Sa',
    address: '184 Đ. Pasteur, Phường 6, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1602090478796-f74e8424626a?q=80&w=800'
  },
  
  // Làm gốm
  {
    id: 7,
    activityId: 5,
    name: 'Làng Gốm Bát Tràng Sài Gòn',
    address: '18/10 Đ. Nguyễn Thị Minh Khai, Đa Kao, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1552863016-c96c7972ab4b?q=80&w=800',
    phone: '028 3910 1416'
  },
  
  // Cafe landmark 81
  {
    id: 8,
    activityId: 6,
    name: 'Cafe Landmark 81 Skyview',
    address: 'Tầng 79, Landmark 81, Vinhomes Central Park, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1608511739036-a2acdea1511d?q=80&w=800',
    phone: '028 3623 1888'
  },
  
  // Go cart
  {
    id: 9,
    activityId: 7,
    name: 'Happy Kart Racing',
    address: 'Khu Đô Thị Phú Mỹ Hưng, Quận 7, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1568844538889-fceb811a5ce6?q=80&w=800',
    phone: '028 5412 1919'
  },
  
  // Global city
  {
    id: 10,
    activityId: 8,
    name: 'The Global City',
    address: 'Đ. Đỗ Xuân Hợp, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=800'
  },
  
  // Game center gigamall
  {
    id: 11,
    activityId: 9,
    name: 'Game Center Gigamall',
    address: 'Tầng 5, TTTM Gigamall, 240 Phạm Văn Đồng, Thủ Đức, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1588463463625-eac82ede9540?q=80&w=800'
  },
  
  // Ca kịch chợ lớn
  {
    id: 12,
    activityId: 10,
    name: 'Nhà Hát Cải Lương Trần Hữu Trang',
    address: '136 Đ. Trần Hưng Đạo, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1551818176-60579e574b91?q=80&w=800',
    phone: '028 3836 7163'
  },
  
  // Trượt băng
  {
    id: 13,
    activityId: 11,
    name: 'Vincom Ice Rink',
    address: 'Tầng B1, TTTM Vincom Thảo Điền, Quận 2, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1576093777226-9f480c1c2e51?q=80&w=800',
    phone: '028 3620 5678'
  },
  
  // Bắn súng
  {
    id: 14,
    activityId: 12,
    name: 'Shooting Range Vietnam',
    address: '720A Điện Biên Phủ, Phường 22, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1510156761559-d06541bddcab?q=80&w=800',
    phone: '097 120 2727'
  },
  
  // Bắn cung
  {
    id: 15,
    activityId: 13,
    name: 'Saigon Archery',
    address: '91 Đ. Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1511734695403-a8c8c14a85bb?q=80&w=800',
    phone: '090 789 1234'
  },
  
  // Jump arena
  {
    id: 16,
    activityId: 14,
    name: 'Jump Arena Phú Nhuận',
    address: '428 Đ. Phan Xích Long, Phường 3, Phú Nhuận, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1580250864656-cd501faa9c76?q=80&w=800',
    phone: '028 3995 9888'
  },
  
  // Xplay zone quận 10
  {
    id: 17,
    activityId: 15,
    name: 'Xplay Zone',
    address: '1 Đ. Nguyễn Chí Thanh, Phường 16, Quận 10, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800',
    phone: '028 3868 4042'
  },
  
  // Escape room
  {
    id: 18,
    activityId: 16,
    name: 'Lost SG Escape Room',
    address: '8 Thép Mới, Phường 12, Tân Bình, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=800',
    phone: '090 994 8884'
  },
  
  // Playstation
  {
    id: 19,
    activityId: 17,
    name: 'PlayStation Center',
    address: '115 Đ. Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=800',
    phone: '090 123 7890'
  },
  
  // Nghe acoutic
  {
    id: 20,
    activityId: 18,
    name: 'Acoustic Bar',
    address: '6E Ngô Thời Nhiệm, Phường 7, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800',
    phone: '028 3933 0603'
  }
];
