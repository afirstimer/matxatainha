import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Heart, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Filters {
    location: string;
    priceRange: number[];
    serviceType: string;
    rating: number;
    distance: number;
    availability: string;
}

interface ServiceGridProps {
    filters: Filters;
}

// Mock service data
const services = [
    {
        id: 1,
        name: "Spa Thiên Đường - Massage Thần Kinh",
        image: "/placeholder.svg",
        rating: 4.9,
        reviewCount: 1248,
        price: 280000,
        originalPrice: 350000,
        distance: 1.2,
        location: "Ba Đình, Hà Nội",
        serviceType: "massage-than",
        isBookable: true,
        isFavorite: false,
        discount: 20,
        features: ["Tại nhà", "Chuyên nghiệp", "Giá tốt"],
        duration: 90,
        availableSlots: ["14:00", "15:30", "17:00", "19:00"]
    },
    {
        id: 2,
        name: "Relax Spa - Massage Cổ Vai Gáy",
        image: "/placeholder.svg",
        rating: 4.8,
        reviewCount: 856,
        price: 220000,
        originalPrice: 280000,
        distance: 2.1,
        location: "Hoàn Kiếm, Hà Nội",
        serviceType: "massage-co",
        isBookable: true,
        isFavorite: true,
        discount: 21,
        features: ["Chuyên sâu", "Hiệu quả", "Tư vấn"],
        duration: 60,
        availableSlots: ["13:00", "14:30", "16:00", "18:30"]
    },
    {
        id: 3,
        name: "Golden Hands - Massage Toàn Thân",
        image: "/placeholder.svg",
        rating: 4.7,
        reviewCount: 623,
        price: 320000,
        originalPrice: 400000,
        distance: 0.8,
        location: "Đống Đa, Hà Nội",
        serviceType: "massage-whole",
        isBookable: true,
        isFavorite: false,
        discount: 20,
        features: ["Cao cấp", "Dịch vụ tốt", "Phòng VIP"],
        duration: 120,
        availableSlots: ["15:00", "17:30", "20:00"]
    },
    {
        id: 4,
        name: "Harmony Spa - Massage Bầu Chuyên Nghiệp",
        image: "/placeholder.svg",
        rating: 4.9,
        reviewCount: 445,
        price: 380000,
        originalPrice: 450000,
        distance: 3.2,
        location: "Cầu Giấy, Hà Nội",
        serviceType: "massage-bau",
        isBookable: true,
        isFavorite: false,
        discount: 16,
        features: ["An toàn", "Chuyên khoa", "Tư vấn bác sĩ"],
        duration: 75,
        availableSlots: ["10:00", "14:00", "16:30"]
    },
    {
        id: 5,
        name: "Zen Garden - Vật Lý Trị Liệu",
        image: "/placeholder.svg",
        rating: 4.6,
        reviewCount: 789,
        price: 250000,
        originalPrice: 300000,
        distance: 1.8,
        location: "Ba Đình, Hà Nội",
        serviceType: "massage-therapy",
        isBookable: true,
        isFavorite: true,
        discount: 17,
        features: ["Y tế", "Chữa bệnh", "Bác sĩ"],
        duration: 90,
        availableSlots: ["09:00", "11:00", "14:00", "16:00"]
    },
    {
        id: 6,
        name: "Foot Paradise - Massage Chân Reflexology",
        image: "/placeholder.svg",
        rating: 4.5,
        reviewCount: 567,
        price: 180000,
        originalPrice: 220000,
        distance: 2.7,
        location: "Hoàn Kiếm, Hà Nội",
        serviceType: "massage-foot",
        isBookable: true,
        isFavorite: false,
        discount: 18,
        features: ["Thư giãn", "Reflexology", "Giá rẻ"],
        duration: 45,
        availableSlots: ["12:00", "15:00", "17:00", "19:30"]
    }
];

