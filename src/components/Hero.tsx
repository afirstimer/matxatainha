import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/spa-hero.jpg";

export const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${heroImage})`
                }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
                        Thư giãn, Tái tạo,{" "}
                        <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                            Tỏa sáng
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                        Khám phá hơn 5,000 spa và salon hàng đầu Việt Nam với ưu đãi độc quyền
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button variant="glow" size="lg" className="text-lg px-8 py-6">
                            Đặt lịch ngay
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="elegant" size="lg" className="text-lg px-8 py-6">
                            Khám phá dịch vụ
                        </Button>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-2">5,000+</div>
                            <p className="text-gray-200">Spa & Salon</p>
                        </Card>
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-2">3</div>
                            <p className="text-gray-200">Thành phố lớn</p>
                        </Card>
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-2">5 phút</div>
                            <p className="text-gray-200">Đặt lịch nhanh</p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};