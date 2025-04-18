import { FoodLocation } from '../../types/database';

export const foodLocations: FoodLocation[] = [
  {
    id: 1,
    foodId: 1,
    districtId: 1,
    name: 'Phở Lệ',
    address: '413 Nguyễn Trãi, Phường 7, Quận 5, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?q=80&w=800',
    phone: '028 3855 0158'
  },
  {
    id: 2,
    foodId: 1,
    districtId: 3,
    name: 'Phở Hòa',
    address: '260C Pasteur, Phường 8, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=800',
    phone: '028 3829 7943'
  },
  {
    id: 101,
    foodId: 1,
    districtId: 12,
    name: 'Phở Gia Truyền',
    address: '45 Đ. Điện Biên Phủ, Phường 15, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800',
    phone: '028 3510 9876',
    description: 'Phở bò truyền thống với nước dùng đậm đà'
  },
  
  {
    id: 3,
    foodId: 2,
    districtId: 1,
    name: 'Bánh Mì Huỳnh Hoa',
    address: '26 Lê Thị Riêng, Bến Thành, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1600626334697-3d7825d50087?q=80&w=800',
    phone: '028 3925 0885'
  },
  {
    id: 4,
    foodId: 2,
    districtId: 3,
    name: 'Bánh Mì Hồng Hoa',
    address: '62 Nguyễn Văn Trỗi, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1633352615955-f0c99e8b7e5c?q=80&w=800',
    phone: '028 3844 4306'
  },
  {
    id: 102,
    foodId: 2,
    districtId: 7,
    name: 'Bánh Mì Sài Gòn Xưa',
    address: '230 Nguyễn Thị Thập, Tân Phú, Quận 7, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?q=80&w=800',
    phone: '028 3771 8765',
    description: 'Bánh mì thịt nguội truyền thống với công thức gia truyền'
  },
  
  {
    id: 5,
    foodId: 3,
    districtId: 1,
    name: 'Cơm Tấm Thuận Kiều',
    address: '25-27 Thuận Kiều, Phường 12, Quận 5, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1516684808441-d7ca5117a3e1?q=80&w=800',
    phone: '028 3855 3475'
  },
  {
    id: 6,
    foodId: 3,
    districtId: 3,
    name: 'Cơm Tấm Bà Thảo',
    address: '6 Nguyễn Thông, Phường 7, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?q=80&w=800',
    phone: '028 3932 0486'
  },
  {
    id: 103,
    foodId: 3,
    districtId: 13,
    name: 'Cơm Tấm Kiều Giang',
    address: '123 Âu Cơ, Phường 14, Tân Bình, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800',
    phone: '028 3948 5678',
    description: 'Cơm tấm sườn bì chả thơm ngon với nước mắm pha chế đặc biệt'
  },
  
  {
    id: 7,
    foodId: 4,
    districtId: 1,
    name: 'Bún Bò Huế Đông Ba',
    address: '110A Nguyễn Du, Bến Thành, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1603105948336-9c0787c7c8d2?q=80&w=800',
    phone: '028 3823 0373'
  },
  {
    id: 104,
    foodId: 4,
    districtId: 14,
    name: 'Bún Bò Huế Hạnh',
    address: '56 Phan Xích Long, Phường 2, Phú Nhuận, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1603105033788-31b3f7d1bc32?q=80&w=800',
    phone: '028 3517 8765',
    description: 'Bún bò Huế cay nồng với nước dùng đậm đà'
  },
  
  {
    id: 8,
    foodId: 5,
    districtId: 1,
    name: 'Bánh Xèo 46A',
    address: '46A Đinh Công Tráng, Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1625938145744-14fc860dab44?q=80&w=800',
    phone: '028 3824 1110'
  },
  {
    id: 105,
    foodId: 5,
    districtId: 15,
    name: 'Bánh Xèo Quê Hương',
    address: '78 Phạm Văn Chiêu, Phường 9, Gò Vấp, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1625938146357-973dc6c2c33a?q=80&w=800',
    phone: '028 3894 1234',
    description: 'Bánh xèo giòn rụm với nhân tôm, thịt và giá đỗ'
  },
  
  {
    id: 9,
    foodId: 6,
    districtId: 1,
    name: 'Gong Cha',
    address: '68 Lê Lợi, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1527424803343-565242c3a6c8?q=80&w=800',
    phone: '028 3821 8699'
  },
  {
    id: 10,
    foodId: 6,
    districtId: 7,
    name: 'The Alley',
    address: '123 Nguyễn Thị Thập, Tân Phú, Quận 7, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1561668158-4932c6a450b4?q=80&w=800',
    phone: '028 3636 7799'
  },
  {
    id: 106,
    foodId: 6,
    districtId: 12,
    name: 'Xing Fu Tang',
    address: '235 Điện Biên Phủ, Phường 15, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1558857563-af75efe93542?q=80&w=800',
    phone: '028 3510 4321',
    description: 'Trà sữa trân châu đường đen nổi tiếng với công thức đặc biệt'
  },
  {
    id: 107,
    foodId: 6,
    districtId: 3,
    name: 'Tiger Sugar',
    address: '56 Trần Quốc Thảo, Phường 7, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1571887277169-50e4294d0a37?q=80&w=800',
    phone: '028 3933 7890',
    description: 'Trà sữa với lớp đường nâu sọc hổ đặc trưng'
  },
  
  {
    id: 11,
    foodId: 7,
    districtId: 1,
    name: 'The Coffee House',
    address: '86-88 Cao Thắng, Phường 4, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=800',
    phone: '028 7107 8079'
  },
  {
    id: 12,
    foodId: 7,
    districtId: 12,
    name: 'Workshop Coffee',
    address: '27 Ngô Đức Kế, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800',
    phone: '028 3824 6801'
  },
  {
    id: 108,
    foodId: 7,
    districtId: 2,
    name: 'The Loft Cafe',
    address: '26 Thảo Điền, Phường Thảo Điền, Quận 2, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800',
    phone: '028 3744 5678',
    description: 'Quán cafe phong cách hiện đại với không gian thoáng đãng'
  },
  {
    id: 109,
    foodId: 7,
    districtId: 7,
    name: 'La Casa Cafe',
    address: '345 Nguyễn Thị Thập, Tân Quy, Quận 7, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800',
    phone: '028 3771 2345',
    description: 'Quán cafe sân vườn với không gian xanh mát và đồ uống đa dạng'
  },
  
  {
    id: 13,
    foodId: 8,
    districtId: 1,
    name: 'Bún Chả Hà Nội 38',
    address: '38 Lý Tự Trọng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?q=80&w=800',
    phone: '028 3822 8228'
  },
  {
    id: 110,
    foodId: 8,
    districtId: 3,
    name: 'Bún Chả Hà Thành',
    address: '45 Võ Văn Tần, Phường 6, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800',
    phone: '028 3930 5678',
    description: 'Bún chả truyền thống Hà Nội với nước chấm chua ngọt đặc trưng'
  },
  
  {
    id: 14,
    foodId: 9,
    districtId: 5,
    name: 'Hủ Tiếu Nam Vang Nhân Quán',
    address: '144 Nguyễn Trãi, Phường 3, Quận 5, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800',
    phone: '028 3923 4239'
  },
  {
    id: 111,
    foodId: 9,
    districtId: 8,
    name: 'Hủ Tiếu Mỹ Tho Ký',
    address: '56 Phạm Thế Hiển, Phường 4, Quận 8, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=800',
    phone: '028 3856 7890',
    description: 'Hủ tiếu Mỹ Tho với nước dùng trong ngọt và thịt heo tươi'
  },
  
  {
    id: 15,
    foodId: 10,
    districtId: 9,
    name: 'Bánh Canh Cua Út Năng',
    address: '339 Lê Văn Sỹ, Phường 1, Tân Bình, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1617091413746-b948cc306d2a?q=80&w=800',
    phone: '028 3991 2413'
  },
  {
    id: 112,
    foodId: 10,
    districtId: 14,
    name: 'Bánh Canh Ghẹ 69',
    address: '69 Phan Đăng Lưu, Phường 7, Phú Nhuận, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1530629013299-6cb10d168419?q=80&w=800',
    phone: '028 3517 3456',
    description: 'Bánh canh ghẹ đặc biệt với nước dùng đậm đà và ghẹ tươi'
  },
  
  {
    id: 115,
    foodId: 1,
    districtId: 12,
    name: 'Phở Hà Nội D2',
    address: '123 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800',
    phone: '028 3512 4567',
    description: 'Phở Hà Nội truyền thống với nước dùng đậm đà'
  },
  {
    id: 116,
    foodId: 6,
    districtId: 12,
    name: 'Gong Cha D2',
    address: '45 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1527424803343-565242c3a6c7?q=80&w=800',
    phone: '028 3512 8888',
    description: 'Trà sữa Đài Loan với nhiều topping đa dạng'
  },
  {
    id: 117,
    foodId: 7,
    districtId: 12,
    name: 'The Running Bean',
    address: '156 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800',
    phone: '028 3512 9999',
    description: 'Quán cafe với không gian xanh mát và view đẹp'
  },
  {
    id: 118,
    foodId: 6,
    districtId: 12,
    name: 'KOI Thé D2',
    address: '178 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1527424803343-565242c3a6c7?q=80&w=800',
    phone: '028 3512 7777',
    description: 'Trà sữa Đài Loan với trân châu tươi ngon'
  },
  {
    id: 119,
    foodId: 7,
    districtId: 12,
    name: 'Cheese Coffee D2',
    address: '200 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800',
    phone: '028 3512 6666',
    description: 'Cafe phong cách Hàn Quốc với các loại bánh ngọt'
  },
  {
    id: 120,
    foodId: 3,
    districtId: 12,
    name: 'Cơm Tấm D2',
    address: '234 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800',
    phone: '028 3512 5555',
    description: 'Cơm tấm sườn bì chả thơm ngon'
  },
  {
    id: 121,
    foodId: 2,
    districtId: 12,
    name: 'Bánh Mì D2',
    address: '256 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1600626334697-3d7825d50087?q=80&w=800',
    phone: '028 3512 4444',
    description: 'Bánh mì thịt nguội và patê thơm ngon'
  },
  {
    id: 122,
    foodId: 7,
    districtId: 12,
    name: 'The Coffee House D2',
    address: '278 Nguyễn Gia Trí (D2), Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800',
    phone: '028 3512 3333',
    description: 'Cafe chuỗi với không gian làm việc thoải mái'
  }
];
