import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceFilters } from "@/components/ServiceFilters";
import { ServiceGrid } from "@/components/ServiceGrid";

const Services = () => {
    const [filters, setFilters] = useState({
        location: "",
        priceRange: [0, 1000000],
        serviceType: "",
        rating: 0,
        distance: 50,
        availability: ""
    });

    return (
        <div className="min-h-screen bg-spa-warm">
            <Header />

            {/* Page Header */}
            <div className="bg-gradient-hero text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Massage tại nhà
                        </h1>
                        <p className="text-xl text-white/90 mb-6">
                            Tìm kiếm dịch vụ massage chuyên nghiệp gần bạn nhất
                        </p>
                        <div className="flex items-center gap-6 text-white/80">
                            <span>📍 1,200+ địa điểm</span>
                            <span>⭐ 4.8+ đánh giá</span>
                            <span>🚚 Dịch vụ tại nhà</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Column - Filters */}
                    <div className="lg:col-span-1">
                        <ServiceFilters
                            filters={filters}
                            onFiltersChange={setFilters}
                        />
                    </div>

                    {/* Right Column - Service Grid */}
                    <div className="lg:col-span-3">
                        <ServiceGrid filters={filters} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Services;