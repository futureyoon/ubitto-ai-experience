import * as React from "react";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "./carousel";

interface CarouselDotsProps {
  api: CarouselApi | undefined;
  className?: string;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({ api, className }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => api?.scrollTo(index),
    [api]
  );

  return (
    <div className={cn("flex justify-center gap-2 mt-6", className)}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            index === selectedIndex
              ? "w-8 bg-primary"
              : "w-2 bg-primary/30 hover:bg-primary/50"
          )}
          onClick={() => scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