export const ServiceGrid = ({ filters }: ServiceGridProps) => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [favorites, setFavorites] = useState<number[]>([2, 5]);

    // Filter services based on filters
    const filteredServices = services.filter(service => {
        const matchesLocation = !filters.location || service.location.toLowerCase().includes(filters.location);
        const matchesPrice = service.price >= filters.priceRange[0] && service.price <= filters.priceRange[1];
        const matchesServiceType = !filters.serviceType || service.serviceType === filters.serviceType;
        const matchesRating = service.rating >= filters.rating;
        const matchesDistance = service.distance <= filters.distance;

        return matchesLocation && matchesPrice && matchesServiceType && matchesRating && matchesDistance;
    });

    const toggleFavorite = (serviceId: number) => {
        setFavorites(prev =>
            prev.includes(serviceId)
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        );
        toast({
            title: favorites.includes(serviceId) ? "Đã xóa khỏi yêu thích" : "Đã thêm vào yêu thích",
            duration: 2000,
        });
    };

    const bookService = (serviceId: number) => {
        navigate(`/dich-vu/${serviceId}`);
    };

    return (
        <div className="space-y-6">
            {/* Results Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">
                        Kết quả tìm kiếm
                    </h2>
                    <p className="text-muted-foreground">
                        Tìm thấy {filteredServices.length} dịch vụ phù hợp
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sắp xếp:</span>
                    <select className="border border-border rounded-md px-3 py-1 text-sm bg-background">
                        <option value="distance">Khoảng cách</option>
                        <option value="rating">Đánh giá cao nhất</option>
                        <option value="price-low">Giá thấp đến cao</option>
                        <option value="price-high">Giá cao đến thấp</option>
                    </select>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                    <Card
                        key={service.id}
                        className="group overflow-hidden hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 bg-white border-0"
                    >
                        <div className="relative">
                            {/* Service Image */}
                            <div className="aspect-[4/3] bg-gradient-card relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Overlay Badges */}
                                <div className="absolute top-3 left-3 flex flex-col gap-2">
                                    {service.discount > 0 && (
                                        <Badge className="bg-red-500 text-white">
                                            -{service.discount}%
                                        </Badge>
                                    )}
                                    {service.distance <= 2 && (
                                        <Badge className="bg-green-500 text-white">
                                            <Zap className="h-3 w-3 mr-1" />
                                            Gần
                                        </Badge>
                                    )}
                                </div>

                                {/* Favorite Button */}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="absolute top-3 right-3 h-8 w-8 p-0 bg-white/80 hover:bg-white"
                                    onClick={() => toggleFavorite(service.id)}
                                >
                                    <Heart
                                        className={`h-4 w-4 ${favorites.includes(service.id)
                                                ? "fill-red-500 text-red-500"
                                                : "text-gray-600"
                                            }`}
                                    />
                                </Button>
                            </div>

                            <CardContent className="p-4 space-y-3">
                                {/* Service Name */}
                                <h3 className="font-semibold text-foreground group-hover:text-glow-primary transition-colors line-clamp-2">
                                    {service.name}
                                </h3>

                                {/* Rating & Reviews */}
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-medium text-sm">{service.rating}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        ({service.reviewCount} đánh giá)
                                    </span>
                                </div>

                                {/* Location & Distance */}
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    <span>{service.location}</span>
                                    <span>•</span>
                                    <span className="font-medium text-glow-primary">{service.distance}km</span>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1">
                                    {service.features.slice(0, 3).map((feature, index) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Duration & Availability */}
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{service.duration} phút</span>
                                    </div>
                                    <span>{service.availableSlots.length} slot khả dụng</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl font-bold text-glow-primary">
                                                {service.price.toLocaleString()}đ
                                            </span>
                                            {service.originalPrice > service.price && (
                                                <span className="text-sm text-muted-foreground line-through">
                                                    {service.originalPrice.toLocaleString()}đ
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <Button
                                    className="w-full"
                                    variant="glow"
                                    onClick={() => bookService(service.id)}
                                >
                                    Đặt lịch ngay
                                </Button>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-muted-foreground mb-4">
                        <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                        <h3 className="text-xl font-semibold mb-2">Không tìm thấy dịch vụ phù hợp</h3>
                        <p>Thử điều chỉnh bộ lọc để tìm thêm dịch vụ</p>
                    </div>
                    <Button variant="glow" onClick={() => window.location.reload()}>
                        Xem tất cả dịch vụ
                    </Button>
                </div>
            )}
        </div>
    );
};