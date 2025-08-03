import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu, X, User, Sparkles } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import reelaxIcon from "@/assets/reelax.png";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const { t } = useLanguage();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="bg-spa-cream border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={reelaxIcon} alt="Reelax" className="w-10 h-10" />
                        <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                            Reelax
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-foreground hover:text-glow-primary transition-colors">
                            {t('nav.home')}
                        </Link>
                        <Link to="/services" className="text-foreground hover:text-glow-primary transition-colors">
                            {t('nav.services')}
                        </Link>
                        <Link to="/locations" className="text-foreground hover:text-glow-primary transition-colors">
                            {t('nav.locations')}
                        </Link>
                        <Link to="#offers" className="text-foreground hover:text-glow-primary transition-colors">
                            {t('nav.offers')}
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4" />
                            <span>{t('phone')}</span>
                        </div>

                        {user ? (
                            <div className="hidden md:flex items-center gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => navigate(user.role === 'user' ? '/user-dashboard' : '/shop-dashboard')}
                                >
                                    <User className="w-4 h-4 mr-2" />
                                    {user.name}
                                </Button>
                                <Button variant="ghost" onClick={handleLogout}>
                                    {t('nav.logout')}
                                </Button>
                            </div>
                        ) : (
                            <Button variant="outline" className="hidden md:inline-flex" asChild>
                                <Link to="/login">{t('nav.login')}</Link>
                            </Button>
                        )}

                        <LanguageSwitcher />

                        <Button variant="glow" size="sm" asChild>
                            <Link to="/dich-vu">{t('nav.book')}</Link>
                        </Button>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-border">
                        <nav className="flex flex-col space-y-4">
                            <Link to="/" className="text-foreground hover:text-glow-primary transition-colors">
                                {t('nav.home')}
                            </Link>
                            <Link to="/dich-vu" className="text-foreground hover:text-glow-primary transition-colors">
                                {t('nav.services')}
                            </Link>
                            <Link to="#locations" className="text-foreground hover:text-glow-primary transition-colors">
                                {t('nav.locations')}
                            </Link>
                            <Link to="#offers" className="text-foreground hover:text-glow-primary transition-colors">
                                {t('nav.offers')}
                            </Link>

                            <div className="pt-4 border-t border-border space-y-3">
                                {user ? (
                                    <>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                            onClick={() => navigate(user.role === 'user' ? '/user-dashboard' : '/shop-dashboard')}
                                        >
                                            <User className="w-4 h-4 mr-2" />
                                            {user.name}
                                        </Button>
                                        <Button variant="ghost" className="w-full" onClick={handleLogout}>
                                            {t('nav.logout')}
                                        </Button>
                                    </>
                                ) : (
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link to="/login">{t('nav.login')}</Link>
                                    </Button>
                                )}
                                <div className="mb-3">
                                    <LanguageSwitcher />
                                </div>
                                <Button variant="glow" className="w-full" asChild>
                                    <Link to="/dich-vu">{t('nav.book')}</Link>
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};