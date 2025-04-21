
import { ActivityLocation } from '../../types/database';

export const activityLocations: ActivityLocation[] = [
  // Golf Mini locations
  {
    id: 1,
    activityId: 1,
    name: "Mini Golf Garden",
    address: "156 Nguyễn Chí Thanh, P.3, Q.10, TP.HCM",
    image: "https://images.unsplash.com/photo-1595277455088-8ca66dae5259?q=80&w=800",
    phone: "028 3834 5678",
    description: "Sân golf mini với nhiều chướng ngại vật thú vị, phù hợp cho cả gia đình và các cặp đôi."
  },
  {
    id: 2,
    activityId: 1,
    name: "Golf Zone TP.HCM",
    address: "243 Hoàng Văn Thụ, P.8, Q.Phú Nhuận, TP.HCM",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800",
    phone: "028 3844 2345",
    description: "Khu vực golf mini hiện đại với các thiết bị mô phỏng chuyên nghiệp."
  },
  
  // Bóng chày locations
  {
    id: 3,
    activityId: 2,
    name: "Sân Bóng Chày Rạch Miễu",
    address: "12 Rạch Miễu, P.5, Q.Phú Nhuận, TP.HCM",
    image: "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?q=80&w=800",
    phone: "028 3991 2345",
    description: "Sân bóng chày đạt chuẩn quốc tế với các thiết bị hỗ trợ đầy đủ."
  },
  {
    id: 4,
    activityId: 2,
    name: "Baseball Center Sài Gòn",
    address: "86 Lê Văn Sỹ, P.11, Q.3, TP.HCM",
    image: "https://images.unsplash.com/photo-1597226051193-0712d08651ca?q=80&w=800",
    phone: "028 3830 9876",
    description: "Trung tâm bóng chày với các huấn luyện viên chuyên nghiệp, phù hợp cho người mới bắt đầu."
  },
  
  // Trượt patin locations
  {
    id: 5,
    activityId: 3,
    name: "Sân Trượt Patin 3T",
    address: "156 Trần Hưng Đạo, P.7, Q.5, TP.HCM",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800",
    phone: "028 3838 5678",
    description: "Sân trượt patin rộng rãi với bề mặt chất lượng cao, cho thuê giày và bảo hộ."
  },
  {
    id: 6,
    activityId: 3,
    name: "Roller Skate Zone",
    address: "35 Nguyễn Thị Minh Khai, P.Bến Nghé, Q.1, TP.HCM",
    image: "https://images.unsplash.com/photo-1530139895423-fabbbc0d2162?q=80&w=800",
    phone: "028 3822 4567",
    description: "Khu vực trượt patin hiện đại trong nhà, có âm nhạc và đèn led tạo không khí sôi động."
  },
  
  // Hoạ kim sa locations
  {
    id: 7,
    activityId: 4,
    name: "Xưởng Nghệ Thuật Kim Sa",
    address: "89 Võ Văn Tần, P.6, Q.3, TP.HCM",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800",
    phone: "028 3930 2345",
    description: "Xưởng nghệ thuật chuyên về hoạ kim sa với nhiều mẫu mã đa dạng."
  },
  {
    id: 8,
    activityId: 4,
    name: "Lớp Học Kim Sa Sài Gòn",
    address: "125 Nguyễn Đình Chiểu, P.6, Q.3, TP.HCM",
    image: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=800",
    phone: "028 3833 1234",
    description: "Lớp học hoạ kim sa dành cho mọi lứa tuổi, có hướng dẫn chi tiết từ cơ bản đến nâng cao."
  },
  
  // Làm gốm locations
  {
    id: 9,
    activityId: 5,
    name: "Xưởng Gốm Bát Tràng Sài Gòn",
    address: "56 Phạm Ngọc Thạch, P.6, Q.3, TP.HCM",
    image: "https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?q=80&w=800",
    phone: "028 3845 6789",
    description: "Xưởng gốm với các nghệ nhân đến từ làng gốm Bát Tràng, dạy làm gốm truyền thống."
  },
  {
    id: 10,
    activityId: 5,
    name: "Pottery Garden",
    address: "78 Lê Thánh Tôn, P.Bến Nghé, Q.1, TP.HCM",
    image: "https://images.unsplash.com/photo-1603871152943-98e20f0be4cc?q=80&w=800",
    phone: "028 3821 3456",
    description: "Không gian làm gốm hiện đại, phục vụ cà phê trong khi bạn tự tay làm các sản phẩm gốm."
  }
];
