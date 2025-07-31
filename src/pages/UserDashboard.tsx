import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Calendar,
    Clock,
    MapPin,
    Gift,
    Star,
    Phone,
    LogOut,
    User,
    CreditCard,
    History
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const UserDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Dummy booking data
    const bookings = [
        {
            id: 'BK1703001',
            service: 'Massage đá nóng',
            shop: 'Spa Mai Moon',
            date: '2024-01-15',
            time: '15:00',
            price: 470000,
            status: 'completed',
            address: '123 Phố Huế, Hai Bà Trưng, Hà Nội',
            rating: 5
        },
        {
            id: 'BK1703002',
            service: 'Massage thần kinh',
            shop: 'Glow Spa Hòa Bình',
            date: '2024-01-20',
            time: '10:30',
            price: 420000,
            status: 'confirmed',
            address: '456 Hoàng Diệu, Ba Đình, Hà Nội',
            rating: null
        },
        {
            id: 'BK1703003',
            service: 'Chăm sóc da mặt',
            shop: 'Beauty Center',
            date: '2024-01-12',
            time: '14:00',
            price: 350000,
            status: 'completed',
            address: '789 Láng Hạ, Đống Đa, Hà Nội',
            rating: 4
        }
    ];

    const rewardHistory = [
        { date: '2024-01-15', points: 50, description: 'Hoàn thành dịch vụ Massage đá nóng', type: 'earned' },
        { date: '2024-01-12', points: 35, description: 'Hoàn thành dịch vụ Chăm sóc da mặt', type: 'earned' },
        { date: '2024-01-10', points: 100, description: 'Điểm thưởng chào mừng', type: 'earned' },
        { date: '2024-01-08', points: -50, description: 'Sử dụng điểm giảm giá', type: 'used' }
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'completed':
                return <Badge className="bg-green-500 text-white">Hoàn thành</Badge>;
            case 'confirmed':
                return <Badge className="bg-blue-500 text-white">Đã xác nhận</Badge>;
            case 'cancelled':
                return <Badge className="bg-red-500 text-white">Đã hủy</Badge>;
            default:
                return <Badge className="bg-gray-500 text-white">Chờ xác nhận</Badge>;
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card className="w-full max-w-md">
                    <CardContent className="p-6 text-center">
                        <p className="mb-4">Vui lòng đăng nhập để xem dashboard</p>
                        <Button onClick={() => navigate('/login')}>Đăng nhập</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-spa-peach via-spa-warm to-spa-rose">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="w-16 h-16">
                                <AvatarFallback className="bg-glow-primary text-white text-xl">
                                    {user.name.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-3xl font-bold text-foreground">
                                    Chào {user.name}!
                                </h1>
                                <p className="text-muted-foreground">Quản lý đặt lịch và điểm thưởng</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/">
                                <Button variant="outline">Trang chủ</Button>
                            </Link>
                            <Button variant="ghost" onClick={handleLogout}>
                                <LogOut className="w-4 h-4 mr-2" />
                                Đăng xuất
                            </Button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <Calendar className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Tổng đặt lịch</p>
                                        <p className="text-2xl font-bold">{bookings.length}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-yellow-100 rounded-full">
                                        <Gift className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Điểm thưởng</p>
                                        <p className="text-2xl font-bold text-glow-primary">{user.rewardPoints}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-100 rounded-full">
                                        <CreditCard className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Tổng chi tiêu</p>
                                        <p className="text-2xl font-bold">
                                            {bookings.reduce((sum, booking) => sum + booking.price, 0).toLocaleString()}đ
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <Tabs defaultValue="bookings" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="bookings">Lịch đặt</TabsTrigger>
                            <TabsTrigger value="rewards">Điểm thưởng</TabsTrigger>
                            <TabsTrigger value="profile">Hồ sơ</TabsTrigger>
                        </TabsList>

                        <TabsContent value="bookings" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <History className="w-5 h-5" />
                                        Lịch sử đặt lịch
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {bookings.map((booking) => (
                                            <div key={booking.id} className="p-4 border rounded-lg">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 className="font-semibold text-lg">{booking.service}</h3>
                                                        <p className="text-muted-foreground">{booking.shop}</p>
                                                    </div>
                                                    {getStatusBadge(booking.status)}
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4 text-muted-foreground" />
                                                        <span>{booking.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4 text-muted-foreground" />
                                                        <span>{booking.time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold text-glow-primary">
                                                            {booking.price.toLocaleString()}đ
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 mt-3 text-sm">
                                                    <MapPin className="w-4 h-4 text-muted-foreground" />
                                                    <span className="text-muted-foreground">{booking.address}</span>
                                                </div>

                                                {booking.status === 'completed' && booking.rating && (
                                                    <div className="flex items-center gap-2 mt-3">
                                                        <span className="text-sm">Đánh giá:</span>
                                                        <div className="flex">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star
                                                                    key={star}
                                                                    className={`w-4 h-4 ${star <= booking.rating! ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex gap-2 mt-4">
                                                    {booking.status === 'confirmed' && (
                                                        <Button variant="outline" size="sm">
                                                            Hủy lịch
                                                        </Button>
                                                    )}
                                                    {booking.status === 'completed' && !booking.rating && (
                                                        <Button variant="outline" size="sm">
                                                            Đánh giá
                                                        </Button>
                                                    )}
                                                    <Button variant="outline" size="sm">
                                                        <Phone className="w-4 h-4 mr-1" />
                                                        Liên hệ
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="rewards" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Gift className="w-5 h-5" />
                                        Lịch sử điểm thưởng
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                                        <h3 className="font-semibold text-lg mb-2">Điểm thưởng hiện tại</h3>
                                        <p className="text-3xl font-bold text-glow-primary">{user.rewardPoints} điểm</p>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            Có thể đổi lấy ưu đãi giảm giá lên đến {Math.floor(user.rewardPoints / 10) * 1000}đ
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {rewardHistory.map((record, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                                <div>
                                                    <p className="font-medium">{record.description}</p>
                                                    <p className="text-sm text-muted-foreground">{record.date}</p>
                                                </div>
                                                <div className={`font-semibold ${record.type === 'earned' ? 'text-green-600' : 'text-red-600'
                                                    }`}>
                                                    {record.type === 'earned' ? '+' : ''}{record.points} điểm
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6">
                                        <Button variant="glow" className="w-full">
                                            Đổi điểm thưởng
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="profile" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <User className="w-5 h-5" />
                                        Thông tin cá nhân
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Tên</label>
                                            <p className="font-semibold">{user.name}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Email</label>
                                            <p className="font-semibold">{user.email}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Vai trò</label>
                                            <p className="font-semibold">Khách hàng</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Ngày tham gia</label>
                                            <p className="font-semibold">01/01/2024</p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t">
                                        <Button variant="outline">Chỉnh sửa thông tin</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;