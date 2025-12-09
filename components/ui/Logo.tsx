import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
    return (
        <Link href="/" className={`flex items-center gap-2 ${className}`}>
            <div className="relative h-8 w-8">
                <Image
                    src="/logo.png"
                    alt="Urulogic Logo"
                    fill
                    className="object-contain"
                />
            </div>

            <span className="text-2xl tracking-tight">
                <span className="font-medium text-primary">Uru</span>
                <span className="font-normal text-secondary">logic</span>
            </span>
        </Link>
    );
};
