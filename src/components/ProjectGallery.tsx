import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const { isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset index when images change
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isLightboxOpen]);

  const goToPrevious = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToSlide = (index: number) => {
    setImageLoaded(false);
    setCurrentIndex(index);
  };

  // Swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isRTL) {
      if (isLeftSwipe) goToPrevious();
      if (isRightSwipe) goToNext();
    } else {
      if (isLeftSwipe) goToNext();
      if (isRightSwipe) goToPrevious();
    }
  };

  if (images.length === 0) {
    return (
      <div className="aspect-video bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-sm">No images</span>
      </div>
    );
  }

  return (
    <>
      <div
        className="relative group"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Main Image - clickable to open lightbox */}
        <div
          className="aspect-video bg-muted overflow-hidden rounded-lg cursor-pointer relative"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            key={`${title}-${currentIndex}`}
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onLoad={() => setImageLoaded(true)}
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.4s ease-out, transform 0.5s ease-out',
            }}
          />

          {/* Zoom hint overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <ZoomIn className="w-5 h-5 text-foreground" />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => { e.stopPropagation(); isRTL ? goToNext() : goToPrevious(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full h-8 w-8 hover:bg-background/95 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => { e.stopPropagation(); isRTL ? goToPrevious() : goToNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full h-8 w-8 hover:bg-background/95 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-background/60 backdrop-blur-sm rounded-full px-2 py-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                className={`rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-primary w-5 h-2'
                  : 'bg-foreground/30 hover:bg-foreground/50 w-2 h-2'
                  }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
          style={{ animation: 'lightbox-in 0.3s ease-out forwards' }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-110 group"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Main lightbox image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'lightbox-image-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
          >
            <img
              src={images[currentIndex]}
              alt={`${title} screenshot ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
              draggable={false}
            />
          </div>

          {/* Lightbox nav arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); isRTL ? goToNext() : goToPrevious(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); isRTL ? goToPrevious() : goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Lightbox dots */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                  className={`rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-white w-6 h-2.5'
                    : 'bg-white/40 hover:bg-white/60 w-2.5 h-2.5'
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
