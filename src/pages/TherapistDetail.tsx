
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Verified, ArrowLeft } from "lucide-react";
import { ServiceImageGallery } from "@/components/ServiceImageGallery";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Mock data for therapist
const getTherapistData = (id: string) => ({
    id,
    name: "Quỳnh Anh",
    verified: true,
    rating: 4.8,
    reviewCount: 127,
    location: "Hà Nội",
    experience: "5 năm kinh nghiệm",
    images: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1494790108755-2616b9e06e15?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=400&fit=crop"
    ],
    description: "Tôi là Quỳnh Anh, với 5 năm kinh nghiệm trong lĩnh vực massage và spa. Tôi chuyên về các liệu pháp massage thư giãn, trị liệu và chăm sóc sức khỏe. Mục tiêu của tôi là mang đến cho khách hàng những trải nghiệm thư giãn tuyệt vời nhất.",
    services: [
        {
            id: 1,
            name: "Massage Chân",
            price: "470.000đ",
            duration: "60 phút",
            description: "Massage chân thư giãn, giúp giảm căng thẳng và mệt mỏi"
        },
        {
            id: 2,
            name: "Massage Đá Nóng",
            price: "470.000đ",
            duration: "60 phút",
            description: "Liệu pháp massage với đá nóng, thư giãn toàn thân"
        },
        {
            id: 3,
            name: "Massage Dầu + Giác Hơi",
            price: "470.000đ",
            duration: "60 phút",
            description: "Kết hợp massage dầu và giác hơi để thư giãn sâu"
        },
        {
            id: 4,
            name: "Massage Không Dầu",
            price: "470.000đ",
            duration: "60 phút",
            description: "Massage khô, phù hợp cho những người không thích dầu"
        },
        {
            id: 5,
            name: "Massage Aroma",
            price: "470.000đ",
            duration: "60 phút",
            description: "Massage với tinh dầu thơm, thư giãn tinh thần"
        },
        {
            id: 6,
            name: "Massage Thái",
            price: "470.000đ",
            duration: "60 phút",
            description: "Massage theo phong cách Thái Lan truyền thống"
        }
    ]
});

// Mock nearby therapists
const nearbyTherapists = [
    {
        id: "2",
        name: "Minh Châu",
        rating: 4.9,
        reviewCount: 89,
        location: "Hà Nội",
        distance: "1.2km",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
        services: ["Massage Chân", "Massage Thái"]
    },
    {
        id: "3",
        name: "Thu Hà",
        rating: 4.7,
        reviewCount: 156,
        location: "Hà Nội",
        distance: "1.8km",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        services: ["Massage Đá Nóng", "Massage Aroma"]
    },
    {
        id: "4",
        name: "Lan Anh",
        rating: 4.6,
        reviewCount: 203,
        location: "Hà Nội",
        distance: "2.1km",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e06e15?w=100&h=100&fit=crop",
        services: ["Massage Chân", "Massage Không Dầu"]
    }
];

export const TherapistDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState<number | null>(null);

    if (!id) {
        return <div>Therapist not found</div>;
    }

    const therapist = getTherapistData(id);

    const handleServiceSelect = (serviceId: number) => {
        setSelectedService(serviceId);
    };

    const handleBooking = () => {
        if (selectedService) {
            const service = therapist.services.find(s => s.id === selectedService);
            navigate("/booking-confirmation", {
                state: {
                    therapist: therapist.name,
                    service: service?.name,
                    price: service?.price,
                    duration: service?.duration
                }
            });
        }
    };

    const handleTherapistClick = (therapistId: string) => {
        navigate(`/therapist/${therapistId}`);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <Button
                        variant="ghost"
                        onClick={() => navigate(-1)}
                        className="mb-4"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Quay lại
                    </Button>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Dịch vụ tại nhà</span>
                        <span>•</span>
                        <span>Massage tại nhà</span>
                        <span>•</span>
                        <span>Massage tại nhà Hà Nội</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Images */}
                    <div>
                        <ServiceImageGallery
                            images={therapist.images}
                            serviceName={therapist.name}
                        />
                    </div>

                    {/* Right Column - Info */}
                    <div className="space-y-6">
                        {/* Therapist Info */}
                        <Card className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <h1 className="text-2xl font-bold">{therapist.name}</h1>
                                        {therapist.verified && (
                                            <Verified className="h-5 w-5 text-glow-primary" />
                                        )}
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span>{therapist.rating}</span>
                                            <span>({therapist.reviewCount} đánh giá)</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{therapist.location}</span>
                                    </div>

                                    <div className="text-sm text-muted-foreground">
                                        {therapist.experience}
                                    </div>
                                </div>

                                <Button
                                    className="bg-glow-primary hover:bg-glow-primary/90"
                                    disabled={!selectedService}
                                    onClick={handleBooking}
                                >
                                    Đặt ngay
                                </Button>
                            </div>

                            <p className="text-sm leading-relaxed">
                                {therapist.description}
                            </p>
                        </Card>

                        {/* Services */}
                        <Card className="p-6">
                            <h2 className="text-lg font-semibold mb-4">Spa & Massage tại nhà</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {therapist.services.map((service) => (
                                    <div
                                        key={service.id}
                                        className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedService === service.id
                                                ? "border-glow-primary bg-glow-primary/5"
                                                : "border-border hover:border-glow-primary/50"
                                            }`}
                                        onClick={() => handleServiceSelect(service.id)}
                                    >
                                        <h3 className="font-medium mb-1">{service.name}</h3>
                                        <div className="text-lg font-bold text-glow-primary mb-1">
                                            {service.price}
                                        </div>
                                        <div className="text-sm text-muted-foreground mb-2">
                                            {service.duration}
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            {service.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Nearby Therapists */}
                <div className="mt-12">
                    <h2 className="text-xl font-bold mb-6">Nhà trị liệu gần bạn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nearbyTherapists.map((therapist) => (
                            <Card
                                key={therapist.id}
                                className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                                onClick={() => handleTherapistClick(therapist.id)}
                            >
                                <div className="flex items-start gap-4">
                                    <img
                                        src={therapist.avatar}
                                        alt={therapist.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-medium">{therapist.name}</h3>
                                            <Verified className="h-4 w-4 text-glow-primary" />
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                            <span>{therapist.rating}</span>
                                            <span>({therapist.reviewCount})</span>
                                        </div>

                                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                                            <MapPin className="h-3 w-3" />
                                            <span>{therapist.location}</span>
                                            <span>•</span>
                                            <span>{therapist.distance}</span>
                                        </div>

                                        <div className="flex gap-1 flex-wrap">
                                            {therapist.services.slice(0, 2).map((service, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {service}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};