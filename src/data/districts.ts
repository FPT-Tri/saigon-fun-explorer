
import { District, Food, FoodLocation } from '../types/database';

export const districts: District[] = [
  {
    id: 1,
    name: 'Quận 1',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800'
  },
  {
    id: 2,
    name: 'Quận 2 (Thủ Đức)',
    image: 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?q=80&w=800'
  },
  {
    id: 3,
    name: 'Quận 3',
    image: 'https://images.unsplash.com/photo-1560840881-4bbcd415a9ab?q=80&w=800'
  },
  {
    id: 4,
    name: 'Quận 4',
    image: 'https://images.unsplash.com/photo-1617419086540-177d0e8c6386?q=80&w=800'
  },
  {
    id: 5,
    name: 'Quận 5',
    image: 'https://images.unsplash.com/photo-1597306223039-cda4df2df743?q=80&w=800'
  },
  {
    id: 6,
    name: 'Quận 6',
    image: 'https://images.unsplash.com/photo-1562314114-18a8dae6a97f?q=80&w=800'
  },
  {
    id: 7,
    name: 'Quận 7',
    image: 'https://images.unsplash.com/photo-1628620797093-0e2462d0e99f?q=80&w=800'
  },
  {
    id: 8,
    name: 'Quận 8',
    image: 'https://images.unsplash.com/photo-1631778068016-e684c7c88c26?q=80&w=800'
  },
  {
    id: 9,
    name: 'Quận 10',
    image: 'https://images.unsplash.com/photo-1617419086428-f106472d8d34?q=80&w=800'
  },
  {
    id: 10,
    name: 'Quận 11',
    image: 'https://images.unsplash.com/photo-1635754061841-691e3fd1c0c5?q=80&w=800'
  },
  {
    id: 11,
    name: 'Quận 12',
    image: 'https://images.unsplash.com/photo-1615828770247-9de122e7d965?q=80&w=800'
  },
  {
    id: 12,
    name: 'Quận Bình Thạnh',
    image: 'https://images.unsplash.com/photo-1581321825411-878eca341b00?q=80&w=800'
  },
  {
    id: 13,
    name: 'Quận Tân Bình',
    image: 'https://images.unsplash.com/photo-1600787521344-c48318da9627?q=80&w=800'
  },
  {
    id: 14,
    name: 'Quận Phú Nhuận',
    image: 'https://images.unsplash.com/photo-1582650448118-f3a7a5f75986?q=80&w=800'
  },
  {
    id: 15,
    name: 'Quận Gò Vấp',
    image: 'https://images.unsplash.com/photo-1618022847409-fc6b2f8fe10a?q=80&w=800'
  }
];

export const foods: Food[] = [
  {
    id: 1,
    name: 'Phở',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800',
    description: 'Món phở truyền thống Việt Nam'
  },
  {
    id: 2,
    name: 'Bánh mì',
    image: 'https://images.unsplash.com/photo-1600626334697-3d7825d50087?q=80&w=800',
    description: 'Bánh mì giòn thơm ngon đặc trưng của Việt Nam'
  },
  {
    id: 3,
    name: 'Cơm tấm',
    image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=800',
    description: 'Cơm tấm sườn nướng thơm ngon'
  },
  {
    id: 4,
    name: 'Bún bò Huế',
    image: 'https://images.unsplash.com/photo-1627964134506-1f7215f2d1d3?q=80&w=800',
    description: 'Bún bò Huế cay thơm ngon'
  },
  {
    id: 5,
    name: 'Bánh xèo',
    image: 'https://images.unsplash.com/photo-1625398407796-82280b0f6143?q=80&w=800',
    description: 'Bánh xèo giòn thơm ngon'
  },
  {
    id: 6,
    name: 'Trà sữa',
    image: 'https://images.unsplash.com/photo-1558857563-c0c3b5f85a63?q=80&w=800',
    description: 'Trà sữa ngọt ngào giải khát'
  },
  {
    id: 7,
    name: 'Cafe',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800',
    description: 'Cafe thơm ngon đậm đà'
  },
  {
    id: 8,
    name: 'Bún chả',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800',
    description: 'Bún chả thơm ngon đậm đà'
  },
  {
    id: 9,
    name: 'Hủ tiếu',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=800',
    description: 'Hủ tiếu Nam Vang đặc trưng'
  },
  {
    id: 10,
    name: 'Bánh canh',
    image: 'https://images.unsplash.com/photo-1617093611994-f5ab01c8d238?q=80&w=800',
    description: 'Bánh canh cua thơm ngon'
  }
];

