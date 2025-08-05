import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Building2, UserCheck, DollarSign, Settings, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import { Header } from '@/components/Header';

// Dummy data
const dummyShops = [
    { id: '1', name: 'Spa Mai Moon', address: '123 Nguyễn Huệ, Q.1, TP.HCM', phone: '0901234567', status: 'active', revenue: 15000000 },
    { id: '2', name: 'Relax Center', address: '456 Lê Lợi, Q.1, TP.HCM', phone: '0907654321', status: 'active', revenue: 12000000 },
    { id: '3', name: 'Beauty Salon', address: '789 Trần Hưng Đạo, Q.5, TP.HCM', phone: '0912345678', status: 'pending', revenue: 8000000 },
];

const dummyTechnicians = [
    { id: '1', name: 'Nguyễn Thị Lan', shopId: '1', specialties: ['Massage', 'Facial'], rating: 4.8, earnings: 5000000 },
    { id: '2', name: 'Trần Văn Minh', shopId: '1', specialties: ['Massage'], rating: 4.6, earnings: 4500000 },
    { id: '3', name: 'Lê Thị Hoa', shopId: '2', specialties: ['Facial', 'Skincare'], rating: 4.9, earnings: 5500000 },
    { id: '4', name: 'Phạm Văn Đức', shopId: '2', specialties: ['Massage', 'Therapy'], rating: 4.7, earnings: 4800000 },
];

