import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("login");
    const { login, signup } = useAuth();
    const { toast } = useToast();
    const navigate = useNavigate();

    const handleLogin = async (role: UserRole) => {
        if (!email || !password) {
            toast({
                title: "Vui lòng điền đầy đủ thông tin",
                variant: "destructive",
            });
            return;
        }

        setLoading(true);
        try {
            const success = await login(email, password, role);
            if (success) {
                toast({
                    title: "Đăng nhập thành công! 🎉",
                    description: `Chào mừng bạn quay lại`,
                });
                if (role === 'user') {
                    navigate('/user-dashboard');
                } else if (role === 'shop') {
                    navigate('/shop-dashboard');
                } else if (role === 'admin') {
                    navigate('/admin-dashboard');
                }
            } else {
                toast({
                    title: "Đăng nhập thất bại",
                    description: "Email, mật khẩu hoặc vai trò không đúng",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Có lỗi xảy ra",
                variant: "destructive",
            });
        }
        setLoading(false);
    };

    const handleSignup = async (role: UserRole) => {
        if (!email || !password || !name) {
            toast({
                title: "Vui lòng điền đầy đủ thông tin",
                variant: "destructive",
            });
            return;
        }

        setLoading(true);
        try {
            const success = await signup(email, password, name, role);
            if (success) {
                toast({
                    title: "Đăng ký thành công! 🎉",
                    description: role === 'user' ? "Bạn nhận được 100 điểm thưởng!" : "Chào mừng đến với Glow Vietnam",
                });
                if (role === 'user') {
                    navigate('/user-dashboard');
                } else if (role === 'shop') {
                    navigate('/shop-dashboard');
                } else if (role === 'admin') {
                    navigate('/admin-dashboard');
                }
            } else {
                toast({
                    title: "Đăng ký thất bại",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Có lỗi xảy ra",
                variant: "destructive",
            });
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-spa-peach via-spa-warm to-spa-rose flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        Glow Vietnam
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Đăng nhập</TabsTrigger>
                            <TabsTrigger value="signup">Đăng ký</TabsTrigger>
                        </TabsList>

                        <TabsContent value="login" className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="user@example.com hoặc shop@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Mật khẩu</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Button
                                    variant="glow"
                                    className="w-full"
                                    onClick={() => handleLogin('user')}
                                    disabled={loading}
                                >
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                    Đăng nhập như Khách hàng
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => handleLogin('shop')}
                                    disabled={loading}
                                >
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                    Đăng nhập như Cửa hàng
                                </Button>
                                <Button
                                    variant="secondary"
                                    className="w-full"
                                    onClick={() => handleLogin('admin')}
                                    disabled={loading}
                                >
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                    Đăng nhập như Quản trị viên
                                </Button>
                            </div>

                            <div className="text-sm text-muted-foreground text-center">
                                <p>Tài khoản demo:</p>
                                <p>Khách hàng: user@example.com</p>
                                <p>Cửa hàng: shop@example.com</p>
                                <p>Quản trị viên: admin@example.com</p>
                                <p>Mật khẩu: bất kỳ</p>
                            </div>
                        </TabsContent>

                        <TabsContent value="signup" className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="signup-name">Tên</Label>
                                <Input
                                    id="signup-name"
                                    placeholder="Nhập tên của bạn"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="signup-email">Email</Label>
                                <Input
                                    id="signup-email"
                                    type="email"
                                    placeholder="Nhập email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="signup-password">Mật khẩu</Label>
                                <Input
                                    id="signup-password"
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Button
                                    variant="glow"
                                    className="w-full"
                                    onClick={() => handleSignup('user')}
                                    disabled={loading}
                                >
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                    Đăng ký như Khách hàng
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => handleSignup('shop')}
                                    disabled={loading}
                                >
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                    Đăng ký như Cửa hàng
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>

                    <div className="mt-4 text-center">
                        <Link to="/" className="text-sm text-muted-foreground hover:underline">
                            Quay về trang chủ
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;