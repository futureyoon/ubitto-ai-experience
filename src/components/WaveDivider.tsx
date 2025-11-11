interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  color?: "primary" | "secondary" | "accent" | "muted";
}

export const WaveDivider = ({ className = "", flip = false, color = "muted" }: WaveDividerProps) => {
  const colorMap = {
    primary: "fill-primary/10",
    secondary: "fill-secondary/10",
    accent: "fill-accent/10",
    muted: "fill-muted/30",
  };

  return (
    <div className={`w-full ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
          className={colorMap[color]}
        />
      </svg>
    </div>
  );
};
