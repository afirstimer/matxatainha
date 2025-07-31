import React, { createContext, useContext, useState } from 'react';

export type Language = 'vi' | 'en' | 'ko';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    vi: {
        'nav.home': 'Trang chủ',
        'nav.services': 'Dịch vụ',
        'nav.locations': 'Địa điểm',
        'nav.offers': 'Ưu đãi',
        'nav.login': 'Đăng nhập',
        'nav.logout': 'Đăng xuất',
        'nav.book': 'Đặt lịch ngay',
        'hero.title': 'Thư giãn, Tái tạo, Tỏa sáng',
        'hero.subtitle': 'Khám phá những dịch vụ làm đẹp và chăm sóc sức khỏe tốt nhất tại các spa và salon hàng đầu',
        'hero.explore': 'Khám phá dịch vụ',
        'hero.stats.spas': 'Spa & Salon',
        'hero.stats.cities': 'Thành phố lớn',
        'hero.stats.booking': 'Đặt lịch nhanh',
        'services.title': 'Dịch vụ nổi bật',
        'services.subtitle': 'Khám phá các dịch vụ làm đẹp và chăm sóc sức khỏe hàng đầu',
        'phone': '1900 xxxx'
    },
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.locations': 'Locations',
        'nav.offers': 'Offers',
        'nav.login': 'Login',
        'nav.logout': 'Logout',
        'nav.book': 'Book Now',
        'hero.title': 'Relax, Rejuvenate, Glow',
        'hero.subtitle': 'Discover the best beauty and wellness services at top spas and salons',
        'hero.explore': 'Explore Services',
        'hero.stats.spas': 'Spas & Salons',
        'hero.stats.cities': 'Major Cities',
        'hero.stats.booking': 'Quick Booking',
        'services.title': 'Featured Services',
        'services.subtitle': 'Explore top beauty and wellness services',
        'phone': '1900 xxxx'
    },
    ko: {
        'nav.home': '홈',
        'nav.services': '서비스',
        'nav.locations': '위치',
        'nav.offers': '할인',
        'nav.login': '로그인',
        'nav.logout': '로그아웃',
        'nav.book': '지금 예약',
        'hero.title': '휴식, 재생, 빛남',
        'hero.subtitle': '최고의 스파와 살롱에서 최고의 뷰티 및 웰니스 서비스를 발견하세요',
        'hero.explore': '서비스 둘러보기',
        'hero.stats.spas': '스파 & 살롱',
        'hero.stats.cities': '주요 도시',
        'hero.stats.booking': '빠른 예약',
        'services.title': '추천 서비스',
        'services.subtitle': '최고의 뷰티 및 웰니스 서비스 둘러보기',
        'phone': '1900 xxxx'
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('vi');

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};