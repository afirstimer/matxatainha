import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import "../components/BlogContent.css";
import { Calendar, Clock, ArrowLeft, Share2, Heart, Eye } from "lucide-react";

const BlogDetail = () => {
    const { slug } = useParams();
    const { t } = useLanguage();

    // Sample blog post data - in real app this would come from API
    const blogPost = {
        id: 1,
        title: "Top 11+ Địa Chỉ Massage Thư Giãn Nổi Tiếng Tại Quận Gò Vấp, Thành Phố TP.HCM",
        slug: "top-11-dia-chi-massage-thu-gian-noi-tieng-tai-quan-go-vap-thanh-pho-tp-hcm",
        excerpt: "Quận Gò Vấp là điểm đến lý tưởng cho những ai muốn trải nghiệm dịch vụ massage thư giãn đa dạng, từ truyền thống đến hiện đại.",
        content: `
      <p>Quận Gò Vấp là điểm đến lý tưởng cho những ai muốn trải nghiệm dịch vụ massage thư giãn đa dạng, từ truyền thống đến hiện đại. Với không gian thoải mái và kỹ thuật viên chuyên nghiệp, các spa tại đây luôn cập nhật liều trình mới nhằm mang lại cảm giác dễ chịu tối ưu. Qua khảo sát thực tế và đánh giá từ khách hàng, Glow Massage tổng hợp danh sách <strong>11+ địa chỉ massage thư giãn nổi tiếng tại quận Gò Vấp</strong>.</p>
      
      <h2>Những tiêu chí lựa chọn địa chỉ massage thư giãn nổi tiếng tại quận Gò Vấp</h2>
      
      <p>Trước khi lập danh sách, chúng tôi áp dụng bộ khung đánh giá nghiêm ngặt nhằm đảm bảo chỉ giới thiệu những địa chỉ xứng đáng với bạn. Cùng xem qua những tiêu chí quan trọng để lựa chọn dịch vụ massage thư giãn hiệu quả.</p>

      <h3>1. Spa Thảo Linh - Massage truyền thống Việt Nam</h3>
      
      <p><strong>Địa chỉ:</strong> 123 Lê Đức Thọ, Phường 15, Quận Gò Vấp</p>
      <p><strong>Giờ hoạt động:</strong> 8:00 - 22:00 hằng ngày</p>
      <p><strong>Giá dịch vụ:</strong> 300.000 - 800.000 VNĐ</p>
      
      <p>Spa Thảo Linh nổi tiếng với các liệu trình massage truyền thống Việt Nam, sử dụng tinh dầu thiên nhiên và kỹ thuật ấn huyệt cổ truyền. Không gian tại đây được thiết kế theo phong cách Á Đông, mang lại cảm giác thư thái và gần gũi với thiên nhiên.</p>

      <h3>2. Golden Lotus Spa - Massage Thái cổ truyền</h3>
      
      <p><strong>Địa chỉ:</strong> 456 Quang Trung, Phường 8, Quận Gò Vấp</p>
      <p><strong>Giờ hoạt động:</strong> 9:00 - 23:00 hằng ngày</p>
      <p><strong>Giá dịch vụ:</strong> 400.000 - 1.200.000 VNĐ</p>
      
      <p>Chuyên về massage Thái cổ truyền với đội ngũ kỹ thuật viên được đào tạo chuyên nghiệp tại Thái Lan. Golden Lotus Spa mang đến trải nghiệm massage đúng chuẩn Thái với các động tác duỗi cơ và ấn huyệt độc đáo.</p>

      <h3>3. Zen Garden Spa - Massage đá nóng</h3>
      
      <p><strong>Địa chỉ:</strong> 789 Phạm Văn Chiêu, Phường 16, Quận Gò Vấp</p>
      <p><strong>Giờ hoạt động:</strong> 10:00 - 22:30 hằng ngày</p>
      <p><strong>Giá dịch vụ:</strong> 500.000 - 1.500.000 VNĐ</p>
      
      <p>Nổi bật với dịch vụ massage đá nóng, Zen Garden Spa sử dụng những viên đá bazan được nung nóng để massage toàn thân, giúp lưu thông máu và giảm căng thẳng hiệu quả.</p>

      <h2>Lời khuyên khi chọn spa massage tại Gò Vấp</h2>
      
      <ul>
        <li>Nên đặt lịch trước để đảm bảo có chỗ, đặc biệt vào cuối tuần</li>
        <li>Tham khảo review và đánh giá từ khách hàng trước đó</li>
        <li>Hỏi rõ về các loại dịch vụ và giá cả trước khi quyết định</li>
        <li>Chọn spa có giấy phép hoạt động và kỹ thuật viên có chứng chỉ</li>
      </ul>
      
      <p>Việc chọn được một địa chỉ massage uy tín không chỉ giúp bạn thư giãn mà còn đảm bảo an toàn sức khỏe. Hãy dành thời gian tìm hiểu kỹ trước khi đưa ra quyết định cuối cùng.</p>
    `,
        image: "/placeholder.svg",
        author: "Glow Massage Team",
        publishDate: "2025-07-15",
        readTime: "8 phút đọc",
        category: "Massage",
        tags: ["Massage", "Spa", "Gò Vấp", "TP.HCM", "Thư giãn"],
        views: 1234,
        likes: 89
    };

    const relatedPosts = [
        {
            id: 2,
            title: "Top 5 Spa Massage Cao Cấp Tại Quận 1",
            image: "/placeholder.svg",
            date: "2025-07-10"
        },
        {
            id: 3,
            title: "Hướng Dẫn Massage Tại Nhà Đơn Giản",
            image: "/placeholder.svg",
            date: "2025-07-05"
        },
        {
            id: 4,
            title: "Lợi Ích Của Massage Đối Với Sức Khỏe",
            image: "/placeholder.svg",
            date: "2025-06-30"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Link to="/" className="hover:text-spa-primary">Trang chủ</Link>
                    <span>/</span>
                    <Link to="/bai-viet" className="hover:text-spa-primary">Blog</Link>
                    <span>/</span>
                    <span className="text-foreground">{blogPost.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Back button */}
                        <Button variant="ghost" className="mb-6" asChild>
                            <Link to="/bai-viet">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Quay lại Blog
                            </Link>
                        </Button>

                        {/* Article Header */}
                        <div className="mb-8">
                            <Badge className="mb-4 bg-spa-primary">
                                {blogPost.category}
                            </Badge>

                            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                                {blogPost.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(blogPost.publishDate).toLocaleDateString("vi-VN")}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{blogPost.readTime}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    <span>{blogPost.views.toLocaleString()} lượt xem</span>
                                </div>
                                <span>Bởi {blogPost.author}</span>
                            </div>

                            {/* Social Actions */}
                            <div className="flex items-center gap-4 mb-6">
                                <Button variant="outline" size="sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    {blogPost.likes}
                                </Button>
                                <Button variant="outline" size="sm">
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Chia sẻ
                                </Button>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                            <img
                                src={blogPost.image}
                                alt={blogPost.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <div
                                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                                className="blog-content"
                            />
                        </div>

                        {/* Tags */}
                        <div className="mt-8 pt-6 border-t border-border">
                            <h3 className="text-lg font-semibold mb-4">Thẻ bài viết</h3>
                            <div className="flex flex-wrap gap-2">
                                {blogPost.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-spa-primary hover:text-white">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Author Card */}
                        <Card className="mt-8">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-spa-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                                        GM
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">{blogPost.author}</h4>
                                        <p className="text-muted-foreground">
                                            Đội ngũ chuyên gia của Glow Massage, chuyên cung cấp những thông tin hữu ích
                                            về massage, spa và chăm sóc sức khỏe.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Related Posts */}
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-4">Bài viết liên quan</h3>
                                <div className="space-y-4">
                                    {relatedPosts.map((post) => (
                                        <div key={post.id} className="group cursor-pointer">
                                            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-2">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <h4 className="text-sm font-medium group-hover:text-spa-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {new Date(post.date).toLocaleDateString("vi-VN")}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* CTA Card */}
                        <Card className="mt-6">
                            <CardContent className="p-6 text-center">
                                <h3 className="text-lg font-semibold mb-2">Đặt lịch ngay</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    Trải nghiệm dịch vụ massage chuyên nghiệp tại nhà
                                </p>
                                <Button className="w-full" variant="default">
                                    Đặt lịch ngay
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogDetail;