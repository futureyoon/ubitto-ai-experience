interface CircleDecorationProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "accent";
  opacity?: number;
}

export const CircleDecoration = ({ 
  className = "", 
  size = "md", 
  color = "primary",
  opacity = 10 
}: CircleDecorationProps) => {
  const sizeMap = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-96 h-96",
  };

  const colorMap = {
    primary: `bg-primary/${opacity}`,
    secondary: `bg-secondary/${opacity}`,
    accent: `bg-accent/${opacity}`,
  };

  return (
    <div className={`absolute rounded-full ${sizeMap[size]} ${colorMap[color]} ${className}`} />
  );
};
