import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Phone, Wifi, Coffee, Car, CreditCard, Shield } from "lucide-react";

interface ServiceInfoProps {
    service: {
        name: string;
        rating: number;
        reviewCount: number;
        distance: number;
        location: string;
        description: string;
        features: string[];
        workingHours: {
            weekdays: string;
            weekend: string;
        };
        contact: {
            phone: string;
            address: string;
        };
        amenities: string[];
    };
}

const amenityIcons: { [key: string]: any } = {
    "WiFi miễn phí": Wifi,
    "Đồ uống complimentary": Coffee,
    "Phòng VIP riêng tư": Shield,
    "Bãi đậu xe": Car,
    "Thanh toán thẻ": CreditCard,
};

export const ServiceInfo = ({ service }: ServiceInfoProps) => {
    return (
        <div className="space-y-6">
            {/* Header Info */}
            <Card className="bg-white border-0 shadow-card">
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div className="space-y-2">
                            <CardTitle className="text-2xl font-bold text-foreground">
                                {service.name}
                            </CardTitle>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold text-lg">{service.rating}</span>
                                    <span className="text-muted-foreground">({service.reviewCount} đánh giá)</span>
                                </div>
                                <Badge variant="secondary" className="bg-green-100 text-green-700">
                                    {service.distance}km
                                </Badge>
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-glow-primary" />
                        <span>{service.location}</span>
                    </div>

                    <p className="text-foreground leading-relaxed">
                        {service.description}
                    </p>

                    {/* Features */}
                    <div>
                        <h3 className="font-semibold mb-3 text-foreground">Điểm nổi bật</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {service.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-glow-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Working Hours & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-0 shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Clock className="h-5 w-5 text-glow-primary" />
                            Giờ hoạt động
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Thứ 2 - Thứ 6:</span>
                            <span className="font-medium">{service.workingHours.weekdays}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Thứ 7 - Chủ nhật:</span>
                            <span className="font-medium">{service.workingHours.weekend}</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Phone className="h-5 w-5 text-glow-primary" />
                            Liên hệ
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Điện thoại:</span>
                            <span className="font-medium text-glow-primary">{service.contact.phone}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Địa chỉ:</span>
                            <span className="font-medium text-right flex-1 ml-4">{service.contact.address}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Amenities */}
            <Card className="bg-white border-0 shadow-card">
                <CardHeader>
                    <CardTitle className="text-lg">Tiện ích</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {service.amenities.map((amenity, index) => {
                            const IconComponent = amenityIcons[amenity] || Shield;
                            return (
                                <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-spa-warm">
                                    <IconComponent className="h-5 w-5 text-glow-primary" />
                                    <span className="text-sm text-foreground">{amenity}</span>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};