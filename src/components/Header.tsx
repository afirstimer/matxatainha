import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Phone } from "lucide-react";

export const Header = () => {
    return (
        <header className="bg-spa-cream border-b border-border">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-8 w-8 text-glow-primary" />
                        <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                            Reelax
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="/services" className="text-foreground hover:text-glow-primary transition-colors">
                            Dịch vụ
                        </a>
                        <a href="#locations" className="text-foreground hover:text-glow-primary transition-colors">
                            Địa điểm
                        </a>
                        <a href="#offers" className="text-foreground hover:text-glow-primary transition-colors">
                            Ưu đãi
                        </a>
                        <a href="#about" className="text-foreground hover:text-glow-primary transition-colors">
                            Về chúng tôi
                        </a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4" />
                            <span>1900 xxxx</span>
                        </div>
                        <Button variant="glow" size="sm">
                            Đặt lịch ngay
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};