export const foodLocations: FoodLocation[] = [
  // Phở - Quận 1
  {
    id: 1,
    foodId: 1,
    districtId: 1,
    name: 'Phở Lệ',
    address: '413 Nguyễn Trãi, Phường 7, Quận 5, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?q=80&w=800',
    phone: '028 3855 0158'
  },
  // Phở - Quận 3
  {
    id: 2,
    foodId: 1,
    districtId: 3,
    name: 'Phở Hòa',
    address: '260C Pasteur, Phường 8, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=800',
    phone: '028 3829 7943'
  },
  
  // Bánh mì - Quận 1
  {
    id: 3,
    foodId: 2,
    districtId: 1,
    name: 'Bánh Mì Huỳnh Hoa',
    address: '26 Lê Thị Riêng, Bến Thành, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1600626334697-3d7825d50087?q=80&w=800',
    phone: '028 3925 0885'
  },
  // Bánh mì - Quận 3
  {
    id: 4,
    foodId: 2,
    districtId: 3,
    name: 'Bánh Mì Hồng Hoa',
    address: '62 Nguyễn Văn Trỗi, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1633352615955-f0c99e8b7e5c?q=80&w=800',
    phone: '028 3844 4306'
  },
  
  // Cơm tấm - Quận 1
  {
    id: 5,
    foodId: 3,
    districtId: 1,
    name: 'Cơm Tấm Thuận Kiều',
    address: '25-27 Thuận Kiều, Phường 12, Quận 5, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1516684808441-d7ca5117a3e1?q=80&w=800',
    phone: '028 3855 3475'
  },
  // Cơm tấm - Quận 3
  {
    id: 6,
    foodId: 3,
    districtId: 3,
    name: 'Cơm Tấm Bà Thảo',
    address: '6 Nguyễn Thông, Phường 7, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?q=80&w=800',
    phone: '028 3932 0486'
  },
  
  // Bún bò Huế - Quận 1
  {
    id: 7,
    foodId: 4,
    districtId: 1,
    name: 'Bún Bò Huế Đông Ba',
    address: '110A Nguyễn Du, Bến Thành, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1603105948336-9c0787c7c8d2?q=80&w=800',
    phone: '028 3823 0373'
  },
  
  // Bánh xèo - Quận 1
  {
    id: 8,
    foodId: 5,
    districtId: 1,
    name: 'Bánh Xèo 46A',
    address: '46A Đinh Công Tráng, Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1625938145744-14fc860dab44?q=80&w=800',
    phone: '028 3824 1110'
  },
  
  // Trà sữa - Quận 1
  {
    id: 9,
    foodId: 6,
    districtId: 1,
    name: 'Gong Cha',
    address: '68 Lê Lợi, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1527424803343-565242c3a6c8?q=80&w=800',
    phone: '028 3821 8699'
  },
  // Trà sữa - Quận 7
  {
    id: 10,
    foodId: 6,
    districtId: 7,
    name: 'The Alley',
    address: '123 Nguyễn Thị Thập, Tân Phú, Quận 7, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1561668158-4932c6a450b4?q=80&w=800',
    phone: '028 3636 7799'
  },
  
  // Cafe - Quận 1
  {
    id: 11,
    foodId: 7,
    districtId: 1,
    name: 'The Coffee House',
    address: '86-88 Cao Thắng, Phường 4, Quận 3, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=800',
    phone: '028 7107 8079'
  },
  // Cafe - Quận Bình Thạnh
  {
    id: 12,
    foodId: 7,
    districtId: 12,
    name: 'Workshop Coffee',
    address: '27 Ngô Đức Kế, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800',
    phone: '028 3824 6801'
  },
  
  // Bún chả - Quận 1
  {
    id: 13,
    foodId: 8,
    districtId: 1,
    name: 'Bún Chả Hà Nội 38',
    address: '38 Lý Tự Trọng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?q=80&w=800',
    phone: '028 3822 8228'
  },
  
  // Hủ tiếu - Quận 5
  {
    id: 14,
    foodId: 9,
    districtId: 5,
    name: 'Hủ Tiếu Nam Vang Nhân Quán',
    address: '144 Nguyễn Trãi, Phường 3, Quận 5, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800',
    phone: '028 3923 4239'
  },
  
  // Bánh canh - Quận 10
  {
    id: 15,
    foodId: 10,
    districtId: 9,
    name: 'Bánh Canh Cua Út Năng',
    address: '339 Lê Văn Sỹ, Phường 1, Tân Bình, Thành phố Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1617091413746-b948cc306d2a?q=80&w=800',
    phone: '028 3991 2413'
  }
];
