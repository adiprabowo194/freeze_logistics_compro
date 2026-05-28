import Image from "next/image";
import DataImage from "@/public/assets/data";
import Link from "next/link";

// Mendefinisikan tipe props jika Anda menggunakan TypeScript (Opsional)
interface LogoProps {
  width?: number;
  height?: number;
}

function Logo({ width = 180, height = 180 }: LogoProps) {
  return (
    <div className="flex items-center justify-center md:justify-start relative z-60 w-full md:w-1/3">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src={DataImage.LogoFreezeLogistics}
          alt="Freeze Logistics Logo"
          width={width}
          height={height}
          className="rounded-xl object-contain"
        />
      </Link>
    </div>
  );
}

export default Logo;
