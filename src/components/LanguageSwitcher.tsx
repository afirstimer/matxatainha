import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; flag: string; name: string }[] = [
        { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt' },
        { code: 'en', flag: '🇺🇸', name: 'English' },
        { code: 'ko', flag: '🇰🇷', name: '한국어' }
    ];

    return (
        <div className="flex items-center gap-1">
            {languages.map((lang) => (
                <Button
                    key={lang.code}
                    variant={language === lang.code ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage(lang.code)}
                    className="p-2 h-8 w-8"
                    title={lang.name}
                >
                    <span className="text-sm">{lang.flag}</span>
                </Button>
            ))}
        </div>
    );
};