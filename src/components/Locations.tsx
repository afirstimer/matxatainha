import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
    {
        id: 1,
        city: "Hà Nội",
        districts: ["Ba Đình", "Hoàn Kiếm", "Đống Đa", "Cầu Giấy"],
        totalSpas: 1500,
        avgPrice: "250,000đ",
        isAvailable: true
    },
    {
        id: 2,
        city: "TP. Hồ Chí Minh",
        districts: ["Quận 1", "Quận 3", "Quận 7", "Bình Thạnh"],
        totalSpas: 2200,
        avgPrice: "280,000đ",
        isAvailable: true
    },
    {
        id: 3,
        city: "Đà Nẵng",
        districts: ["Hải Châu", "Thanh Khê", "Ngũ Hành Sơn", "Liên Chiểu"],
        totalSpas: 800,
        avgPrice: "220,000đ",
        isAvailable: true
    }
];

export const Locations = () => {
    return (
        <section id="locations" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Có mặt tại các thành phố lớn
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Dịch vụ massage tại nhà chỉ trong 5 phút đặt lịch, có mặt khắp Việt Nam
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {locations.map((location) => (
                        <Card
                            key={location.id}
                            className="group hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-0"
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <MapPin className="h-6 w-6 text-glow-primary" />
                                    {location.city}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <div className="text-muted-foreground">Số lượng spa</div>
                                        <div className="font-bold text-glow-primary">{location.totalSpas}+</div>
                                    </div>
                                    <div>
                                        <div className="text-muted-foreground">Giá từ</div>
                                        <div className="font-bold text-glow-primary">{location.avgPrice}</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-muted-foreground mb-2">Khu vực phục vụ:</div>
                                    <div className="flex flex-wrap gap-1">
                                        {location.districts.map((district, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs bg-glow-secondary/20 text-glow-primary rounded-full"
                                            >
                                                {district}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-green-600">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    Dịch vụ tại nhà có sẵn
                                </div>

                                <Button className="w-full" variant="glow">
                                    Xem spa tại {location.city}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Quick Booking CTA */}
                <Card className="bg-gradient-hero text-white border-0 shadow-elegant">
                    <CardContent className="p-8 text-center">
                        <h3 className="text-3xl font-bold mb-4">
                            Massage tại nhà - Chỉ 5 phút đặt lịch!
                        </h3>
                        <p className="text-xl mb-6 text-white/90">
                            Thư giãn ngay tại nhà với dịch vụ massage chuyên nghiệp
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button variant="secondary" size="lg" className="bg-white text-glow-primary hover:bg-white/90">
                                <Clock className="mr-2 h-5 w-5" />
                                Đặt lịch nhanh
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                                <Phone className="mr-2 h-5 w-5" />
                                Gọi tư vấn: 1900 xxxx
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};