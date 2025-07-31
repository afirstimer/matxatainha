import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceImageGallery } from "@/components/ServiceImageGallery";
import { ServiceInfo } from "@/components/ServiceInfo";
import { ServicePricing } from "@/components/ServicePricing";
import { NearbyShops } from "@/components/NearbyShops";

const ServiceDetail = () => {
    const { id } = useParams();

    // Mock service data - in real app would fetch based on ID
    const service = {
        id: parseInt(id || "1"),
        name: "Mai Moon Spa - Massage Thần Kinh Chuyên Nghiệp",
        rating: 4.9,
        reviewCount: 1248,
        distance: 1.2,
        location: "123 Phố Huế, Ba Đình, Hà Nội",
        description: "Chuyên cung cấp dịch vụ massage thần kinh chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm. Sử dụng các kỹ thuật massage truyền thống kết hợp hiện đại để mang lại hiệu quả tốt nhất.",
        images: [
            "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
        ],
        features: [
            "Massage tại nhà 24/7",
            "Kỹ thuật viên chuyên nghiệp",
            "Thiết bị massage hiện đại",
            "Tư vấn miễn phí",
            "Cam kết hiệu quả",
            "Giá cả hợp lý"
        ],
        workingHours: {
            weekdays: "08:00 - 22:00",
            weekend: "08:00 - 23:00"
        },
        contact: {
            phone: "0123 456 789",
            address: "123 Phố Huế, Ba Đình, Hà Nội"
        },
        amenities: [
            "WiFi miễn phí",
            "Đồ uống complimentary",
            "Phòng VIP riêng tư",
            "Bãi đậu xe",
            "Thanh toán thẻ"
        ]
    };

    return (
        <div className="min-h-screen bg-spa-warm">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Images & Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <ServiceImageGallery images={service.images} serviceName={service.name} />
                        <ServiceInfo service={service} />
                    </div>

                    {/* Right Column - Pricing */}
                    <div className="lg:col-span-1">
                        <ServicePricing serviceId={service.id} />
                    </div>
                </div>

                {/* Nearby Shops */}
                <div className="mt-12">
                    <NearbyShops currentServiceLocation={service.location} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServiceDetail;