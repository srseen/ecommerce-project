import { useState, useMemo } from "react";
import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/ProductGrid";
import { products, categories } from "../data/Products";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "ทั้งหมด" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            ยินดีต้อนรับสู่ Modern Shop
          </h2>
          <p className="text-muted-foreground">
            ค้นพบสินค้าคุณภาพ ราคาดี พร้อมรีวิวจากลูกค้าจริง
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="mb-4">
          <p className="text-muted-foreground">
            พบสินค้า {filteredProducts.length} รายการ
            {searchTerm && ` จากการค้นหา "${searchTerm}"`}
            {selectedCategory !== "ทั้งหมด" && ` ในหมวด "${selectedCategory}"`}
          </p>
        </div>

        <ProductGrid products={filteredProducts} searchTerm={searchTerm} />
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Modern Shop</h3>
            <p className="text-muted-foreground text-sm">
              ร้านค้าออนไลน์โมเดิร์น เชื่อถือได้ คุณภาพดี
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              © 2024 Modern Shop. สงวนลิขสิทธิ์.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
