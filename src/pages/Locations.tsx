import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Clock } from "lucide-react";

const shops = [
    {
        id: 1,
        name: "Lotus Spa & Wellness",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=200&fit=crop",
        rating: 4.8,
        reviews: 245,
        address: "123 Trần Hưng Đạo, Quận 1, TP.HCM",
        phone: "028 3925 1234",
        priceRange: "200,000đ - 500,000đ",
        lat: 10.7769,
        lng: 106.7009,
        city: "TP. Hồ Chí Minh"
    },
    {
        id: 2,
        name: "Golden Hands Massage",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&h=200&fit=crop",
        rating: 4.7,
        reviews: 189,
        address: "45 Láng Hạ, Ba Đình, Hà Nội",
        phone: "024 3845 6789",
        priceRange: "180,000đ - 450,000đ",
        lat: 21.0245,
        lng: 105.8412,
        city: "Hà Nội"
    },
    {
        id: 3,
        name: "Zen Relaxation Center",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
        rating: 4.9,
        reviews: 312,
        address: "78 Nguyễn Văn Linh, Hải Châu, Đà Nẵng",
        phone: "0236 3567 890",
        priceRange: "150,000đ - 400,000đ",
        lat: 16.0471,
        lng: 108.2068,
        city: "Đà Nẵng"
    },
    {
        id: 4,
        name: "Royal Thai Massage",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 156,
        address: "234 Võ Văn Tần, Quận 3, TP.HCM",
        phone: "028 3925 5678",
        priceRange: "220,000đ - 520,000đ",
        lat: 10.7743,
        lng: 106.6954,
        city: "TP. Hồ Chí Minh"
    },
    {
        id: 5,
        name: "Serenity Spa House",
        image: "https://images.unsplash.com/photo-1562461653-70ae36d1c799?w=300&h=200&fit=crop",
        rating: 4.8,
        reviews: 278,
        address: "12 Phố Huế, Hoàn Kiếm, Hà Nội",
        phone: "024 3845 1234",
        priceRange: "200,000đ - 480,000đ",
        lat: 21.0227,
        lng: 105.8563,
        city: "Hà Nội"
    },
    {
        id: 6,
        name: "Ocean Breeze Spa",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop",
        rating: 4.7,
        reviews: 203,
        address: "156 Bạch Đằng, Thanh Khê, Đà Nẵng",
        phone: "0236 3678 901",
        priceRange: "170,000đ - 420,000đ",
        lat: 16.0598,
        lng: 108.2193,
        city: "Đà Nẵng"
    }
];

const Locations = () => {
    const [selectedShop, setSelectedShop] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="pt-20">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                            Địa điểm spa & massage
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Tìm kiếm spa và trung tâm massage tốt nhất gần bạn
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[800px]">
                        {/* Left Column - Shop List */}
                        <div className="overflow-y-auto pr-4 space-y-4">
                            {shops.map((shop) => (
                                <Card
                                    key={shop.id}
                                    className={`cursor-pointer transition-all duration-300 hover:shadow-glow ${selectedShop === shop.id ? 'border-glow-primary shadow-glow' : ''
                                        }`}
                                    onClick={() => setSelectedShop(shop.id)}
                                >
                                    <CardContent className="p-4">
                                        <div className="flex gap-4">
                                            <img
                                                src={shop.image}
                                                alt={shop.name}
                                                className="w-24 h-24 object-cover rounded-lg"
                                            />

                                            <div className="flex-1 space-y-2">
                                                <div className="flex items-start justify-between">
                                                    <h3 className="font-semibold text-lg text-foreground">
                                                        {shop.name}
                                                    </h3>
                                                    <div className="flex items-center gap-1 text-yellow-500">
                                                        <Star className="h-4 w-4 fill-current" />
                                                        <span className="text-sm font-medium">
                                                            {shop.rating} ({shop.reviews})
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    <MapPin className="h-4 w-4" />
                                                    {shop.address}
                                                </div>

                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    <Phone className="h-4 w-4" />
                                                    {shop.phone}
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-medium text-glow-primary">
                                                        {shop.priceRange}
                                                    </span>

                                                    <div className="flex items-center gap-1 text-green-600 text-sm">
                                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                                        Đang mở cửa
                                                    </div>
                                                </div>

                                                <div className="flex gap-2 pt-2">
                                                    <Button size="sm" variant="glow" className="flex-1">
                                                        Đặt lịch
                                                    </Button>
                                                    <Button size="sm" variant="outline" className="px-3">
                                                        <Phone className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Right Column - Map */}
                        <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                    Bản đồ tương tác
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    Bản đồ hiển thị vị trí các spa sẽ được tích hợp
                                </p>
                                <div className="text-sm text-gray-400">
                                    {selectedShop ? (
                                        <div>
                                            Đã chọn: {shops.find(s => s.id === selectedShop)?.name}
                                        </div>
                                    ) : (
                                        "Nhấp vào spa để xem vị trí trên bản đồ"
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Locations;