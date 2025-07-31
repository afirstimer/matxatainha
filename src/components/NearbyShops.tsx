import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Navigation } from "lucide-react";

interface NearbyShopsProps {
    currentServiceLocation: string;
}

const nearbyShops = [
    {
        id: 1,
        name: "Lotus Spa & Wellness",
        rating: 4.8,
        reviewCount: 967,
        distance: 0.5,
        location: "456 Kim Mã, Ba Đình, Hà Nội",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
        price: 250000,
        originalPrice: 300000,
        specialOffer: "Giảm 20% dịch vụ đầu tiên",
        isOpen: true,
        services: ["Massage", "Spa", "Chăm sóc da"]
    },
    {
        id: 2,
        name: "Golden Hands Therapy",
        rating: 4.7,
        reviewCount: 543,
        distance: 0.8,
        location: "789 Đội Cấn, Ba Đình, Hà Nội",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=200&fit=crop",
        price: 320000,
        originalPrice: 380000,
        specialOffer: "Combo 2 dịch vụ giảm 30%",
        isOpen: true,
        services: ["Massage trị liệu", "Vật lý trị liệu"]
    },
    {
        id: 3,
        name: "Zen Garden Relaxation",
        rating: 4.9,
        reviewCount: 1234,
        distance: 1.2,
        location: "321 Nguyễn Thái Học, Ba Đình, Hà Nội",
        image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=200&fit=crop",
        price: 280000,
        originalPrice: 350000,
        specialOffer: "Miễn phí đồ uống",
        isOpen: false,
        services: ["Massage thư giãn", "Aromatherapy"]
    },
    {
        id: 4,
        name: "Harmony Health Center",
        rating: 4.6,
        reviewCount: 678,
        distance: 1.5,
        location: "654 Liễu Giai, Ba Đình, Hà Nội",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop",
        price: 200000,
        originalPrice: 240000,
        specialOffer: "Happy hour 14h-17h",
        isOpen: true,
        services: ["Massage chân", "Reflexology"]
    },
    {
        id: 5,
        name: "Imperial Spa Experience",
        rating: 4.8,
        reviewCount: 892,
        distance: 1.8,
        location: "987 Hoàng Hoa Thám, Ba Đình, Hà Nội",
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=300&h=200&fit=crop",
        price: 450000,
        originalPrice: 550000,
        specialOffer: "VIP package giảm 25%",
        isOpen: true,
        services: ["Spa cao cấp", "Massage hoàng gia"]
    },
    {
        id: 6,
        name: "Natural Touch Wellness",
        rating: 4.5,
        reviewCount: 445,
        distance: 2.1,
        location: "159 Yên Ninh, Ba Đình, Hà Nội",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
        price: 180000,
        originalPrice: 220000,
        specialOffer: "Học sinh giảm 15%",
        isOpen: true,
        services: ["Massage sinh viên", "Thư giãn cơ bản"]
    }
];

export const NearbyShops = ({ currentServiceLocation }: NearbyShopsProps) => {
    const getDirections = (shopLocation: string) => {
        const query = encodeURIComponent(shopLocation);
        window.open(`https://www.google.com/maps/search/${query}`, '_blank');
    };

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Spa & Massage gần đây
                </h2>
                <p className="text-xl text-muted-foreground">
                    Khám phá thêm {nearbyShops.length} địa điểm chất lượng trong khu vực
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyShops.map((shop) => (
                    <Card
                        key={shop.id}
                        className="group overflow-hidden hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 bg-white border-0"
                    >
                        <div className="relative">
                            {/* Shop Image */}
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={shop.image}
                                    alt={shop.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Status Badge */}
                                <div className="absolute top-3 left-3">
                                    <Badge className={shop.isOpen ? "bg-green-500 text-white" : "bg-red-500 text-white"}>
                                        {shop.isOpen ? "Đang mở" : "Đã đóng"}
                                    </Badge>
                                </div>

                                {/* Distance Badge */}
                                <div className="absolute top-3 right-3">
                                    <Badge className="bg-glow-primary text-white">
                                        {shop.distance}km
                                    </Badge>
                                </div>

                                {/* Special Offer */}
                                {shop.specialOffer && (
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <Badge className="bg-red-500 text-white text-xs w-full justify-center">
                                            🎉 {shop.specialOffer}
                                        </Badge>
                                    </div>
                                )}
                            </div>

                            <CardContent className="p-4 space-y-3">
                                {/* Shop Name */}
                                <div className="flex items-start justify-between">
                                    <h3 className="font-semibold text-foreground group-hover:text-glow-primary transition-colors line-clamp-1">
                                        {shop.name}
                                    </h3>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0 flex-shrink-0"
                                        onClick={() => getDirections(shop.location)}
                                    >
                                        <Navigation className="h-4 w-4 text-glow-primary" />
                                    </Button>
                                </div>

                                {/* Rating & Reviews */}
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-medium text-sm">{shop.rating}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        ({shop.reviewCount} đánh giá)
                                    </span>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4 flex-shrink-0" />
                                    <span className="line-clamp-1">{shop.location}</span>
                                </div>

                                {/* Services */}
                                <div className="flex flex-wrap gap-1">
                                    {shop.services.slice(0, 2).map((service, index) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                            {service}
                                        </Badge>
                                    ))}
                                    {shop.services.length > 2 && (
                                        <Badge variant="secondary" className="text-xs">
                                            +{shop.services.length - 2}
                                        </Badge>
                                    )}
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-glow-primary">
                                                {shop.price.toLocaleString()}đ
                                            </span>
                                            {shop.originalPrice > shop.price && (
                                                <span className="text-sm text-muted-foreground line-through">
                                                    {shop.originalPrice.toLocaleString()}đ
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Clock className="h-4 w-4" />
                                        <span>60 phút</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2">
                                    <Button
                                        variant="glow"
                                        size="sm"
                                        className="flex-1"
                                        disabled={!shop.isOpen}
                                    >
                                        {shop.isOpen ? "Đặt lịch" : "Đã đóng"}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => getDirections(shop.location)}
                                    >
                                        Chỉ đường
                                    </Button>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center pt-8">
                <Button variant="elegant" size="lg">
                    Xem tất cả spa trong khu vực
                </Button>
            </div>
        </div>
    );
};