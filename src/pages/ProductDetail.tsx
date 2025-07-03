import { useParams, Link } from "react-router";
import { ArrowLeft, Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { products } from "../data/Products";
import { toast } from "../hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">ไม่พบสินค้า</h1>
          <Link to="/">
            <Button>กลับหน้าแรก</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("th-TH").format(price);
  };

  const handleAddToCart = () => {
    toast({
      title: "เพิ่มในตะกร้าแล้ว",
      description: `${product.name} ถูกเพิ่มในตะกร้าสินค้าแล้ว`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "เพิ่มในรายการโปรดแล้ว",
      description: `${product.name} ถูกเพิ่มในรายการโปรดแล้ว`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-kanit">
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          กลับหน้าแรก
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg">
                {product.rating} ({product.reviewCount} รีวิว)
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-primary">
                  ฿{formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ฿{formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <Badge variant="secondary">
                  ประหยัด ฿{formatPrice(product.originalPrice - product.price)}
                </Badge>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">คุณสมบัติเด่น</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.inStock ? "เพิ่มในตะกร้า" : "สินค้าหมด"}
              </Button>
              <Button size="lg" variant="outline" onClick={handleAddToWishlist}>
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {!product.inStock && (
              <Badge variant="destructive" className="text-sm">
                สินค้าหมดชั่วคราว
              </Badge>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              รีวิวจากลูกค้า ({product.reviewCount})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {product.reviews.map((review, index) => (
              <div key={review.id}>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {review.userName.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{review.userName}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          ผู้ซื้อจริง
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString("th-TH")}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                </div>
                {index < product.reviews.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
