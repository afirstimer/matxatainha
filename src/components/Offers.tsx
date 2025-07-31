import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Percent, Clock, Star } from "lucide-react";

const offers = [
    {
        id: 1,
        title: "Ưu đãi khách hàng mới",
        discount: "30%",
        description: "Giảm giá 30% cho lần đặt dịch vụ đầu tiên",
        validUntil: "30/12/2024",
        minOrder: "200,000đ",
        isHot: true,
        category: "Khách mới"
    },
    {
        id: 2,
        title: "Combo massage + facial",
        discount: "50%",
        description: "Tiết kiệm 50% khi đặt combo massage và chăm sóc da",
        validUntil: "15/01/2025",
        minOrder: "500,000đ",
        isHot: true,
        category: "Combo"
    },
    {
        id: 3,
        title: "Happy Hour",
        discount: "25%",
        description: "Giảm 25% cho các dịch vụ từ 14h-17h hàng ngày",
        validUntil: "Thường xuyên",
        minOrder: "150,000đ",
        isHot: false,
        category: "Giờ vàng"
    },
    {
        id: 4,
        title: "Cashback VIP",
        discount: "15%",
        description: "Hoàn tiền 15% cho khách hàng VIP sau mỗi dịch vụ",
        validUntil: "31/12/2024",
        minOrder: "300,000đ",
        isHot: false,
        category: "VIP"
    }
];

export const Offers = () => {
    return (
        <section id="offers" className="py-20 bg-spa-warm">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Ưu đãi độc quyền
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tiết kiệm đến 50% với các chương trình khuyến mãi hấp dẫn
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {offers.map((offer) => (
                        <Card
                            key={offer.id}
                            className="group relative overflow-hidden hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0"
                        >
                            <CardHeader className="relative">
                                {offer.isHot && (
                                    <Badge className="absolute top-0 right-0 bg-red-500 text-white animate-glow-pulse">
                                        🔥 HOT
                                    </Badge>
                                )}
                                <Badge variant="secondary" className="w-fit mb-2">
                                    {offer.category}
                                </Badge>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-glow-primary mb-2">
                                        -{offer.discount}
                                    </div>
                                    <CardTitle className="text-lg text-foreground">
                                        {offer.title}
                                    </CardTitle>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <p className="text-sm text-muted-foreground text-center">
                                    {offer.description}
                                </p>

                                <div className="space-y-2 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-3 w-3" />
                                        <span>Hết hạn: {offer.validUntil}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Gift className="h-3 w-3" />
                                        <span>Đơn tối thiểu: {offer.minOrder}</span>
                                    </div>
                                </div>

                                <Button
                                    className="w-full"
                                    variant={offer.isHot ? "glow" : "elegant"}
                                    size="sm"
                                >
                                    Sử dụng ngay
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Special Promotion Banner */}
                <Card className="bg-gradient-accent text-white border-0 shadow-elegant">
                    <CardContent className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">
                                    🎉 Ưu đãi đặc biệt cuối năm
                                </h3>
                                <p className="text-xl mb-4 text-white/90">
                                    Giảm giá cực sốc đến 70% cho tất cả dịch vụ massage và spa
                                </p>
                                <ul className="space-y-2 text-white/80">
                                    <li className="flex items-center gap-2">
                                        <Star className="h-4 w-4" />
                                        Áp dụng cho tất cả dịch vụ
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Star className="h-4 w-4" />
                                        Không giới hạn số lần sử dụng
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Star className="h-4 w-4" />
                                        Kết hợp với cashback VIP
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center">
                                <div className="text-6xl font-bold mb-4 animate-glow-pulse">
                                    70%
                                </div>
                                <p className="text-xl mb-6">Giảm giá tối đa</p>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-glow-primary hover:bg-white/90 font-bold"
                                >
                                    <Percent className="mr-2 h-5 w-5" />
                                    Nhận ưu đãi ngay
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};