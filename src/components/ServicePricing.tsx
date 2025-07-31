import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Calendar, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ServicePricingProps {
    serviceId: number;
}

const serviceOptions = [
    {
        id: 1,
        name: "Massage đá nóng",
        price: 470000,
        originalPrice: 550000,
        duration: 60,
        description: "Massage với đá nóng thiên nhiên, thư giãn cơ bắp và giảm căng thẳng",
        isPopular: true,
        discount: 15
    },
    {
        id: 2,
        name: "Massage thần kinh",
        price: 420000,
        originalPrice: 480000,
        duration: 75,
        description: "Massage chuyên sâu cho hệ thần kinh, giảm đau mỏi vai gáy",
        isPopular: false,
        discount: 13
    },
    {
        id: 3,
        name: "Massage toàn thân",
        price: 380000,
        originalPrice: 450000,
        duration: 90,
        description: "Massage toàn thân thư giãn, tái tạo năng lượng",
        isPopular: true,
        discount: 16
    },
    {
        id: 4,
        name: "Massage cổ vai gáy",
        price: 280000,
        originalPrice: 320000,
        duration: 45,
        description: "Tập trung vào vùng cổ vai gáy, giảm đau nhức hiệu quả",
        isPopular: false,
        discount: 13
    },
    {
        id: 5,
        name: "Massage chân reflexology",
        price: 220000,
        originalPrice: 260000,
        duration: 40,
        description: "Massage chân theo phương pháp reflexology, cân bằng cơ thể",
        isPopular: false,
        discount: 15
    }
];

const timeSlots = [
    "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00", "19:30", "21:00"
];

export const ServicePricing = ({ serviceId }: ServicePricingProps) => {
    const { toast } = useToast();
    const [selectedService, setSelectedService] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [favorites, setFavorites] = useState<number[]>([]);

    const toggleFavorite = (serviceOptionId: number) => {
        setFavorites(prev =>
            prev.includes(serviceOptionId)
                ? prev.filter(id => id !== serviceOptionId)
                : [...prev, serviceOptionId]
        );
    };

    const bookService = () => {
        if (!selectedService || !selectedTime || !selectedDate) {
            toast({
                title: "Vui lòng chọn đầy đủ thông tin",
                description: "Hãy chọn dịch vụ, ngày và giờ để đặt lịch",
                variant: "destructive",
            });
            return;
        }

        const service = serviceOptions.find(s => s.id === selectedService);
        toast({
            title: "Đặt lịch thành công! 🎉",
            description: `Bạn đã đặt lịch ${service?.name} vào ${selectedDate} lúc ${selectedTime}`,
        });
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="space-y-6">
            {/* Service Options */}
            <Card className="bg-white border-0 shadow-card sticky top-4">
                <CardHeader>
                    <CardTitle className="text-xl text-foreground">Chọn dịch vụ</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    {serviceOptions.map((option) => (
                        <div
                            key={option.id}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${selectedService === option.id
                                    ? "border-glow-primary bg-glow-primary/5"
                                    : "border-border hover:border-glow-primary/30"
                                }`}
                            onClick={() => setSelectedService(option.id)}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-foreground">{option.name}</h3>
                                        {option.isPopular && (
                                            <Badge className="bg-red-500 text-white text-xs">HOT</Badge>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {option.description}
                                    </p>
                                </div>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0 ml-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(option.id);
                                    }}
                                >
                                    <Heart
                                        className={`h-4 w-4 ${favorites.includes(option.id)
                                                ? "fill-red-500 text-red-500"
                                                : "text-gray-400"
                                            }`}
                                    />
                                </Button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-glow-primary">
                                        {option.price.toLocaleString()}đ
                                    </span>
                                    {option.originalPrice > option.price && (
                                        <span className="text-sm text-muted-foreground line-through">
                                            {option.originalPrice.toLocaleString()}đ
                                        </span>
                                    )}
                                    {option.discount > 0 && (
                                        <Badge className="bg-green-500 text-white text-xs">
                                            -{option.discount}%
                                        </Badge>
                                    )}
                                </div>

                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4" />
                                    <span>{option.duration} phút</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Date Selection */}
                    <div className="space-y-2 pt-4 border-t">
                        <label className="text-sm font-medium text-foreground">Chọn ngày</label>
                        <input
                            type="date"
                            min={today}
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-glow-primary focus:border-transparent"
                        />
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Chọn giờ</label>
                            <div className="grid grid-cols-3 gap-2">
                                {timeSlots.map((time) => (
                                    <Button
                                        key={time}
                                        variant={selectedTime === time ? "default" : "outline"}
                                        size="sm"
                                        className={selectedTime === time ? "bg-glow-primary hover:bg-glow-primary/90" : ""}
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        {time}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Booking Summary */}
                    {selectedService && selectedDate && selectedTime && (
                        <div className="p-4 bg-spa-warm rounded-lg mt-4">
                            <h4 className="font-semibold mb-2 text-foreground">Thông tin đặt lịch</h4>
                            <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Dịch vụ:</span>
                                    <span className="font-medium">
                                        {serviceOptions.find(s => s.id === selectedService)?.name}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Ngày:</span>
                                    <span className="font-medium">{selectedDate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Giờ:</span>
                                    <span className="font-medium">{selectedTime}</span>
                                </div>
                                <div className="flex justify-between pt-2 border-t border-border">
                                    <span className="text-muted-foreground">Tổng tiền:</span>
                                    <span className="font-bold text-glow-primary text-lg">
                                        {serviceOptions.find(s => s.id === selectedService)?.price.toLocaleString()}đ
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Booking Button */}
                    <Button
                        variant="glow"
                        className="w-full"
                        size="lg"
                        onClick={bookService}
                        disabled={!selectedService || !selectedDate || !selectedTime}
                    >
                        <Calendar className="mr-2 h-5 w-5" />
                        Đặt lịch ngay
                    </Button>

                    {/* Contact Info */}
                    <div className="text-center pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-2">
                            Cần hỗ trợ? Gọi ngay
                        </p>
                        <Button variant="outline" size="sm">
                            📞 0123 456 789
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};