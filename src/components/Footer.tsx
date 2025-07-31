import { Sparkles, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    return (
        <footer className="bg-foreground text-background">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-8 w-8 text-glow-primary" />
                            <span className="text-2xl font-bold text-glow-primary">
                                Glow
                            </span>
                        </div>
                        <p className="text-background/80">
                            Nền tảng đặt lịch spa, massage và làm đẹp hàng đầu Việt Nam với hơn 5,000 đối tác uy tín.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="ghost" size="sm" className="text-background/80 hover:text-glow-primary">
                                <Facebook className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-background/80 hover:text-glow-primary">
                                <Instagram className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-background/80 hover:text-glow-primary">
                                <Youtube className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-glow-primary">Dịch vụ</h3>
                        <ul className="space-y-2 text-background/80">
                            <li><a href="#" className="hover:text-glow-primary transition-colors">Massage tại nhà</a></li>
                            <li><a href="#" className="hover:text-glow-primary transition-colors">Chăm sóc da</a></li>
                            <li><a href="#" className="hover:text-glow-primary transition-colors">Thẩm mỹ viện</a></li>
                            <li><a href="#" className="hover:text-glow-primary transition-colors">Spa & Wellness</a></li>
                            <li><a href="#" className="hover:text-glow-primary transition-colors">Làm móng</a></li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-glow-primary">Địa điểm</h3>
                        <ul className="space-y-2 text-background/80">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Hà Nội</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Đà Nẵng</span>
                            </li>
                            <li><a href="#" className="hover:text-glow-primary transition-colors">Xem tất cả địa điểm</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-glow-primary">Liên hệ</h3>
                        <ul className="space-y-2 text-background/80">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>1900 xxxx</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>support@glow.vn</span>
                            </li>
                            <li><a href="#" className="hover:text-glow-primary transition-colors">Tuyển dụng</a></li>
                            <li><a href="#" className="hover:text-glow-primary transition-colors">Đối tác</a></li>
                            <li><a href="#" className="hover:text-glow-primary transition-colors">Chính sách</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-background/20 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-background/60 text-sm">
                            © 2024 Glow Vietnam. Tất cả quyền được bảo lưu.
                        </p>
                        <div className="flex gap-6 text-sm text-background/60">
                            <a href="#" className="hover:text-glow-primary transition-colors">Điều khoản</a>
                            <a href="#" className="hover:text-glow-primary transition-colors">Bảo mật</a>
                            <a href="#" className="hover:text-glow-primary transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};