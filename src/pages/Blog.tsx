import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
    const { t } = useLanguage();

    const blogPosts = [
        {
            id: 1,
            title: {
                vi: "Top 3 Địa Chỉ Massage Thư Giãn Xông Hơi Tốt Nhất Nghĩa Đô, Hà Nội",
                en: "Top 3 Best Relaxing Massage and Sauna Locations in Nghia Do, Hanoi",
                ko: "하노이 응이아도에서 최고의 릴렉싱 마사지 및 사우나 장소 3곳"
            },
            excerpt: {
                vi: "Khám phá 3 spa massage xông hơi chất lượng hàng đầu tại Nghĩa Đô. Đặt lịch dễ dàng tại hanoihomemassage.com, hanoimassail.com, glowvietnam.com – 0966005711.",
                en: "Discover 3 top-quality spa massage and sauna locations in Nghia Do. Easy booking at hanoihomemassage.com, hanoimassail.com, glowvietnam.com – 0966005711.",
                ko: "응이아도의 최고 품질 스파 마사지 및 사우나 장소 3곳을 발견하세요. hanoihomemassage.com, hanoimassail.com, glowvietnam.com에서 쉽게 예약 – 0966005711."
            },
            image: "/placeholder.svg",
            date: "2025-03-21",
            category: "Massage",
            readTime: "5 phút đọc"
        },
        {
            id: 2,
            title: {
                vi: "Hướng dẫn nhận đơn massage tại nhà, khách sạn",
                en: "Guide to Receiving Home and Hotel Massage Orders",
                ko: "홈 및 호텔 마사지 주문 받기 가이드"
            },
            excerpt: {
                vi: "Tiện tour cao, xong tour nào tra tiền tour này, lành mạnh, uy tín, tâm tâm, có khách 24/7",
                en: "High convenience tours, immediate payment after tours, healthy, reputable, caring, with 24/7 customer support",
                ko: "높은 편의성 투어, 투어 후 즉시 결제, 건강하고 신뢰할 수 있으며 배려심 있는 24/7 고객 지원"
            },
            image: "/placeholder.svg",
            date: "2025-03-08",
            category: "Hướng dẫn",
            readTime: "7 phút đọc"
        },
        {
            id: 3,
            title: {
                vi: "Top 3 Địa Chỉ Massage Thư Giãn Xông Hơi Tốt Nhất Khuông Đình, Hà Nội",
                en: "Top 3 Best Relaxing Massage and Sauna Locations in Khuong Dinh, Hanoi",
                ko: "하노이 쿠옹딘에서 최고의 릴렉싱 마사지 및 사우나 장소 3곳"
            },
            excerpt: {
                vi: "Khám phá 3 spa massage thư giãn, xông hơi chất lượng tại Khuông Đình. Đặt lịch ngay qua hanoihomemassage.com, hanoimassail.com, glowvietnam.com – 0966005711.",
                en: "Discover 3 quality relaxing spa massage and sauna locations in Khuong Dinh. Book now via hanoihomemassage.com, hanoimassail.com, glowvietnam.com – 0966005711.",
                ko: "쿠옹딘의 고품질 릴렉싱 스파 마사지 및 사우나 장소 3곳을 발견하세요. hanoihomemassage.com, hanoimassail.com, glowvietnam.com에서 지금 예약 – 0966005711."
            },
            image: "/placeholder.svg",
            date: "2025-07-31",
            category: "Massage",
            readTime: "6 phút đọc"
        },
        {
            id: 4,
            title: {
                vi: "Hướng Sen Health Care Trung Tâm Massage Chuyên Nghiệp Tại Hà Nội",
                en: "Huong Sen Health Care Professional Massage Center in Hanoi",
                ko: "하노이의 전문 마사지 센터 Huong Sen Health Care"
            },
            excerpt: {
                vi: "Bạn đang muốn tìm hiểu chi tiết về dịch vụ của Hướng Sen Health Care? Hãy cùng Glow Massage review trung tâm này để có lựa chọn phù hợp trước khi đặt lịch nhé",
                en: "Want to learn more about Huong Sen Health Care services? Let's review this center with Glow Massage to make the right choice before booking",
                ko: "Huong Sen Health Care 서비스에 대해 더 자세히 알고 싶으신가요? 예약 전에 올바른 선택을 하기 위해 Glow Massage와 함께 이 센터를 리뷰해보겠습니다"
            },
            image: "/placeholder.svg",
            date: "2025-07-31",
            category: "Review",
            readTime: "8 phút đọc"
        },
        {
            id: 5,
            title: {
                vi: "Spa Massage Đá Nóng Tại Nhà Hà Nội - Dịch Vụ Chuyên Nghiệp",
                en: "Hot Stone Massage Spa at Home in Hanoi - Professional Service",
                ko: "하노이 홈 핫스톤 마사지 스파 - 전문 서비스"
            },
            excerpt: {
                vi: "Trải nghiệm spa massage đá nóng tại nhà với dịch vụ chuyên nghiệp. Thư giãn hoàn toàn trong không gian riêng tư của bạn.",
                en: "Experience professional hot stone massage spa at home. Complete relaxation in your private space.",
                ko: "집에서 전문 핫스톤 마사지 스파를 경험하세요. 당신만의 프라이빗 공간에서 완전한 휴식을 취하세요."
            },
            image: "/placeholder.svg",
            date: "2025-07-25",
            category: "Spa",
            readTime: "6 phút đọc"
        },
        {
            id: 6,
            title: {
                vi: "Massage Body Tại Nhà Hà Nội - Thư Giãn Tối Đa",
                en: "Body Massage at Home in Hanoi - Maximum Relaxation",
                ko: "하노이 홈 바디 마사지 - 최대한의 휴식"
            },
            excerpt: {
                vi: "Dịch vụ massage body tại nhà chuyên nghiệp, mang đến sự thư giãn tối đa cho cơ thể và tinh thần.",
                en: "Professional body massage service at home, bringing maximum relaxation for body and mind.",
                ko: "집에서 전문 바디 마사지 서비스로 몸과 마음에 최대한의 휴식을 제공합니다."
            },
            image: "/placeholder.svg",
            date: "2025-07-20",
            category: "Massage",
            readTime: "5 phút đọc"
        }
    ];

    const categories = ["Tất cả", "Massage", "Spa", "Hướng dẫn", "Review"];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[400px] bg-gradient-to-r from-spa-primary/20 to-spa-secondary/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">
                        {t('blog_title') || 'Bài viết'}
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        {t('blog_subtitle') || 'Chia sẻ kiến thức chăm sóc sức khỏe và làm đẹp'}
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {categories.map((category) => (
                        <Badge
                            key={category}
                            variant="outline"
                            className="px-4 py-2 cursor-pointer hover:bg-spa-primary hover:text-white transition-colors"
                        >
                            {category}
                        </Badge>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.id} to={`/bai-viet/${post.id}`}>
                            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                                <div className="aspect-video bg-muted relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title.vi}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-spa-primary">
                                        {post.category}
                                    </Badge>
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                        <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 group-hover:text-spa-primary transition-colors line-clamp-2">
                                        {post.title.vi}
                                    </h3>

                                    <p className="text-muted-foreground line-clamp-3 mb-4">
                                        {post.excerpt.vi}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-spa-primary font-medium cursor-pointer hover:underline">
                                            Đọc thêm →
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-spa-primary text-white rounded-lg hover:bg-spa-primary/90 transition-colors">
                        Xem thêm bài viết
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;