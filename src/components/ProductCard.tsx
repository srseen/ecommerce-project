import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components//ui/button";
import { Star } from "lucide-react";
import type { Product } from "../data/Products";
import { Link } from "react-router";

interface ProductCardProps {
  product: Product;
  searchTerm?: string;
}

const ProductCard = ({ product, searchTerm }: ProductCardProps) => {
  const highlightText = (text: string, search: string) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(regex, '<span class="search-highlight">$1</span>');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("th-TH").format(price);
  };

  return (
    <Card className="product-card overflow-hidden animate-fade-in">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              สินค้าหมด
            </Badge>
          )}
          {product.originalPrice && (
            <Badge variant="secondary" className="absolute top-2 right-2">
              ลด{" "}
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              %
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>

        <h3
          className="font-semibold text-lg mb-2 line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: highlightText(product.name, searchTerm || ""),
          }}
        />

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviewCount} รีวิว)
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">
            ฿{formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ฿{formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <Link to={`/product/${product.id}`}>
          <Button className="w-full" disabled={!product.inStock}>
            {product.inStock ? "ดูรายละเอียด" : "สินค้าหมด"}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
