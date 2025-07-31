import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ServiceImageGalleryProps {
    images: string[];
    serviceName: string;
}

export const ServiceImageGallery = ({ images, serviceName }: ServiceImageGalleryProps) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Card className="overflow-hidden bg-white border-0 shadow-card">
            <div className="relative">
                {/* Main Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                        src={images[currentImage]}
                        alt={`${serviceName} - ${currentImage + 1}`}
                        className="w-full h-full object-cover"
                    />

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white h-10 w-10 p-0"
                                onClick={prevImage}
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white h-10 w-10 p-0"
                                onClick={nextImage}
                            >
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </>
                    )}

                    {/* Fullscreen Button */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white h-10 w-10 p-0"
                            >
                                <Expand className="h-5 w-5" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full">
                            <div className="aspect-[16/10] relative">
                                <img
                                    src={images[currentImage]}
                                    alt={`${serviceName} - ${currentImage + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImage + 1} / {images.length}
                    </div>
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                    <div className="p-4 bg-spa-cream">
                        <div className="flex gap-2 overflow-x-auto">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-200 ${index === currentImage
                                            ? "ring-2 ring-glow-primary ring-offset-2"
                                            : "hover:opacity-80"
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${serviceName} thumbnail ${index + 1}`}
                                        className="w-20 h-16 object-cover"
                                    />
                                    {index === currentImage && (
                                        <div className="absolute inset-0 bg-glow-primary/20" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
};