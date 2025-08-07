import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { MapPin, Star, Heart, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Dummy therapist data
const therapists = [
    {
        id: 1,
        name: "Phạm Thị Dung",
        avatar: "https://via.placeholder.com/100/FF69B4/FFFFFF?text=PD",
        location: "Bình Dương",
        district: "Thủ Dầu Một",
        rating: 4.8,
        reviewCount: 124,
        price: 250000,
        gender: "Female",
        experience: "3 năm",
        specialties: ["Massage Thái", "Foot massage", "Oil massage"],
        isVerified: true,
        distance: 1.2
    },
    {
        id: 2,
        name: "Thùy Trang",
        avatar: "https://via.placeholder.com/100/9370DB/FFFFFF?text=TT",
        location: "Hồ Chí Minh",
        district: "Quận 1",
        rating: 5.0,
        reviewCount: 89,
        price: 300000,
        gender: "Female",
        experience: "5 năm",
        specialties: ["Swedish massage", "Deep tissue", "Aromatherapy"],
        isVerified: true,
        distance: 2.5
    },
    {
        id: 3,
        name: "Trần Thùy Nhung",
        avatar: "https://via.placeholder.com/100/FF1493/FFFFFF?text=TN",
        location: "Hồ Chí Minh",
        district: "Quận 3",
        rating: 4.9,
        reviewCount: 156,
        price: 280000,
        gender: "Female",
        experience: "4 năm",
        specialties: ["Hot stone", "Reflexology", "Sports massage"],
        isVerified: true,
        distance: 3.1
    },
    {
        id: 4,
        name: "Quỳnh Anh",
        avatar: "https://via.placeholder.com/100/FF6347/FFFFFF?text=QA",
        location: "Hà Nội",
        district: "Ba Đình",
        rating: 4.7,
        reviewCount: 93,
        price: 220000,
        gender: "Female",
        experience: "2 năm",
        specialties: ["Traditional massage", "Prenatal massage"],
        isVerified: true,
        distance: 15.8
    },
    {
        id: 5,
        name: "Võ Thị Thu Thủy",
        avatar: "https://via.placeholder.com/100/32CD32/FFFFFF?text=VT",
        location: "Hồ Chí Minh",
        district: "Quận 7",
        rating: 4.6,
        reviewCount: 67,
        price: 200000,
        gender: "Female",
        experience: "1 năm",
        specialties: ["Relaxation massage", "Head massage"],
        isVerified: false,
        distance: 4.2
    },
    {
        id: 6,
        name: "Nguyễn Văn Nam",
        avatar: "https://via.placeholder.com/100/4169E1/FFFFFF?text=NV",
        location: "Bình Dương",
        district: "Dĩ An",
        rating: 4.5,
        reviewCount: 78,
        price: 240000,
        gender: "Male",
        experience: "3 năm",
        specialties: ["Deep tissue", "Sports massage", "Trigger point"],
        isVerified: true,
        distance: 2.8
    },
    {
        id: 7,
        name: "Lê Thị Hoa",
        avatar: "https://via.placeholder.com/100/FFB6C1/FFFFFF?text=LH",
        location: "Hồ Chí Minh",
        district: "Quận 2",
        rating: 4.8,
        reviewCount: 112,
        price: 290000,
        gender: "Female",
        experience: "4 năm",
        specialties: ["Couples massage", "Lymphatic drainage"],
        isVerified: true,
        distance: 5.3
    }
];

const locations = [
    "Tất cả",
    "Hồ Chí Minh",
    "Bình Dương",
    "Hà Nội",
    "Đà Nẵng"
];

export default function TherapistSelection() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [filteredTherapists, setFilteredTherapists] = useState(therapists);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGender, setSelectedGender] = useState(searchParams.get('filterGender') || 'All');
    const [selectedLocation, setSelectedLocation] = useState('Tất cả');
    const [priceRange, setPriceRange] = useState([150000, 350000]);
    const [minRating, setMinRating] = useState(0);
    const [sortBy, setSortBy] = useState('distance');

    const itemsPerPage = 6;

    useEffect(() => {
        let filtered = [...therapists];

        // Filter by gender
        if (selectedGender !== 'All') {
            filtered = filtered.filter(t => t.gender === selectedGender);
        }

        // Filter by location
        if (selectedLocation !== 'Tất cả') {
            filtered = filtered.filter(t => t.location === selectedLocation);
        }

        // Filter by price range
        filtered = filtered.filter(t => t.price >= priceRange[0] && t.price <= priceRange[1]);

        // Filter by rating
        filtered = filtered.filter(t => t.rating >= minRating);

        // Sort
        switch (sortBy) {
            case 'distance':
                filtered.sort((a, b) => a.distance - b.distance);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
        }

        setFilteredTherapists(filtered);
        setCurrentPage(1);
    }, [selectedGender, selectedLocation, priceRange, minRating, sortBy]);

    const totalPages = Math.ceil(filteredTherapists.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentTherapists = filteredTherapists.slice(startIndex, startIndex + itemsPerPage);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price).replace('₫', 'đ');
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                        Massage tại nhà Thủ Dầu Một
                    </h1>
                    <p className="text-muted-foreground">
                        Tìm thấy {filteredTherapists.length} nhà trị liệu phù hợp
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Column - Filters */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-24">
                            <CardContent className="p-6 space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Filter className="w-4 h-4" />
                                    <h3 className="font-semibold">Bộ lọc</h3>
                                </div>

                                {/* Gender Filter */}
                                <div>
                                    <h4 className="font-medium mb-3">Giới tính</h4>
                                    <div className="space-y-2">
                                        {['All', 'Female', 'Male'].map((gender) => (
                                            <div key={gender} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={gender}
                                                    checked={selectedGender === gender}
                                                    onCheckedChange={() => setSelectedGender(gender)}
                                                />
                                                <label htmlFor={gender} className="text-sm">
                                                    {gender === 'All' ? 'Tất cả' : gender === 'Female' ? 'Nữ' : 'Nam'}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Location Filter */}
                                <div>
                                    <h4 className="font-medium mb-3">Địa điểm</h4>
                                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {locations.map((location) => (
                                                <SelectItem key={location} value={location}>
                                                    {location}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <h4 className="font-medium mb-3">Giá tiền</h4>
                                    <div className="space-y-3">
                                        <Slider
                                            value={priceRange}
                                            onValueChange={setPriceRange}
                                            max={500000}
                                            min={100000}
                                            step={50000}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>{formatPrice(priceRange[0])}</span>
                                            <span>{formatPrice(priceRange[1])}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating Filter */}
                                <div>
                                    <h4 className="font-medium mb-3">Đánh giá</h4>
                                    <Select value={minRating.toString()} onValueChange={(value) => setMinRating(Number(value))}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0">Tất cả</SelectItem>
                                            <SelectItem value="4">4★ trở lên</SelectItem>
                                            <SelectItem value="4.5">4.5★ trở lên</SelectItem>
                                            <SelectItem value="4.8">4.8★ trở lên</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Therapist List */}
                    <div className="lg:col-span-3">
                        {/* Sort Controls */}
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-semibold">
                                Hiển thị {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredTherapists.length)} trong số {filteredTherapists.length} kết quả
                            </h3>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-48">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="distance">Gần nhất</SelectItem>
                                    <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
                                    <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
                                    <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Therapist Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {currentTherapists.map((therapist) => (
                                <Card key={therapist.id} className="hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex gap-4">
                                            <div className="relative">
                                                <img
                                                    src={therapist.avatar}
                                                    alt={therapist.name}
                                                    className="w-20 h-20 rounded-full object-cover"
                                                />
                                                {therapist.isVerified && (
                                                    <Badge className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1">
                                                        ✓
                                                    </Badge>
                                                )}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-semibold text-lg">{therapist.name}</h4>
                                                    <Button variant="ghost" size="sm">
                                                        <Heart className="w-4 h-4" />
                                                    </Button>
                                                </div>

                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="font-medium">{therapist.rating}</span>
                                                        <span className="text-sm text-muted-foreground">({therapist.reviewCount})</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-1 mb-2 text-sm text-muted-foreground">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{therapist.district}, {therapist.location}</span>
                                                    <span>• {therapist.distance}km</span>
                                                </div>

                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Kinh nghiệm: {therapist.experience}
                                                </p>

                                                <div className="flex flex-wrap gap-1 mb-3">
                                                    {therapist.specialties.slice(0, 2).map((specialty, index) => (
                                                        <Badge key={index} variant="secondary" className="text-xs">
                                                            {specialty}
                                                        </Badge>
                                                    ))}
                                                    {therapist.specialties.length > 2 && (
                                                        <Badge variant="secondary" className="text-xs">
                                                            +{therapist.specialties.length - 2}
                                                        </Badge>
                                                    )}
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-bold text-glow-primary">
                                                        {formatPrice(therapist.price)}
                                                    </span>
                                                    <Button
                                                        className="bg-glow-primary hover:bg-glow-primary/90"
                                                        onClick={() => navigate(`/therapist/${therapist.id}`)}
                                                    >
                                                        Đặt lịch
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center gap-2">
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    Trước
                                </Button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <Button
                                        key={page}
                                        variant={currentPage === page ? "default" : "outline"}
                                        onClick={() => setCurrentPage(page)}
                                        className="w-10"
                                    >
                                        {page}
                                    </Button>
                                ))}
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    Sau
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}