const dummyUsers = [
    { id: '1', name: 'Nguyễn Văn An', email: 'user@example.com', phone: '0901111111', bookings: 15, totalSpent: 3500000 },
    { id: '2', name: 'Trần Thị Bình', email: 'binh@example.com', phone: '0902222222', bookings: 8, totalSpent: 2000000 },
    { id: '3', name: 'Lê Văn Cường', email: 'cuong@example.com', phone: '0903333333', bookings: 12, totalSpent: 2800000 },
];

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [selectedRecipient, setSelectedRecipient] = useState('');

    if (!user || user.role !== 'admin') {
        navigate('/');
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate('/');
        toast.success('Đăng xuất thành công');
    };

    const processPayment = () => {
        if (!selectedRecipient || !paymentAmount) {
            toast.error('Vui lòng chọn người nhận và nhập số tiền');
            return;
        }
        toast.success(`Đã chuyển ${parseInt(paymentAmount).toLocaleString('vi-VN')}đ cho ${selectedRecipient}`);
        setPaymentAmount('');
        setSelectedRecipient('');
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Bảng Điều Khiển Quản Trị</h1>
                        <p className="text-muted-foreground">Chào mừng, {user.name}</p>
                    </div>
                    <Button onClick={handleLogout} variant="outline">
                        <LogOut className="h-4 w-4 mr-2" />
                        Đăng Xuất
                    </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="overview">Tổng Quan</TabsTrigger>
                        <TabsTrigger value="shops">Quản Lý Shop</TabsTrigger>
                        <TabsTrigger value="technicians">Kỹ Thuật Viên</TabsTrigger>
                        <TabsTrigger value="users">Người Dùng</TabsTrigger>
                        <TabsTrigger value="payments">Thanh Toán</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Tổng Shop</CardTitle>
                                    <Building2 className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{dummyShops.length}</div>
                                    <p className="text-xs text-muted-foreground">
                                        {dummyShops.filter(s => s.status === 'active').length} đang hoạt động
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Kỹ Thuật Viên</CardTitle>
                                    <UserCheck className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{dummyTechnicians.length}</div>
                                    <p className="text-xs text-muted-foreground">
                                        Đánh giá TB: {(dummyTechnicians.reduce((acc, t) => acc + t.rating, 0) / dummyTechnicians.length).toFixed(1)}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Người Dùng</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{dummyUsers.length}</div>
                                    <p className="text-xs text-muted-foreground">
                                        {dummyUsers.reduce((acc, u) => acc + u.bookings, 0)} lượt booking
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Doanh Thu</CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {(dummyShops.reduce((acc, s) => acc + s.revenue, 0) / 1000000).toFixed(1)}M
                                    </div>
                                    <p className="text-xs text-muted-foreground">VNĐ tháng này</p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="shops" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Danh Sách Shop</CardTitle>
                                <CardDescription>Quản lý tất cả các shop trong hệ thống</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Tên Shop</TableHead>
                                            <TableHead>Địa Chỉ</TableHead>
                                            <TableHead>Điện Thoại</TableHead>
                                            <TableHead>Trạng Thái</TableHead>
                                            <TableHead>Doanh Thu</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {dummyShops.map((shop) => (
                                            <TableRow key={shop.id}>
                                                <TableCell className="font-medium">{shop.name}</TableCell>
                                                <TableCell>{shop.address}</TableCell>
                                                <TableCell>{shop.phone}</TableCell>
                                                <TableCell>
                                                    <Badge variant={shop.status === 'active' ? 'default' : 'secondary'}>
                                                        {shop.status === 'active' ? 'Hoạt động' : 'Chờ duyệt'}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>{shop.revenue.toLocaleString('vi-VN')}đ</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="technicians" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Danh Sách Kỹ Thuật Viên</CardTitle>
                                <CardDescription>Quản lý kỹ thuật viên và thu nhập</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Tên</TableHead>
                                            <TableHead>Shop</TableHead>
                                            <TableHead>Chuyên Môn</TableHead>
                                            <TableHead>Đánh Giá</TableHead>
                                            <TableHead>Thu Nhập</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {dummyTechnicians.map((tech) => (
                                            <TableRow key={tech.id}>
                                                <TableCell className="font-medium">{tech.name}</TableCell>
                                                <TableCell>
                                                    {dummyShops.find(s => s.id === tech.shopId)?.name}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex gap-1">
                                                        {tech.specialties.map((spec, idx) => (
                                                            <Badge key={idx} variant="outline">{spec}</Badge>
                                                        ))}
                                                    </div>
                                                </TableCell>
                                                <TableCell>{tech.rating}/5</TableCell>
                                                <TableCell>{tech.earnings.toLocaleString('vi-VN')}đ</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="users" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Danh Sách Người Dùng</CardTitle>
                                <CardDescription>Quản lý thông tin khách hàng</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Tên</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Điện Thoại</TableHead>
                                            <TableHead>Lượt Booking</TableHead>
                                            <TableHead>Tổng Chi Tiêu</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {dummyUsers.map((user) => (
                                            <TableRow key={user.id}>
                                                <TableCell className="font-medium">{user.name}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.phone}</TableCell>
                                                <TableCell>{user.bookings}</TableCell>
                                                <TableCell>{user.totalSpent.toLocaleString('vi-VN')}đ</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="payments" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Xử Lý Thanh Toán</CardTitle>
                                <CardDescription>Chuyển tiền cho shop và kỹ thuật viên</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium">Chọn người nhận</label>
                                        <Select value={selectedRecipient} onValueChange={setSelectedRecipient}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Chọn shop hoặc kỹ thuật viên" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="">Chọn người nhận</SelectItem>
                                                {dummyShops.map((shop) => (
                                                    <SelectItem key={`shop-${shop.id}`} value={`Shop: ${shop.name}`}>
                                                        Shop: {shop.name}
                                                    </SelectItem>
                                                ))}
                                                {dummyTechnicians.map((tech) => (
                                                    <SelectItem key={`tech-${tech.id}`} value={`KTV: ${tech.name}`}>
                                                        KTV: {tech.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Số tiền (VNĐ)</label>
                                        <Input
                                            type="number"
                                            placeholder="Nhập số tiền"
                                            value={paymentAmount}
                                            onChange={(e) => setPaymentAmount(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <Button onClick={processPayment} className="w-full md:w-auto">
                                    <DollarSign className="h-4 w-4 mr-2" />
                                    Xử Lý Thanh Toán
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default AdminDashboard;