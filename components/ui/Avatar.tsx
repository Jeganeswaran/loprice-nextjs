import Image from "next/image";

interface AvatarProps {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
}

export default function Avatar({ name, src, size = "md" }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const sizeConfig = {
    sm: { classes: "h-10 w-10 text-sm", px: 40 },
    md: { classes: "h-16 w-16 text-xl", px: 64 },
    lg: { classes: "h-24 w-24 text-3xl", px: 96 },
  }[size];

  // 3. Render optimized Next.js Image if src is provided
  if (src) {
    return (
      <div className={`relative ${sizeConfig.classes} shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md`}>
        <Image
          src={src}
          alt={name}
          width={sizeConfig.px}
          height={sizeConfig.px}
          className="object-cover"
          priority // Prioritizes loading the avatar since it's often above the fold
        />
      </div>
    );
  }

  // 4. Fallback to initials if no src is provided
  return (
    <div
      className={`${sizeConfig.classes} flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#bf2629] to-[#7f1114] font-bold text-white shadow-md border-2 border-white/20`}
    >
      {initials}
    </div>
  );
}