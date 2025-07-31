import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, DollarSign, Clock, Star, Filter } from "lucide-react";

interface Filters {
    location: string;
    priceRange: number[];
    serviceType: string;
    rating: number;
    distance: number;
    availability: string;
}

interface ServiceFiltersProps {
    filters: Filters;
    onFiltersChange: (filters: Filters) => void;
}

export const ServiceFilters = ({ filters, onFiltersChange }: ServiceFiltersProps) => {
    const updateFilter = (key: keyof Filters, value: any) => {
        onFiltersChange({ ...filters, [key]: value });
    };

    const clearFilters = () => {
        onFiltersChange({
            location: "",
            priceRange: [0, 1000000],
            serviceType: "",
            rating: 0,
            distance: 50,
            availability: ""
        });
    };

    return (
        <Card className="sticky top-4 bg-white border-0 shadow-card">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                    <Filter className="h-5 w-5 text-glow-primary" />
                    Bộ lọc tìm kiếm
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* Location */}
                <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                        <MapPin className="h-4 w-4 text-glow-primary" />
                        Địa điểm
                    </Label>
                    <Select value={filters.location} onValueChange={(value) => updateFilter("location", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Chọn khu vực" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="hanoi">Hà Nội</SelectItem>
                            <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                            <SelectItem value="danang">Đà Nẵng</SelectItem>
                            <SelectItem value="ba-dinh">Ba Đình, Hà Nội</SelectItem>
                            <SelectItem value="hoan-kiem">Hoàn Kiếm, Hà Nội</SelectItem>
                            <SelectItem value="quan-1">Quận 1, HCM</SelectItem>
                            <SelectItem value="quan-3">Quận 3, HCM</SelectItem>
                            <SelectItem value="hai-chau">Hải Châu, Đà Nẵng</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Distance */}
                <div className="space-y-3">
                    <Label className="text-sm font-medium">Khoảng cách: {filters.distance}km</Label>
                    <Slider
                        value={[filters.distance]}
                        onValueChange={(value) => updateFilter("distance", value[0])}
                        max={100}
                        min={1}
                        step={1}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1km</span>
                        <span>100km</span>
                    </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                        <DollarSign className="h-4 w-4 text-glow-primary" />
                        Khoảng giá
                    </Label>
                    <Slider
                        value={filters.priceRange}
                        onValueChange={(value) => updateFilter("priceRange", value)}
                        max={1000000}
                        min={0}
                        step={50000}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{filters.priceRange[0].toLocaleString()}đ</span>
                        <span>{filters.priceRange[1].toLocaleString()}đ</span>
                    </div>
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                    <Label className="text-sm font-medium">Loại dịch vụ</Label>
                    <Select value={filters.serviceType} onValueChange={(value) => updateFilter("serviceType", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Chọn loại dịch vụ" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="massage-than">Massage thần kinh</SelectItem>
                            <SelectItem value="massage-co">Massage cổ vai gáy</SelectItem>
                            <SelectItem value="massage-bau">Massage bầu</SelectItem>
                            <SelectItem value="massage-foot">Massage chân</SelectItem>
                            <SelectItem value="massage-whole">Massage toàn thân</SelectItem>
                            <SelectItem value="massage-therapy">Vật lý trị liệu</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Rating */}
                <div className="space-y-3">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                        <Star className="h-4 w-4 text-glow-primary" />
                        Đánh giá tối thiểu
                    </Label>
                    <div className="space-y-2">
                        {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                            <div key={rating} className="flex items-center space-x-2">
                                <Checkbox
                                    checked={filters.rating === rating}
                                    onCheckedChange={(checked) => updateFilter("rating", checked ? rating : 0)}
                                />
                                <div className="flex items-center gap-1">
                                    <span className="text-sm">{rating}</span>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-muted-foreground">trở lên</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Availability */}
                <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                        <Clock className="h-4 w-4 text-glow-primary" />
                        Thời gian
                    </Label>
                    <Select value={filters.availability} onValueChange={(value) => updateFilter("availability", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Chọn thời gian" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="now">Có thể đặt ngay</SelectItem>
                            <SelectItem value="today">Trong ngày hôm nay</SelectItem>
                            <SelectItem value="weekend">Cuối tuần</SelectItem>
                            <SelectItem value="morning">Buổi sáng (6h-12h)</SelectItem>
                            <SelectItem value="afternoon">Buổi chiều (12h-18h)</SelectItem>
                            <SelectItem value="evening">Buổi tối (18h-22h)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-4 border-t">
                    <Button variant="glow" className="w-full">
                        Áp dụng bộ lọc
                    </Button>
                    <Button variant="outline" className="w-full" onClick={clearFilters}>
                        Xóa bộ lọc
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};