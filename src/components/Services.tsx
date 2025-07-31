import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import massageIcon from "@/assets/massage-icon.jpg";
import facialIcon from "@/assets/facial-icon.jpg";
import beautyIcon from "@/assets/beauty-icon.jpg";

const services = [
    {
        id: 1,
        title: "Massage & Thư giãn",
        description: "Dịch vụ massage chuyên nghiệp tại nhà và spa, giúp thư giãn toàn diện",
        image: massageIcon,
        price: "Từ 200,000đ",
        rating: 4.8,
        isPopular: true,
        features: ["Massage tại nhà", "Đa dạng kỹ thuật", "Thời gian linh hoạt"]
    },
    {
        id: 2,
        title: "Chăm sóc da mặt",
        description: "Các liệu trình chăm sóc da chuyên sâu với công nghệ hiện đại",
        image: facialIcon,
        price: "Từ 150,000đ",
        rating: 4.9,
        isPopular: false,
        features: ["Công nghệ tiên tiến", "Sản phẩm cao cấp", "Tư vấn chuyên môn"]
    },
    {
        id: 3,
        title: "Làm đẹp & Aesthetic",
        description: "Dịch vụ làm đẹp toàn diện từ các phòng khám thẩm mỹ hàng đầu",
        image: beautyIcon,
        price: "Từ 300,000đ",
        rating: 4.7,
        isPopular: true,
        features: ["Phòng khám uy tín", "Bác sĩ chuyên khoa", "Hiệu quả bền vững"]
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-20 bg-spa-warm">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Dịch vụ nổi bật
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Khám phá các dịch vụ chăm sóc sức khỏe và sắc đẹp tốt nhất với giá ưu đãi
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card
                            key={service.id}
                            className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0"
                        >
                            <CardHeader className="relative">
                                {service.isPopular && (
                                    <Badge className="absolute top-4 right-4 bg-glow-primary text-white">
                                        Phổ biến
                                    </Badge>
                                )}
                                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardTitle className="text-xl font-bold text-foreground">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-glow-primary">
                                        {service.price}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-400">★</span>
                                        <span className="font-semibold">{service.rating}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-glow-primary" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Button className="w-full" variant="glow">
                                    Đặt lịch ngay
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};