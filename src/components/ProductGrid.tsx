import ProductCard from "./ProductCard";
import type { Product } from "../data/Products";

interface ProductGridProps {
  products: Product[];
  searchTerm: string;
}

const ProductGrid = ({ products, searchTerm }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-muted-foreground mb-2">
          ไม่พบสินค้าที่ค้นหา
        </h3>
        <p className="text-muted-foreground">
          ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่อื่น
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          searchTerm={searchTerm}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
