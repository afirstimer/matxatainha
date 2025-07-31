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
    DollarSign,
    Star,
    Phone,
    LogOut,
    Store,
    Users,
    TrendingUp,
    CheckCircle,
    XCircle
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const ShopDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Dummy orders data
    const orders = [
        {
            id: 'BK1703001',
            service: 'Massage đá nóng',
            customer: 'Nguyễn Văn An',
            phone: '0987654321',
            date: '2024-01-20',
            time: '15:00',
            price: 470000,
            status: 'confirmed',
            address: 'Tại cửa hàng',
            notes: 'Khách hàng VIP, ưu tiên phục vụ'
        },
        {
            id: 'BK1703002',
            service: 'Massage thần kinh',
            customer: 'Trần Thị Bình',
            phone: '0976543210',
            date: '2024-01-20',
            time: '10:30',
            price: 420000,
            status: 'pending',
            address: '456 Láng Hạ, Đống Đa, Hà Nội',
            notes: 'Dịch vụ tại nhà'
        },
        {
            id: 'BK1703003',
            service: 'Chăm sóc da mặt',
            customer: 'Lê Minh Cường',
            phone: '0965432109',
            date: '2024-01-19',
            time: '14:00',
            price: 350000,
            status: 'completed',
            address: 'Tại cửa hàng',
            notes: ''
        },
        {
            id: 'BK1703004',
            service: 'Massage toàn thân',
            customer: 'Phạm Thị Dung',
            phone: '0954321098',
            date: '2024-01-18',
            time: '16:30',
            price: 380000,
            status: 'cancelled',
            address: 'Tại cửa hàng',
            notes: 'Khách hàng hủy vào phút chót'
        }
    ];

    const todayOrders = orders.filter(order => order.date === '2024-01-20');
    const pendingOrders = orders.filter(order => order.status === 'pending');
    const completedOrders = orders.filter(order => order.status === 'completed');
    const totalRevenue = completedOrders.reduce((sum, order) => sum + order.price, 0);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'completed':
                return <Badge className="bg-green-500 text-white">Hoàn thành</Badge>;
            case 'confirmed':
                return <Badge className="bg-blue-500 text-white">Đã xác nhận</Badge>;
            case 'pending':
                return <Badge className="bg-yellow-500 text-white">Chờ xác nhận</Badge>;
            case 'cancelled':
                return <Badge className="bg-red-500 text-white">Đã hủy</Badge>;
            default:
                return <Badge className="bg-gray-500 text-white">Không xác định</Badge>;
        }
    };

    const updateOrderStatus = (orderId: string, newStatus: string) => {
        // In real app, this would update the database
        console.log(`Updating order ${orderId} to ${newStatus}`);
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
                                    {user.name}
                                </h1>
                                <p className="text-muted-foreground">Quản lý đơn hàng và doanh thu</p>
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <Calendar className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Hôm nay</p>
                                        <p className="text-2xl font-bold">{todayOrders.length}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-yellow-100 rounded-full">
                                        <Clock className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Chờ xác nhận</p>
                                        <p className="text-2xl font-bold">{pendingOrders.length}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-100 rounded-full">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Hoàn thành</p>
                                        <p className="text-2xl font-bold">{completedOrders.length}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-purple-100 rounded-full">
                                        <TrendingUp className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Doanh thu</p>
                                        <p className="text-2xl font-bold text-glow-primary">
                                            {totalRevenue.toLocaleString()}đ
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <Tabs defaultValue="orders" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="orders">Đơn hàng</TabsTrigger>
                            <TabsTrigger value="today">Hôm nay</TabsTrigger>
                            <TabsTrigger value="analytics">Thống kê</TabsTrigger>
                        </TabsList>

                        <TabsContent value="orders" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Store className="w-5 h-5" />
                                        Tất cả đơn hàng
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {orders.map((order) => (
                                            <div key={order.id} className="p-4 border rounded-lg">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 className="font-semibold text-lg">{order.service}</h3>
                                                        <p className="text-muted-foreground">Khách: {order.customer}</p>
                                                    </div>
                                                    {getStatusBadge(order.status)}
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4 text-muted-foreground" />
                                                        <span>{order.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4 text-muted-foreground" />
                                                        <span>{order.time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="w-4 h-4 text-muted-foreground" />
                                                        <span>{order.phone}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold text-glow-primary">
                                                            {order.price.toLocaleString()}đ
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 mt-3 text-sm">
                                                    <MapPin className="w-4 h-4 text-muted-foreground" />
                                                    <span className="text-muted-foreground">{order.address}</span>
                                                </div>

                                                {order.notes && (
                                                    <div className="mt-3 p-2 bg-gray-50 rounded text-sm">
                                                        <span className="font-medium">Ghi chú: </span>
                                                        {order.notes}
                                                    </div>
                                                )}

                                                <div className="flex gap-2 mt-4">
                                                    {order.status === 'pending' && (
                                                        <>
                                                            <Button
                                                                variant="default"
                                                                size="sm"
                                                                onClick={() => updateOrderStatus(order.id, 'confirmed')}
                                                            >
                                                                <CheckCircle className="w-4 h-4 mr-1" />
                                                                Xác nhận
                                                            </Button>
                                                            <Button
                                                                variant="destructive"
                                                                size="sm"
                                                                onClick={() => updateOrderStatus(order.id, 'cancelled')}
                                                            >
                                                                <XCircle className="w-4 h-4 mr-1" />
                                                                Từ chối
                                                            </Button>
                                                        </>
                                                    )}
                                                    {order.status === 'confirmed' && (
                                                        <Button
                                                            variant="default"
                                                            size="sm"
                                                            onClick={() => updateOrderStatus(order.id, 'completed')}
                                                        >
                                                            Hoàn thành
                                                        </Button>
                                                    )}
                                                    <Button variant="outline" size="sm">
                                                        <Phone className="w-4 h-4 mr-1" />
                                                        Gọi khách
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="today" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        Lịch hôm nay ({todayOrders.length} đơn)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {todayOrders.length === 0 ? (
                                            <p className="text-center text-muted-foreground py-8">
                                                Chưa có đơn hàng nào hôm nay
                                            </p>
                                        ) : (
                                            todayOrders.map((order) => (
                                                <div key={order.id} className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                                                    <div className="flex items-start justify-between mb-3">
                                                        <div>
                                                            <h3 className="font-semibold text-lg">{order.service}</h3>
                                                            <p className="text-muted-foreground">Khách: {order.customer}</p>
                                                            <p className="text-sm text-blue-600 font-medium">
                                                                <Clock className="w-4 h-4 inline mr-1" />
                                                                {order.time}
                                                            </p>
                                                        </div>
                                                        {getStatusBadge(order.status)}
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                        <div className="flex items-center gap-2">
                                                            <Phone className="w-4 h-4 text-muted-foreground" />
                                                            <span>{order.phone}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-semibold text-glow-primary">
                                                                {order.price.toLocaleString()}đ
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2 mt-3 text-sm">
                                                        <MapPin className="w-4 h-4 text-muted-foreground" />
                                                        <span className="text-muted-foreground">{order.address}</span>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="analytics" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <DollarSign className="w-5 h-5" />
                                            Doanh thu tháng này
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-3xl font-bold text-glow-primary mb-2">
                                            {totalRevenue.toLocaleString()}đ
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Từ {completedOrders.length} đơn hàng hoàn thành
                                        </p>
                                        <div className="mt-4 space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Massage đá nóng</span>
                                                <span>470,000đ</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Chăm sóc da mặt</span>
                                                <span>350,000đ</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Users className="w-5 h-5" />
                                            Khách hàng
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-3xl font-bold mb-2">
                                            {orders.length}
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Tổng số khách hàng đã phục vụ
                                        </p>
                                        <div className="mt-4 space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Khách hàng mới</span>
                                                <span>3</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Khách hàng quay lại</span>
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Dịch vụ phổ biến</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span>Massage đá nóng</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                                    <div className="bg-glow-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                                                </div>
                                                <span className="text-sm">80%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Massage thần kinh</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                                    <div className="bg-glow-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                                                </div>
                                                <span className="text-sm">60%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Chăm sóc da mặt</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                                    <div className="bg-glow-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                                                </div>
                                                <span className="text-sm">40%</span>
                                            </div>
                                        </div>
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

export default ShopDashboard;