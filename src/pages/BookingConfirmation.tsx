import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Gift, Star, MapPin, Clock, Calendar, Phone } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const BookingConfirmation = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { user, addRewardPoints } = useAuth();
    const { toast } = useToast();
    const [rewardEarned] = useState(50); // Points earned from this booking

    // Get booking details from URL params
    const serviceName = searchParams.get('service') || 'Massage đá nóng';
    const date = searchParams.get('date') || new Date().toISOString().split('T')[0];
    const time = searchParams.get('time') || '15:00';
    const price = searchParams.get('price') || '470000';
    const shopName = searchParams.get('shop') || 'Spa Mai Moon';

    useEffect(() => {
        // Add reward points if user is logged in
        if (user && user.role === 'user') {
            addRewardPoints(rewardEarned);
            toast({
                title: "Bạn nhận được điểm thưởng! 🎁",
                description: `+${rewardEarned} điểm từ lần đặt lịch này`,
            });
        }
    }, [user, addRewardPoints, rewardEarned, toast]);

    const bookingDetails = {
        id: 'BK' + Date.now(),
        service: serviceName,
        shop: shopName,
        date: date,
        time: time,
        price: parseInt(price),
        address: '123 Phố Huế, Hai Bà Trưng, Hà Nội',
        phone: '024 3825 7777',
        status: 'confirmed'
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-spa-peach via-spa-warm to-spa-rose">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    {/* Success Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                            <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-foreground mb-2">
                            Đặt lịch thành công!
                        </h1>
                        <p className="text-muted-foreground">
                            Chúng tôi đã gửi thông tin xác nhận đến email của bạn
                        </p>
                    </div>

                    {/* Booking Details Card */}
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>Thông tin đặt lịch</span>
                                <Badge className="bg-green-500 text-white">
                                    Đã xác nhận
                                </Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">Mã đặt lịch</label>
                                    <p className="font-semibold">{bookingDetails.id}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">Dịch vụ</label>
                                    <p className="font-semibold">{bookingDetails.service}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">Cửa hàng</label>
                                    <p className="font-semibold">{bookingDetails.shop}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">Tổng tiền</label>
                                    <p className="font-semibold text-glow-primary text-lg">
                                        {bookingDetails.price.toLocaleString()}đ
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-muted-foreground" />
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">Ngày</label>
                                        <p className="font-semibold">{bookingDetails.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-muted-foreground" />
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">Giờ</label>
                                        <p className="font-semibold">{bookingDetails.time}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">Địa chỉ</label>
                                        <p className="font-semibold">{bookingDetails.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">Hotline</label>
                                    <p className="font-semibold">{bookingDetails.phone}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Reward Points Card */}
                    {user && user.role === 'user' && (
                        <Card className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
                                        <Gift className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-yellow-800">Điểm thưởng</h3>
                                        <p className="text-sm text-yellow-700">
                                            Bạn đã nhận được <span className="font-bold">+{rewardEarned} điểm</span> từ lần đặt lịch này
                                        </p>
                                        <p className="text-sm text-yellow-600">
                                            Tổng điểm hiện tại: <span className="font-bold">{user.rewardPoints} điểm</span>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Actions */}
                    <div className="space-y-3">
                        {user ? (
                            <Button
                                variant="glow"
                                className="w-full"
                                size="lg"
                                onClick={() => navigate(user.role === 'user' ? '/user-dashboard' : '/shop-dashboard')}
                            >
                                Xem lịch sử đặt lịch
                            </Button>
                        ) : (
                            <Button
                                variant="glow"
                                className="w-full"
                                size="lg"
                                onClick={() => navigate('/login')}
                            >
                                Đăng nhập để xem lịch sử
                            </Button>
                        )}

                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" onClick={() => navigate('/dich-vu')}>
                                Đặt lịch khác
                            </Button>
                            <Button variant="outline" asChild>
                                <Link to="/">Về trang chủ</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Rating Prompt */}
                    <Card className="mt-6">
                        <CardContent className="p-6 text-center">
                            <div className="flex justify-center mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-6 h-6 text-yellow-400 cursor-pointer hover:fill-yellow-400" />
                                ))}
                            </div>
                            <h3 className="font-semibold mb-2">Đánh giá trải nghiệm</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Hãy chia sẻ trải nghiệm của bạn để giúp chúng tôi cải thiện dịch vụ
                            </p>
                            <Button variant="outline" size="sm">
                                Đánh giá ngay
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;