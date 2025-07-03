import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            ยินดีต้อนรับสู่ Modern Shop
          </h2>
          <p className="text-muted-foreground">
            ค้นพบสินค้าคุณภาพ ราคาดี พร้อมรีวิวจากลูกค้าจริง
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
