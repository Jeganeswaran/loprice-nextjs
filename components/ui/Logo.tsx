import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /**
   * If true, uses logo-white.svg. If false, uses logo.svg.
   * @default false
   */
  isWhite?: boolean;
  /**
   * The height of the logo in pixels. Width scales automatically.
   * @default 40
   */
  height?: number;
  /**
   * Optional additional CSS classes
   */
  className?: string;
  /**
   * If true, wraps the logo in a Next.js Link to the homepage.
   * @default true
   */
  asLink?: boolean;
}

export default function Logo({
  isWhite = false,
  height = 40,
  className = "",
  asLink = true,
}: LogoProps) {
  // Determine which SVG to use
  const logoSrc = isWhite ? "/logo-white.svg" : "/logo.svg";

  // Calculate approximate width based on your original logo's aspect ratio (approx 2.5:1)
  // You can adjust the multiplier (2.5) if your logo is wider or narrower.
  const calculatedWidth = height * 2.5;

  const imageElement = (
    <Image
      src={logoSrc}
      alt="LoPrice.com Logo"
      width={calculatedWidth}
      height={height}
      className={`object-contain transition-opacity hover:opacity-90 ${className}`}
      priority // Ensures the logo loads immediately without layout shift
    />
  );

  // If asLink is false, just return the image
  if (!asLink) {
    return imageElement;
  }

  // Otherwise, wrap it in a Link to home
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
      aria-label="LoPrice Home"
    >
      {imageElement}
    </Link>
  );
}
