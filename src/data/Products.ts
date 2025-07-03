export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  features: string[];
  inStock: boolean;
  reviews: Review[];
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export const categories = [
  "ทั้งหมด",
  "เทคโนโลยี",
  "แฟชั่น",
  "บ้านและสวน",
  "กีฬา",
  "สุขภาพและความงาม",
];

export const products: Product[] = [
  {
    id: 1,
    name: "สมาร์ทโฟน Galaxy Ultra",
    description: "สมาร์ทโฟนระดับพรีเมียม พร้อมกล้อง AI ที่ล้ำสมัย",
    price: 25900,
    originalPrice: 29900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
    category: "เทคโนโลยี",
    rating: 4.8,
    reviewCount: 156,
    features: [
      "กล้อง 108MP",
      "แบตเตอรี่ 5000mAh",
      "จอ AMOLED 6.8 นิ้ว",
      "ชาร์จเร็ว 65W",
    ],
    inStock: true,
    reviews: [
      {
        id: 1,
        userName: "สมชาย ใจดี",
        rating: 5,
        comment: "กล้องถ่ายรูปสวยมาก แบตอึดจริงๆ ใช้งานได้ทั้งวัน",
        date: "2024-06-15",
        verified: true,
      },
      {
        id: 2,
        userName: "นิดา รักการถ่ายรูป",
        rating: 4,
        comment: "โทรศัพท์ดีมาก ราคาคุ้มค่า แต่ตัวเครื่องใหญ่ไปนิด",
        date: "2024-06-10",
        verified: true,
      },
    ],
  },
  {
    id: 2,
    name: "เสื้อยืดพรีเมียม Cotton",
    description: "เสื้อยืดผ้าคอตตอน 100% นุ่ม สบาย ระบายอากาศดี",
    price: 590,
    originalPrice: 790,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "แฟชั่น",
    rating: 4.6,
    reviewCount: 89,
    features: ["ผ้าคอตตอน 100%", "ซักเครื่องได้", "ทรงพอดีตัว", "มี 5 สี"],
    inStock: true,
    reviews: [
      {
        id: 3,
        userName: "มาลี สไตล์ดี",
        rating: 5,
        comment: "ผ้านุ่มมาก ใส่สบาย ซักแล้วไม่หด",
        date: "2024-06-12",
        verified: true,
      },
    ],
  },
  {
    id: 3,
    name: "แล็ปท็อป Gaming Pro",
    description: "แล็ปท็อปเกมมิ่งสเปคแรง รองรับเกมใหม่ล่าสุด",
    price: 45900,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
    category: "เทคโนโลยี",
    rating: 4.9,
    reviewCount: 67,
    features: ["RTX 4070", "Intel i7", "RAM 16GB", "SSD 1TB"],
    inStock: true,
    reviews: [
      {
        id: 4,
        userName: "เกมเมอร์โปร",
        rating: 5,
        comment: "เล่นเกมลื่นมาก ไม่มีแลค สเปคคุ้มค่าเงิน",
        date: "2024-06-08",
        verified: true,
      },
    ],
  },
  {
    id: 4,
    name: "เครื่องชงกาแฟอัตโนมัติ",
    description: "เครื่องชงกาแฟระบบอัตโนมัติ ชงได้หลากหลายเมนู",
    price: 12900,
    originalPrice: 15900,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500",
    category: "บ้านและสวน",
    rating: 4.5,
    reviewCount: 134,
    features: ["ชงอัตโนมัติ", "15 เมนู", "เครื่องบดในตัว", "จอสัมผัส"],
    inStock: false,
    reviews: [
      {
        id: 5,
        userName: "คอกาแฟ",
        rating: 4,
        comment: "กาแฟหอม อร่อย แต่เสียงค่อนข้างดัง",
        date: "2024-06-05",
        verified: true,
      },
    ],
  },
  {
    id: 5,
    name: "รองเท้าวิ่ง UltraBoost",
    description: "รองเท้าวิ่งระดับมืออาชีพ เบาและนุ่ม",
    price: 3990,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "กีฬา",
    rating: 4.7,
    reviewCount: 203,
    features: ["พื้นรองเท้า Boost", "น้ำหนักเบา", "ระบายอากาศ", "กันน้ำ"],
    inStock: true,
    reviews: [
      {
        id: 6,
        userName: "นักวิ่ง",
        rating: 5,
        comment: "วิ่งสบายมาก เท้าไม่เมื่อย ใส่ได้นาน",
        date: "2024-06-03",
        verified: true,
      },
    ],
  },
  {
    id: 6,
    name: "ครีมบำรุงผิวหน้า Vitamin C",
    description: "ครีมบำรุงผิวหน้า เพิ่มความชุ่มชื้น ลดริ้วรอย",
    price: 1290,
    image:
      "https://media.allonline.7eleven.co.th/pdzoom/572243-00-whitening-ratcha-life.jpg",
    category: "สุขภาพและความงาม",
    rating: 4.4,
    reviewCount: 178,
    features: ["Vitamin C 20%", "ไม่มีพาราเบน", "ทดสอบแล้ว", "ขนาด 50ml"],
    inStock: true,
    reviews: [
      {
        id: 7,
        userName: "สาวใสใส",
        rating: 4,
        comment: "ใช้แล้วผิวนุ่ม ชุ่มชื้น แต่ใช้เวลาเห็นผลนาน",
        date: "2024-06-01",
        verified: true,
      },
    ],
  },
];
